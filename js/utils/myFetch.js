import config from "../../config.js";
import md5 from "./md5.js ";

const myFetch = (endpoint) => {
  const URL_MARVEL = "https://gateway.marvel.com/v1/public/";
  const { private_key, public_key } = config;
  const ts = Number(new Date());
  const hash = md5(`${ts}${private_key}${public_key}`);

  const queryParams = new URLSearchParams({
    ts,
    apikey: public_key,
    hash,
  });

  const header = {
    "Access-Control-Allow-Origin": "*",
  };

  return fetch(`${URL_MARVEL}${endpoint}?${queryParams}`, header).then(
    (data) => {
      if (data.status !== 200 && !data.ok) {
        console.error("[ERROR]: No se ha podido conectar, error", data);
      }
      return data.json();
    }
  );
};

export default myFetch;
