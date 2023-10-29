const { Activity } = require("../db");

const getActivityById = async (id) => {
    try {
        const activity = await Activity.findByPk(id, {
            include: Country,
        });

        if (!activity) {
            throw new Error("No hay actividades con ese ID");
        }

        return activity;
    } catch (error) {
        throw new Error(`Error in getActivityById: ${error.message}`);
    }
};

module.exports = {
    getActivityById,
};
