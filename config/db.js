import { Sequelize } from "sequelize";

const db = new Sequelize( 'hackcompetition', 'Maru23ata97', 'Moozisland987', {
    host: "phmyad.mongkauetfils.com",
    port: 44336,
    dialect: "mysql"
});

export default db;