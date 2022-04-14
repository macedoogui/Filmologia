const baseUrl = "http://localhost:3000/filmes";

async function findAllFilmes() {
  const response = await fetch(`${baseUrl}/find-filmes`);

  const filmes = await response.json();
};

filmes.forEach((filme) => {
    document.getElementById("banners").insertAdjacentHTML(
      "beforeend",
      `<div class="FilmeLista">
        <div>
            <div class="FilmeLista__nome">${filme.nome}</div>
            <div class="FilmeLista__nota">${filme.nota}</div>

            <div class="FilmeLista__sinopse"> ${filme.sinopse}</div>
          </div>
            <img class="FilmeLista__imagem" src=${
              filme.foto
            } alt=${filme.nome} />
        </div>`
    );
  });

findAllFilmes();

const findFilmeById = async () => {
  const id = document.getElementById("idFilme").value;

  const response = await fetch(`${baseUrl}/find-filme/${id}`);

  const filme = await response.json();

  const filmeEscolhidoDiv = document.getElementById("filmeEscolhido");

  filmeEscolhidoDiv.innerHTML = `<div class="FilmeLista">
    <div>
      <div class="FilmeLista__nome">${filme.nome}</div>
      <div class="FilmeLista__nota">R$ ${filme.nota.toFixed(2)}</div>
      <div class="FilmeLista__sinopse">${filme.sinopse}</div>
    </div>
      <img class="FilmeLista__imagem" src=${
        filme.imagem
      } alt=${filme.nome}/>
  </div>`;
};