import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";
import Cancha from "./Cancha.js"; // Importar el modelo Cancha

class Turno extends Model {}

Turno.init(
  {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
        validate: {
            isDate: true,
        },
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Turno",
    tableName: "TURNOS",
    timestamps: false,
  }
);
Turno.belongsTo(Cancha, { foreignKey: "canchaId", as: "cancha" });
Cancha.hasMany(Turno, { foreignKey: "canchaId", as: "turnos" });


export default Turno;