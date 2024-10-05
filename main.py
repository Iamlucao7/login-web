from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def conectar_banco():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='admins',
    )

def usuario_existe(cursor, usuario, email):
    query = "SELECT * FROM newusers WHERE usuario = %s OR email = %s"
    cursor.execute(query, (usuario, email))
    resultado = cursor.fetchone()
    return resultado is not None

@app.route('/registro', methods=['POST'])
def registrar_usuario():
    data = request.json
    print("Dados recebidos do front-end:", data)  # Depuração

    usuario = data['usuario']
    nome_completo = data['nome_completo'].upper()
    email = data['email'].upper()
    senha = data['senha']

    conexao = conectar_banco()
    cursor = conexao.cursor()

    # Verifica se o usuário já existe
    if usuario_existe(cursor, usuario, email):
        print("Erro: usuário ou email já cadastrados.")  # Depuração
        return jsonify({"success": False, "message": "Usuário ou email já cadastrados."})
    
    else:
        comando = '''INSERT INTO newusers (usuario, nome_completo, email, senha) 
                     VALUES (%s, %s, %s, SHA1(%s))'''
        valores = (usuario, nome_completo, email, senha)

        try:
            # Tenta executar o comando de inserção
            cursor.execute(comando, valores)
            conexao.commit()

            print("Usuário registrado com sucesso!")  # Depuração
            return jsonify({"success": True})
        
        except Exception as e:
            # Captura erros e retorna mensagem de erro
            print(f"Erro ao inserir no banco de dados: {e}")
            return jsonify({"success": False, "message": "Erro ao inserir no banco de dados."})

        finally:
            # Fecha a conexão independentemente do resultado
            cursor.close()
            conexao.close()

@app.route('/login', methods=['POST'])
def login_usuario():
    data = request.json
    print("Dados de login recebidos do front-end:", data)  # Depuração

    usuario = data['usuario']
    senha = data['senha']

    conexao = conectar_banco()
    cursor = conexao.cursor()

    # Verificar se o usuário existe e se a senha está correta
    query = "SELECT * FROM newusers WHERE usuario = %s AND senha = SHA1(%s)"
    cursor.execute(query, (usuario, senha))
    resultado = cursor.fetchone()

    if resultado:
        print("Login bem-sucedido!")  # Depuração
        return jsonify({"success": True, "message": "Login bem-sucedido!"})
    else:
        print("Usuário ou senha incorretos.")  # Depuração
        return jsonify({"success": False, "message": "Usuário ou senha incorretos."})

    cursor.close()
    conexao.close()



if __name__ == '__main__':
    app.run(debug=True)
