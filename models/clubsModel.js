// clubs [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Clubs = db.define('Clubs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_Clubs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nombres_de_joeurs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Categories: {
        type: DataTypes.STRING,
        allowNull: true
 
    }},
    {
        freezeTableName: true,
        timestamps: false
});

export default Clubs;