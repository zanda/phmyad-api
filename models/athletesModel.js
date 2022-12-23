// Athletes [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Athletes = db.define('Athletes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomDuClub: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Categorie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DateDeNaissance: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Sexe: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        timestamps: false
});

export default Athletes;