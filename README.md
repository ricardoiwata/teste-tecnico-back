# 👤 User Management API

API RESTful para gerenciamento de usuários, desenvolvida com **Node.js**, **Express**, **Sequelize** e **PostgreSQL**. A API permite **criar**, **listar**, **atualizar** e **excluir** usuários, garantindo a **não duplicação de e-mails**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [CORS](https://www.npmjs.com/package/cors)
- [Body-Parser](https://www.npmjs.com/package/body-parser)

---

## ⚙️ Pré-Requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js (v12 ou superior)
- PostgreSQL
- npm (ou yarn)

---

## 📦 Instalação

1. **Clone o repositório:**

git clone https://github.com/ricardoiwata/teste-tecnico-back.git
Acesse o diretório do projeto:

cd teste-tecnico-back

Instale as dependências:
npm install

🗃️ Configuração do Banco de Dados
Instale o PostgreSQL (se ainda não tiver).

Crie o banco de dados com o nome testeTecnico:

CREATE DATABASE testeTecnico;

Configure as credenciais:
O projeto assume o uso do usuário postgres com senha root. Se suas credenciais forem diferentes, edite as configurações no arquivo de conexão do Sequelize (src/database/index.js ou equivalente):

const sequelize = new Sequelize('testeTecnico', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

▶️ Executando a Aplicação
Após a configuração do banco de dados:

node server.js

O Sequelize criará automaticamente a tabela de usuários ao iniciar a aplicação.

📚 Endpoints da API
🔹 Criar Usuário
Método: POST

URL: /users

Corpo da requisição:

json
Copiar
Editar
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com"
}
Respostas:

201: Usuário criado com sucesso.

400: E-mail já cadastrado ou dados inválidos.

🔹 Listar Todos os Usuários
Método: GET

URL: /users

Resposta:

200: Lista de usuários.

🔹 Buscar Usuário por ID
Método: GET

URL: /users/:id

Resposta:

200: Detalhes do usuário.

404: Usuário não encontrado.

🔹 Atualizar Usuário
Método: PUT

URL: /users/:id

Corpo da requisição:

json
Copiar
Editar
{
  "name": "Novo Nome",
  "email": "novoemail@exemplo.com"
}
Respostas:

200: Usuário atualizado com sucesso.

400: Dados inválidos.

404: Usuário não encontrado.

🔹 Excluir Usuário
Método: DELETE

URL: /users/:id

Respostas:

204: Usuário deletado com sucesso.

404: Usuário não encontrado.

