const Filmes = require("../models");

const getAll = async (req, res) => {
  try {
    const catalogo = await Filmes.findAll();
    res.render("index", { catalogo, filmes: undefined });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
};
