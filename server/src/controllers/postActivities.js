const { Activity, Country } = require("../db");

const createActivityDB = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({ name, difficulty, duration, season });

    const countriesList = await Country.findAll({
        where: {
            id: countries,
        },
    });

    await newActivity.setCountries(countriesList);

    return newActivity;
};

module.exports = {
    createActivityDB,
};

