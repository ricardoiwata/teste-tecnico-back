const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testeTecnico", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
