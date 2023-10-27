const { createActivityDB } = require("../controllers/postActivities");

const createActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        const response = await createActivityDB(name, difficulty, duration, season, countries);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createActivityHandler,
};