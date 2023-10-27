const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getAllCountriesByName = async (name) => {
    try {
        const response = await Country.findAll({
            include: Activity,
            where: {
                nameOfficial: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });

        if (!response.length) {
            throw new Error("No hay países con ese nombre");
        }

        return response;
    } catch (error) {
        throw new Error(`Error in getAllCountriesByName: ${error.message}`);
    }
};

module.exports = {
    getAllCountriesByName,
};
