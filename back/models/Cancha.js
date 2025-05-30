import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";

class Cancha extends Model {}

Cancha.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50], // Nombre debe tener entre 3 y 50 caracteres
      },
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[7, 9]],
      },
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cancha",
    tableName: "CANCHAS",
    timestamps: false,
  }
);

export default Cancha;
