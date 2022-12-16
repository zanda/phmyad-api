// clients [model]
import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Clients = db.define('clientsLex', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING
    },
    prenom: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }},
    {
        freezeTableName: true
});

export default Clients;