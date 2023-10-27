const Activity = require("../models/Activity")

const getAllActivities = async ()=>{
    const activityDB = await Activity.findAll()
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
            throw new Error("No hay Actividades con ese nombre");
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