const mongooose = require('mongoose');

const FilmeSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  sinopse: { type: String, required: true },
  imagem: { type: String, required: true },
  nota: { type: Number, required: true },
});

const Filme = mongooose.model('filmes', FilmeSchema);

module.exports = Filme;
