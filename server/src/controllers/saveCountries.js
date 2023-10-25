const axios = require("axios");
const { Country } = require("../db");
const { simplifiedCountries } = require("../utils/simplifiedCountries");

require("dotenv").config();

const URL = `http://localhost:5000/countries`;

const getAllCountries = async () => {
    try {
        const infoApi = (await axios.get(`${URL}`)).data;
        const infoTodb = simplifiedCountries(infoApi);

        const saveAllCountries = await Country.bulkCreate(infoTodb);
          

        return saveAllCountries;
    } catch (error) {
        console.error("Error in getAllCountries:", error);
        throw error;
    }
};

module.exports = {
    getAllCountries,
};
