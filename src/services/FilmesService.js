const Filme = require('../models/Filme');

const findAllFilmesService = async () => {
  const allFilmes = await Filme.find();
  return allFilmes;
};

const findFilmeByIdService = async (id) => {
  const filme = await Filme.findById(id);
  return filme;
};

const createFilmeService = async (newFilme) => {
  const filmeCriado = await Filme.create(newFilme)
  return filmeCriado;
};

const updateFilmeService = async (id, filmeEdited) => {
  const filmeAtualizado = await Filme.findByIdAndUpdate(id, filmeEdited);
  return filmeAtualizado;
};

const deleteFilmeService = async (id) => {
  return await Filme.findByIdAndDelete(id);
};

module.exports = {
  findAllFilmesService,
  findFilmeByIdService,
  createFilmeService,
  updateFilmeService,
  deleteFilmeService,
};
