const { Country, Activity } = require("../db");

const getCountriesById = async (id) => {
    try {
        const country = await Country.findByPk(id.toUpperCase(), {
            include: Activity,
        });

        if (!country) {
            throw new Error("There are no countries with that ID.");
        }

        return country;
    } catch (error) {
        throw new Error(`Error in getCountriesById: ${error.message}`);
    }
};

module.exports = {
    getCountriesById,
};
