// next.config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    API_PROVIDER_1_KEY: process.env.API_PROVIDER_1_KEY,
    API_PROVIDER_2_KEY: process.env.API_PROVIDER_2_KEY,
    API_PROVIDER_3_KEY: process.env.API_PROVIDER_3_KEY,
    // ...
    API_PROVIDER_100_KEY: process.env.API_PROVIDER_100_KEY,
  },
};

/* I will update the above API details once I update my API details in the .env file */