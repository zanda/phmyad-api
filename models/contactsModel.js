// contacts [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Contacts = db.define('Contacts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nom_club: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom_Prenom_President: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom_Prenom_Coach: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        timestamps: false
});

export default Contacts;