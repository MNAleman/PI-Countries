const { Country } = require("../db");

const updateCountryDB = async (id, nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones) => {
    try {
        const updatedCountry = await Country.findByPk(id);

        if (!updatedCountry) {
            throw new Error("Country not found");
        }

        // Actualizar los campos del país
        await Country.update(
            { nameOfficial, nameCommon, flags, coatOfArms, continents, capital, subregion, area, population, maps, timezones },
            { where: { id } }
        );

        // Recargar el país con la información actualizada
        await updatedCountry.reload();

        return updatedCountry;
    } catch (error) {
        throw new Error("Error updating Country");
    }
};

module.exports = {
    updateCountryDB,
};
