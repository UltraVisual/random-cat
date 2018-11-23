const axios = require("axios");
const API_KEY = process.env.API_KEY;
const TAG = "cat";
const API_URL = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${TAG}&rating=R`;

const getCatGif = async () => {
  const response = await axios.get(API_URL, {
    headers: { Accept: "application/json" }
  });

  return {
    item: [
      {
        text: response.data.data.images.original.url
      }
    ]
  };
};

module.exports = async ({ url }, res) => {
  if (url.includes("favicon")) {
    return;
  }

  const gif = await getCatGif();

  res.end(JSON.stringify(gif));
};
