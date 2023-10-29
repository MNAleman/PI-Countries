const { deleteCountryDB } = require("../controllers/deleteCountry");

const deleteCountryHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteCountryDB(id);
        res.status(200).json({ message: "Country deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    deleteCountryHandler,
};
