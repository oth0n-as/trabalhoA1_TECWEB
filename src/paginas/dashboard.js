export default function renderDashboard(navegar) {
    const app = document.getElementById('app');
    const clientes = [];
  
    let abaAtual = 'formulario';
  
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = `
      <button id="btn-formulario" class="ativo">Cadastrar Cliente</button>
      <button id="btn-lista">Clientes Cadastrados</button>
      <button id="logout">Sair</button>
    `;
  
    const conteudo = document.createElement('div');
    conteudo.classList.add('conteudo');
  
    app.innerHTML = '';
    app.appendChild(sidebar);
    app.appendChild(conteudo);
  
    document.getElementById('btn-formulario').addEventListener('click', () => {
      abaAtual = 'formulario';
      atualizarAbas();
    });
  
    document.getElementById('btn-lista').addEventListener('click', () => {
      abaAtual = 'lista';
      atualizarAbas();
    });
  
    document.getElementById('logout').addEventListener('click', () => {
      navegar('login');
    });
  
    function atualizarAbas() {
      document.getElementById('btn-formulario').classList.remove('ativo');
      document.getElementById('btn-lista').classList.remove('ativo');
  
      if (abaAtual === 'formulario') {
        document.getElementById('btn-formulario').classList.add('ativo');
        renderizarFormulario();
      } else {
        document.getElementById('btn-lista').classList.add('ativo');
        renderizarLista();
      }
    }
  
    function renderizarFormulario() {
      conteudo.innerHTML = `
        <h3>Cadastrar novo cliente</h3>
        <form id="cliente-form">
          <label>Nome completo:</label>
          <input type="text" id="nome" required />
  
          <label>Email:</label>
          <input type="email" id="email" required />
  
          <label>Endereço:</label>
          <input type="text" id="endereco" required />
  
          <button type="submit">Cadastrar</button>
        </form>
      `;
  
      const form = document.getElementById('cliente-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
  
        if (!nome || !email || !endereco) {
          exibirMensagem('Preencha todos os campos!', 'erro');
          return;
        }
  
        if (!email.includes('@') || !email.includes('.')) {
          exibirMensagem('Email inválido!', 'erro');
          return;
        }
  
        clientes.push({ nome, email, endereco });
        form.reset();
        exibirMensagem('Cliente cadastrado com sucesso!', 'sucesso');
        if (abaAtual === 'lista') atualizarLista();
      });
    }
  
    function renderizarLista() {
      conteudo.innerHTML = `
        <h3>Clientes cadastrados (<span id="contador-clientes">0</span>)</h3>
        <input type="text" id="busca" placeholder="Buscar por nome, email ou endereço" />
        <ul id="lista-clientes" class="clientes-lista"></ul>
      `;
  
      const buscaInput = document.getElementById('busca');
      buscaInput.addEventListener('input', atualizarLista);
  
      atualizarLista();
    }
  
    function atualizarLista() {
      const lista = document.getElementById('lista-clientes');
      const contador = document.getElementById('contador-clientes');
      const termoBusca = document.getElementById('busca')?.value.toLowerCase() || '';
  
      if (!lista || !contador) return;
  
      lista.innerHTML = '';
  
      const clientesFiltrados = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(termoBusca) ||
        cliente.email.toLowerCase().includes(termoBusca) ||
        cliente.endereco.toLowerCase().includes(termoBusca)
      );
  
      contador.textContent = clientesFiltrados.length;
  
      clientesFiltrados.forEach((cliente, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${cliente.nome}</strong> - ${cliente.email} - ${cliente.endereco}
          <button data-index="${index}">Remover</button>
        `;
        lista.appendChild(li);
      });
  
      document.querySelectorAll('#lista-clientes button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          clientes.splice(index, 1);
          atualizarLista();
          exibirMensagem('Cliente removido com sucesso!', 'sucesso');
        });
      });
    }
  
    function exibirMensagem(texto, tipo = 'sucesso') {
      const msg = document.createElement('div');
      msg.innerText = texto;
      msg.className = tipo === 'erro' ? 'mensagem-erro' : 'mensagem-sucesso';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 3000);
    }
  
    atualizarAbas();
  }
  