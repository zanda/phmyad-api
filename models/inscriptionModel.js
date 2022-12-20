// inscription [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const inscription = db.define('inscription', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_du_club: {
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
    Date_de_naissance: {
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

export default inscription;