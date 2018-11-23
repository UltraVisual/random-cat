const { send } = require('micro');
const axios = require("axios");
const API_URL = `https://api.thecatapi.com/v1/images/search?size=full`;

const getCatGif = async () => {
  const response = await axios.get(API_URL, {
    headers: { Accept: "application/json" }
  });

  return response.data[0].url;
};

module.exports = async ({ url }, res) => {
  if (url.includes("favicon")) {
    return;
  }

  const gif = await getCatGif();

  res.writeHead(302, {
	'Location': gif
  });

  send(res);
};
