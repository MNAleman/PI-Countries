const { Activity } = require("../db");

const getActivityById = async (id) => {
    try {
        const activity = await Activity.findByPk(id, {
            include: Country,
        });

        if (!activity) {
            throw new Error("There are no activities with that ID");
        }

        return activity;
    } catch (error) {
        throw new Error(`Error in getActivityById: ${error.message}`);
    }
};

module.exports = {
    getActivityById,
};
