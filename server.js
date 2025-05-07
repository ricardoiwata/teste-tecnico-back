const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco de dados estabelecida."))
  .catch((err) =>
    console.error("Não foi possível conectar ao banco de dados:", err)
  );

sequelize
  .sync()
  .then(() => console.log("Tabela de usuários criada."))
  .catch((err) => console.error("Erro ao criar a tabela:", err));

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
