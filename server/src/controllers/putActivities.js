const { Activity, Country } = require("../db");
//const sequelize = require("sequelize");

const updateActivityDB = async (id, name, difficulty, duration, season, countries) => {
    const updatedActivity = await Activity.findByPk(id);

    if (!updatedActivity) {
        throw new Error("Activity not found");
    }

    // Actualizar los campos de la actividad
    await Activity.update(
        { name, difficulty, duration, season },
        { where: { id } }
    );
    

    // Actualizar las asociaciones con los países
    const countriesList = await Country.findAll({
        where: {
            id: countries,
        },
    });

    await updatedActivity.setCountries(countriesList);

    // Recargar la actividad con las asociaciones actualizadas
    await updatedActivity.reload({
        include: {
            model: Country,
            attributes: ["id"],
            through: { attributes: [] },
        },
    });

    return updatedActivity;
};

module.exports = {
    updateActivityDB,
};
