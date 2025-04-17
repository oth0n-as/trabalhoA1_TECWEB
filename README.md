
# Sistema de Cadastro de Clientes - E-commerce

Este é um projeto desenvolvido para a disciplina de Tecnologias Web, com o objetivo de praticar conceitos como **HTML, CSS, JavaScript** e **SPA (Single Page Application)** utilizando **Vite** com **JavaScript Vanilla**.

## Alunos
- Mariana Paiva de Souza Moreira (2312130137)
- Othon Flávio Alves de Sales (2312130178)

## 📋 Funcionalidades

- Tela de login com validação de campos obrigatórios
- Dashboard com:
  - Formulário de cadastro de cliente (nome, e-mail, endereço)
  - Listagem de clientes cadastrados
  - Remoção de clientes
  - Contador de clientes
  - Campo de busca dinâmica (nome, e-mail ou endereço)
  - Feedback de ações (mensagens de sucesso/erro)
- Navegação entre telas (Login / Dashboard) sem recarregar a página
- Estilização moderna e responsiva com tema roxo degradê

## 🚀 Como executar o projeto

### Pré-requisitos

Você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Git](https://git-scm.com/)

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/oth0n-as/trabalhoA1_TECWEB.git
```

2. Acesse o diretório do projeto:
```bash
cd trabalhoA1_TECWEB
```

3. Instale as dependências com o Vite:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse no navegador:
```
http://localhost:5173
```

## 📁 Estrutura de Pastas
```
📦trabalhoA1_TECWEB
 ┣ 📁paginas
 ┃ ┣ 📄login.js
 ┃ ┗ 📄dashboard.js
 ┣ 📄main.js
 ┣ 📄style.css
 ┗ 📄index.html
```

## 🧠 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla)
- Vite (dev server e bundler)

## 📌 Observações
- Os dados dos clientes não são persistidos em banco de dados — o armazenamento é apenas em memória (volátil).

