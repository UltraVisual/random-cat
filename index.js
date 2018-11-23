const axios = require("axios");
const API_KEY = 'pUmO0NS44yIck96toJAldYx9oqbUQB0e';
const TAG = 'cat';
const API_URL =
  `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${TAG}&rating=R`;

const getCatGif = async () => {
  const response = await axios.get(API_URL, {
    headers: { Accept: "application/json" }
  });

  return {
    item: [
      {
        text: response.data.data.images.original
      }
    ]
  };
};

module.exports = async (req, res) => {
  const gif = await getCatGif();

  res.end(JSON.stringify(gif));
};
