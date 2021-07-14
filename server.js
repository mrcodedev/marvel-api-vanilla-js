const express = require("express");

const app = express();

app.get("/characters", (request, response) => {
  request(
    {
      uri: "https://rickandmortyapi.com/api/character",
    },
    (error, response, body) => {
      if (!error && response.status === 200) {
        console.log(body);
      }
    }
  );
  return response.send("HOLIIIII");
});

app.listen(3060, () => {
  console.log("Node Server running on http://localhost:3060");
});
