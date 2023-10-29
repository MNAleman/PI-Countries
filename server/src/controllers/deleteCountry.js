const { Country } = require("../db");

const deleteCountryDB = async (id) => {
    try {
        const deletedRows = await Country.destroy({
            where: {
                id,
            },
        });

        if (deletedRows === 0) {
            throw new Error("Country not found");
        }
    } catch (error) {
        throw new Error("Error deleting Country");
    }
};

module.exports = {
    deleteCountryDB,
};
