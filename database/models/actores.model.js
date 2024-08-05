
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = sequelize.define(
      "actor", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: {
          type: DataTypes.STRING
        },
        apellido: {
          type: DataTypes.STRING
        }
      },
      {
        // Options
        timestamps: false,
      }
    );
  
    return Actor;
  };