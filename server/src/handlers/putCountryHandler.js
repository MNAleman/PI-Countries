const { updateCountryDB } = require("../controllers/putCountry");

const updateCountryHandler = async (req, res) => {
    const { id, nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones } = req.body;

    try {
        const response = await updateCountryDB(id, nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    updateCountryHandler,
};
