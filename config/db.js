import { Sequelize } from "sequelize";

const db = new Sequelize( 'pensionLex', 'pandaMaster', '', {
    host: "phmyad.mongkauetfils.com",
    port: 44336,
    dialect: "mysql"
});

export default db;