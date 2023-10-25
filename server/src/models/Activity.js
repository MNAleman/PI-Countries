const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity',     {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty:{
     type: DataTypes.STRING,
     allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    created: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
//cada vez que cree una Actividad, le voy a agregar una columna llamada created seteado en true y el TRUE me va a determinar que viene de la DB 
    },
    
    
  },
  { timestamps: false });
};
