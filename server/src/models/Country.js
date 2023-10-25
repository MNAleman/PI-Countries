const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nameOfficial: {
      type: DataTypes.STRING,
    },
    nameCommon: {
      type: DataTypes.STRING,
    },
    flags: {
      type: DataTypes.STRING,
    },
    coatOfArms: {
      type: DataTypes.STRING,
    },
    continents: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    maps: {
      type: DataTypes.STRING,
    },
    timezones: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
    { timestamps: false });
};
