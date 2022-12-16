import { Sequelize } from "sequelize";

const db = new Sequelize( 'pensionLex', 'pandaMaster', 'U;Ds+1NsGo^X0Lgi,dgy', {
    host: "phmyad.mongkauetfils.com",
    port: 44336,
    dialect: "mysql"
});

export default db;