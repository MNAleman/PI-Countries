const { getActivityById } = require('../controllers/getActivityById');

const getActivityByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getActivityById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getActivityByIdHandler
};
