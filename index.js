const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const filmes = [
  {
    id: 1,
    nome: 'Clube da luta',
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.',
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
    nota: 10.0,
  },
  {
    id: 2,
    nome: 'O show de Truman',
    sinopse: 'Truman Burbank é um pacato vendedor de seguros que leva uma vida simples com sua esposa Meryl Burbank. Porém, algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. Após conhecer a misteriosa Lauren, ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.',
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/64/37/20269376.jpg',
    nota: 10.0,
  },
  {
    id: 3,
    nome: 'Click',
    sinopse: 'Um arquiteto casado e com filhos está cada vez mais frustrado por passar a maior parte de seu tempo trabalhando. Um dia, ele encontra um inventor excêntrico que lhe dá um controle remoto universal, com capacidade de acelerar o tempo. No início, ele usa o aparelho para acelerar qualquer momento tedioso, mas se dá conta de que está acelerando o tempo demais e deixando de viver preciosos momentos em família. Desesperado, ele procura o inventor para ajudá-lo a reverter o que fez.',
    imagem: 'https://macmagazine.com.br/wp-content/uploads/2013/09/19-click.jpg',
    nota: 9.5,
  },
];

app.get('/filmes/find-filme', (req, res) => {
  res.send(filme);
});

app.get('/filmes/find-filme/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenFilme = filmes.find((filme) => filme.id == idParam);
  res.send(chosenfilme);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});