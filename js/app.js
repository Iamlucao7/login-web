function login() {
    // Obter os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simples verificação para demonstrar (você pode alterar para uma verificação real)
    if (username === 'admin' && password === '1234') {
      // Esconder a tela de login
      document.getElementById('login-screen').classList.add('hidden');
      
      // Mostrar a tela de bem-vindo
      document.getElementById('welcome-screen').classList.remove('hidden');
    } else {
      alert('Usuário ou senha incorretos');
    }
     console.log("Script carregado");
  }
  
  function logout() {
    // Mostrar a tela de login novamente
    document.getElementById('login-screen').classList.remove('hidden');
    
    // Esconder a tela de bem-vindo
    document.getElementById('welcome-screen').classList.add('hidden');
  }

 