import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";
import Cliente from "./Cliente.js";
import Turno from "./Turno.js";

class Reserva extends Model {}

Reserva.init(
  {
    estado: {
      type: DataTypes.STRING,
      defaultValue: "pendiente"
    }
  },
  {
    sequelize,
    modelName: "Reserva",
    tableName: "RESERVAS",
    timestamps: false
  }
);

Reserva.belongsTo(Cliente, { foreignKey: "clienteId", as: "cliente" });
Cliente.hasMany(Reserva, { foreignKey: "clienteId", as: "reservas" });

Reserva.belongsTo(Turno, { foreignKey: "turnoId", as: "turno" });
Turno.hasMany(Reserva, { foreignKey: "turnoId", as: "reservas" });


export default Reserva;

