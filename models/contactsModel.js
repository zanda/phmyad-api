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
    nomClub: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomPresident: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomCoach: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        freezeTableName: true,
        timestamps: false
});

export default Contacts;