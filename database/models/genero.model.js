module.exports = (sequelize, Sequelize, DataTypes) => {
    const Genre = sequelize.define(
      "genre", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre_genero: {
          type: DataTypes.STRING
        }
      },
      {
        // Options
        timestamps: false,
      }
    );
  
    return Genre;
  };