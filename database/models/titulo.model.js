module.exports = (sequelize, Sequelize, DataTypes) => {
    const Title = sequelize.define(
      "title", // Nombre del modelo
      {
        // Los atributos  define un campo en la tabla y especifica su tipo de datos
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
        // Desactiva la creación automática de los campos createdAt y updatedAt
        timestamps: false,
      }
    );
  
    return Title;
  };