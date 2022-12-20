// competition [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Competition = db.define('Competition', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Lieux: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Heure: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Nom_des_participant: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_Arbitres: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }},
    {
        freezeTableName: true,
        timestamps: false
});

export default Competition;