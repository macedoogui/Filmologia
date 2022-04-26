const mongoose = require('mongoose');

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

const findFilmeByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const chosenFilme = filmesService.findFilmeByIdService(idParam);

  if (!chosenFilme) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }

  res.send(chosenFilme);
};

const createFilmeController = async (req, res) => {
  const filme = req.body;
  const newFilme = await filmesService.createFilmeService(filme);
  res.send(newFilme);
};

const updateFilmeController = async (req, res) => {
  const idParam = req.params.id;
  const filmeEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenFilme = await filmesService.findFilmeByIdService(idParam);

  if (!chosenFilme) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }

  if (
    !filmeEdit ||
    !filmeEdit.nome ||
    !filmeEdit.sinopse ||
    !filmeEdit.imagem ||
    !filmeEdit.nota
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar!',
    });
  }

  const updatedFilme = await filmesService.updateFilmeService(
    idParam,
    filmeEdit,
  );
    
  res.send(updatedFilme);
};

const deleteFilmeController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenFilme = await filmesService.findFilmeByIdService(idParam);

  if (!chosenFilme) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }

  await filmesService.deleteFilmeService(idParam);

  res.send({ message: 'Filme deletado com sucesso!' });
};

module.exports = {
  findAllFilmesController,
  findFilmeByIdController,
  createFilmeController,
  updateFilmeController,
  deleteFilmeController,
};
