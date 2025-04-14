import './style.css';
import renderLogin from './paginas/login.js';
import renderDashboard from './paginas/dashboard.js';

const app = document.getElementById('app');

function navegar(pagina) {
  app.innerHTML = '';
  if (pagina === 'login') {
    renderLogin(navegar);
  } else if (pagina === 'dashboard') {
    renderDashboard(navegar);
  }
}

// Inicia na tela de login
navegar('login');
