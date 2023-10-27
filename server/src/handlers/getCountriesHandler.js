const { getAllCountriesByName } = require('../controllers/getCountriesByName');
const { getAllCountries } = require('../controllers/saveCountries');


const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const countryByName = await getAllCountriesByName(name);
            res.status(200).json(countryByName);
        }else{
            const allCountries = await getAllCountries();
            res.status(200).json(allCountries);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getCountriesHandler
};