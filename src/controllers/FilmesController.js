const filmesService = require('../services/FilmesService');

const findAllFilmesController = async (req, res) => {
  const allFilmes = await filmesService.findAllFilmesService();
  if (allFilmes.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum filme na sessão!' });
  }
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
  findAllFilmesController,
  findFilmeByIdController,
  createFilmeController,
  updateFilmeController,
  deleteFilmeController,
};