const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getAllActivities = async ()=>{
    const activityDB = await Activity.findAll({include:{model:Country}});
    return activityDB;
}
const getActivitiesByName = async (name) => {
    try {
        const response = await Activity.findAll({
            include: Country,
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });

        if (!response.length) {
            throw new Error("No activities with that name");
        }

        return response;
    } catch (error) {
        throw new Error(`Error in getActivitiesByName: ${error.message}`);
    }
};
module.exports = {
    getAllActivities,
    getActivitiesByName
}