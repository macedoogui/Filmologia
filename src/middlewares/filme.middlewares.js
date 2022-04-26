const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const filme = req.body;
  if (
    !filme ||
    !filme.nome ||
    !filme.sinopse ||
    !filme.imagem ||
    !filme.nota
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do filme!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
