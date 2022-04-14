const filmesService = require('../services/FilmesService');

const findFilmesController = (req, res) => {
  const allFilmes = filmesService.findFilmesService();
  res.send(allFilmes);
};

const findFilmeByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenFilme = filmesService.findFilmeByIdService(idParam);
  res.send(chosenFilme);
};

const createFilmeController = (req, res) => {
  const filme = req.body;
  const newFilme = filmesService.createFilmeService(filme);
  res.send(newFilme);
};

const updateFilmeController = (req, res) => {
  const idParam = +req.params.id;
  const filmeEdit = req.body;
  const updatedFilme = filmesService.updateFilmeService(idParam, filmeEdit);
  res.send(updatedFilme);
};

const deleteFilmeController = (req, res) => {
  const idParam = req.params.id;
  filmesService.deleteFilmeService(idParam);
  res.send({ message: 'Filme excluído com sucesso!' });
};

module.exports = {
  findFilmesController,
  findFilmeByIdController,
  createFilmeController,
  updateFilmeController,
  deleteFilmeController,
};