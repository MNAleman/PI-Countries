const { Activity } = require("../db");

const deleteActivityDB = async (id) => {
    const deletedRows = await Activity.destroy({
        where: {
            id,
        },
    });

    if (deletedRows === 0) {
        throw new Error("No se encontró la actividad para eliminar");
    }
};

module.exports = {
    deleteActivityDB,
};

