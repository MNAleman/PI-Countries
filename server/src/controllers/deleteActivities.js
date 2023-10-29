const { Activity } = require("../db");

const deleteActivityDB = async (id) => {
    const deletedActivity = await Activity.destroy({
        where: {
            id,
        },
    });

    if (deletedActivity === 0) {
        throw new Error("Activity not found");
    }
    return "Activity deleted successfully";

};

module.exports = {
    deleteActivityDB,
};

