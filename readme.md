# **Sistema de Login e Registro com Flask e MySQL**

Este projeto é um sistema simples de login e registro desenvolvido utilizando **Flask** no backend, **MySQL** como banco de dados e **JavaScript** para a manipulação das telas no frontend. O sistema permite que usuários se registrem com nome, e-mail e senha, e façam login posteriormente.

## **Funcionalidades**
**Registro de usuários**: Os usuários podem se registrar fornecendo um nome de usuário, nome completo, e-mail e senha.

**Login de usuários**: Usuários podem fazer login com um nome de usuário (ou e-mail) e senha cadastrados.

**Validações básicas**: O sistema verifica se os campos foram preenchidos e se o usuário já está cadastrado.

**Proteção de senha**: As senhas são armazenadas de forma segura utilizando criptografia MD5.

**Limpeza de formulários**: Os campos de registro e login são limpos automaticamente após o uso.

## **Tecnologias Utilizadas**
**Backend**: Flask (Python);

**Frontend**: HTML, JavaScript, TailwindCSS; e

**Banco de Dados**: MySQL

## **Estrutura do Projeto**

**Arquivos Frontend**
**HTML**: Contém o layout das telas de login, registro e boas-vindas. Utiliza TailwindCSS para estilização.

**JavaScript** (app.js): Gerencia a alternância entre as telas de login e registro, realiza validações e envia as requisições para o backend usando fetch.

**Arquivo Backend**
Flask (app.py): Configura as rotas para registro e login, realiza a conexão com o banco de dados MySQL e verifica se os usuários já estão cadastrados. Para o login, verifica se o nome de usuário e a senha correspondem a um usuário existente no banco. As senhas são armazenadas utilizando **MD5** para criptografia.

# **Como Executar:**
## 1. Configure o Backend (Flask)

a. Certifique-se de ter o Python instalado.

b. Instale as dependências do Flask: 

    pip install flask flask-cors mysql-connector-python

c. Configure um banco de dados MySQL com a seguinte tabela:

    CREATE DATABASE admins;
    USE admins;

    CREATE TABLE newusers (

        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(100),
        nome_completo VARCHAR(255),
        email VARCHAR(255),
        senha VARCHAR(255)
    );
d. Execute o servidor Flask:

    python app.py

## 2. Configurar o Frontend
O arquivo HTML pode ser aberto diretamente no navegador. As requisições fetch no frontend já estão configuradas para se comunicar com o servidor Flask em http://localhost:5000.

## 3. Testar o Sistema
Abra o arquivo HTML no seu navegador.

Tente registrar um novo usuário e observe o feedback na interface.

Após o registro, faça login com as credenciais criadas.

## Melhorias Futuras
Implementar validações de senha mais fortes (comprimento mínimo, caracteres especiais, etc).

Adicionar suporte para recuperação de senha.

Melhorar a segurança das senhas utilizando métodos de hash mais modernos como bcrypt.

## Contribuições
Sinta-se à vontade para contribuir enviando pull requests ou relatando problemas!