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
//      allowNull: false
    },
    coatOfArms: {
      type: DataTypes.STRING,
//      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
//      allowNull: false
    },
    capital: {
      type:DataTypes.STRING,
//      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
//      allowNull: false
    },

    area: {
      type: DataTypes.INTEGER,
//      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
//      allowNull: false
    },
    maps: {
      type: DataTypes.STRING,
//      allowNull: false
    },
  
    timezones: {
      type: DataTypes.STRING,
//      allowNull: false,
    },
    
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,

    },
  },
    { timestamps: false });
};
