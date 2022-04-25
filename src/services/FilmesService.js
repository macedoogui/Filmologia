const Filme = require('../models/Filme');

const findAllFilmesService = async () => {
  const allFilmes = await Filmes.find();
  return allFilmes;
};

const findFilmeByIdService = async (id) => {
  const filme = await Filme.findById(id);
  return filme;
};

const createFilmeService = (newFilme) => {
  const newId = filmes.length + 1;
  newFilme.id = newId;
  filmes.push(newFilme);
  return newFilme;
};

const updateFilmeService = (id, filmeEdited) => {
  filmeEdited['id'] = id;
  const filmeIndex = filmes.findIndex((filme) => filme.id == id);
  filmes[filmeIndex] = filmeEdited;
  return filmeEdited;
};

const deleteFilmeService = (id) => {
  const filmeIndex = filmes.findIndex((filme) => filme.id == id);
  return filmes.splice(filmeIndex, 1);
};

module.exports = {
  filmes,
  findAllFilmesService,
  findFilmeByIdService,
  createFilmeService,
  updateFilmeService,
  deleteFilmeService,
};
