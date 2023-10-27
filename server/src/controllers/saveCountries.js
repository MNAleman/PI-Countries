const axios = require("axios");
const { Country } = require("../db");
const { simplifiedCountries } = require("../utils/simplifiedCountries");

require("dotenv").config();

const URL = `http://localhost:5000/countries`;

const getAllCountries = async () => {
    try {
        const existingCountries = await Country.findAll();

        if (existingCountries.length === 0) {
            const infoApi = (await axios.get(`${URL}`)).data;
            const infoToDb = simplifiedCountries(infoApi);
            const saveAllCountries = await Country.bulkCreate(infoToDb);
            return saveAllCountries;
        } else {
            return existingCountries;
        }
    } catch (error) {
        throw new Error(`Error in getAllCountries: ${error.message}`);
    }
};

module.exports = {
    getAllCountries,
};