import axios from 'axios';

const key = '5tgfswwkakk8vxmpn4d52pye';
const area = 'Manchester';

async function getHTML(url) {
  axios.get(`https://api.zoopla.co.uk/api/v1/property_listings.json?area=${area}&api_key=${key}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

export { getHTML };