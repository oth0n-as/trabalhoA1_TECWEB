export default function renderLogin(navegar) {
    const app = document.getElementById('app');
  
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-wrapper');
    loginContainer.innerHTML = `
      <div class="login-card">
        <h2>Faça seu login</h2>
        <form id="login-form">
          <label for="email">E-mail</label>
          <input type="email" id="email" required placeholder="Digite seu e-mail" />
    
          <label for="senha">Senha</label>
          <input type="password" id="senha" required placeholder="Digite sua senha" />
    
          <button type="submit">Entrar</button>
        </form>
        <p id="erro" style="color:red; display:none;">Preencha todos os campos corretamente.</p>
      </div>
    `;
  
    app.appendChild(loginContainer);
  
    const form = document.getElementById('login-form');
    const erro = document.getElementById('erro');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();
  
      if (email === '' || senha === '') {
        erro.style.display = 'block';
      } else {
        erro.style.display = 'none';
        navegar('dashboard'); // Chama a função de navegação pra ir pra tela interna
      }
    });
  }
  