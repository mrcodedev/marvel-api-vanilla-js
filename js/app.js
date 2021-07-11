import { getComics } from "./services/characters.js";

getComics().then((data) => console.log(data));
