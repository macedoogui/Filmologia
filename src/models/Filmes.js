const Sequelize = require("sequelize");
const connection = "../database/db";

const Filmes = connection.define("filmes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sinopse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  freezeTableName: true,
  timestamps: false,
  createAt: false,
  updateAt: false,
});

module.exports = Filmes;
