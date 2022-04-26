const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sinopse: { type: String, required: true },
  imagem: { type: String, required: true },
  nota: { type: Number, required: true },
});

const Filme = mongoose.model('filmes', FilmeSchema);

module.exports = Filme;
