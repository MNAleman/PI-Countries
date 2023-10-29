const { updateActivityDB } = require("../controllers/putActivities");

const updateActivityHandler = async (req, res) => {
    const { id } = req.params;
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        const response = await updateActivityDB(id, name, difficulty, duration, season, countries);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    updateActivityHandler,
};
