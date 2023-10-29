const { Country } = require("../db");

const createCountryDB = async (id, nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones) => {
    try {
        const newCountryDB = await Country.create({
            id, nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones,
        });

        return newCountryDB;
    } catch (error) {
        throw new Error("Error creating Country");
    }
};

module.exports = {
    createCountryDB,
};
