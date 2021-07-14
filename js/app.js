import { getComics } from "./services/characters.js";

const renderCharacters = (dataCharacters) => {
  const app = document.querySelector("#app");
  const spinner = document.querySelector(".spinner");
  const wrapperImage = document.createElement("div");

  wrapperImage.classList = "wrapper-images";
  wrapperImage.innerHTML = dataCharacters;
  spinner.classList.toggle("active");

  app.appendChild(wrapperImage);
};

const render = async () => {
  const comics = await getComics();

  const dataCharacters = comics.data.results
    .map((character, index) => {
      return `<div key="${index}" class="container-image">
      <h2>${character.name}</h2>
      <img class="image-character" src="${character.thumbnail.path}.${character.thumbnail.extension}" />
    </div>`;
    })
    .join("");

  renderCharacters(dataCharacters);
};

render();
