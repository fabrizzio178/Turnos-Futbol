import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";

class Cliente extends Model {};

Cliente.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
        },
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    }, {
    sequelize,
    modelName: "Cliente",
    tableName: "CLIENTES",
    timestamps: false,

});

export default Cliente;