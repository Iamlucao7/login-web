function mostrar_tela_registro() {
  // Escondendo tela de login
  document.getElementById('login-screen').classList.add('hidden');
  
  // Mostrando a tela de registro
  document.getElementById('register-screen').classList.remove('hidden');
}

function mostrar_tela_login() {
  // Mostrando tela de login
  document.getElementById('login-screen').classList.remove('hidden');
  
  // Escondendo tela de registro
  document.getElementById('register-screen').classList.add('hidden');

  // Limpar campos do formulário de registro
  document.getElementById('new-username').value = '';
  document.getElementById('nome-completo').value = '';
  document.getElementById('email').value = '';
  document.getElementById('new-password').value = '';
}

function registrar() {
  const usuario = document.getElementById('new-username').value;
  const nome_completo = document.getElementById('nome-completo').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('new-password').value;

  // Validações simples 
  if (!usuario || !nome_completo || !email || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Faz a requisição ao servidor Flask para registrar o usuário
  fetch('http://localhost:5000/registro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usuario: usuario,
      nome_completo: nome_completo,
      email: email,                 
      senha: senha
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data); // Depuração
    if (data.success) {
      alert("Usuário registrado com sucesso!");
      mostrar_tela_login();  // Voltar para a tela de login após registro bem-sucedido
    } else {
      alert(data.message);
    }
  })
  .catch((error) => {
    console.error('Erro na requisição:', error);
  });
}

function login() {
  console.log("Botão de login clicado");  // Depuração

  const usuario = document.getElementById('username').value;
  const senha = document.getElementById('password').value;

  // Validação para verificar se os campos estão preenchidos
  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Fazer requisição para o servidor Flask
  fetch('http://localhost:5000/login', { // Corrigido para o endpoint de login
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usuario: usuario,
      senha: senha
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data); // Depuração
    if (data.success) {
      // Login bem-sucedido, mostrar tela de boas-vindas
      document.getElementById('login-screen').classList.add('hidden');
      document.getElementById('welcome-screen').classList.remove('hidden');
    } else {
      alert(data.message);  // Exibir mensagem de erro
    }
  })
  .catch((error) => {
    console.error('Erro na requisição:', error);
  });
}

function logout() {
  // Ocultar tela de boas-vindas
  document.getElementById('welcome-screen').classList.add('hidden');
  
  // Mostrar tela de login
  mostrar_tela_login();

  // Limpar campos do formulário de login
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  // Limpar campos do formulário de registro
  document.getElementById('new-username').value = '';
  document.getElementById('nome-completo').value = '';
  document.getElementById('email').value = '';
  document.getElementById('new-password').value = '';
}
