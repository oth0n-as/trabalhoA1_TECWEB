export default function renderNavbar(navegar) {
    const nav = document.createElement('nav');
    nav.innerHTML = `
      <h2>E-commerce</h2>
      <button id="logoutBtn">Sair</button>
    `;
  
    nav.querySelector('#logoutBtn').addEventListener('click', () => {
      navegar('login');
    });
  
    return nav;
  }
  