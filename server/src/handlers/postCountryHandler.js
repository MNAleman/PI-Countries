const { createCountryDB } = require("../controllers/postCountry");

const createCountryHandler = async (req, res) => {
    const { 
        id, 
        nameOfficial, 
        nameCommon, 
        flags, 
        coatOfArms, 
        continents, 
        capital, 
        subregion, 
        area, 
        population, 
        maps, 
        timezones } = req.body;

    try {
        const response = await createCountryDB(
            id, 
            nameOfficial, 
            nameCommon, 
            flags, 
            coatOfArms, 
            continents, 
            capital, 
            subregion, 
            area, 
            population, 
            maps, 
            timezones);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createCountryHandler,
};
