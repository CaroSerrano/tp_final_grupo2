module.exports = (sequelize, Sequelize, DataTypes) => {
    const Category = sequelize.define(
      "category", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre_categoria: {
          type: DataTypes.STRING
        }
      },
      {
        // Options
        timestamps: false,
      }
    );
  
    return Category;
  };