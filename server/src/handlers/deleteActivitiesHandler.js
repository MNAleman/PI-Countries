const { deleteActivityDB } = require("../controllers/deleteActivities");

const deleteActivityHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteActivityDB(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    deleteActivityHandler,
};
