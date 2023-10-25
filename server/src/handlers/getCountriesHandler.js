const { getAllCountries } = require('../controllers/saveCountries');

const getCountriesHandler = async (req, res) => {
    const { country } = req.query;
    try {
        const response = await getAllCountries(country);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getCountriesHandler
};