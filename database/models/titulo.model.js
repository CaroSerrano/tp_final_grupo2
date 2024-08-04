module.exports = (sequelize, Sequelize, DataTypes) => {
    const Title = sequelize.define(
      "title", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nombre_titulo: {
          type: DataTypes.STRING
        }, 
        id_categoria: {
            type: DataTypes.INTEGER
        }, 
        id_genero: {
        type: DataTypes.INTEGER
        }, 
        temporadas: {
        type: DataTypes.INTEGER
        }, 
        calificacion: {
        type: DataTypes.INTEGER
        }
      },
      {
        // Options
        timestamps: false,
      }
    );
  
    return Title;
  };