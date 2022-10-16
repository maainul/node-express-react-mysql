import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db','root','P@ssword12',{
    host:"localhost",
    dialect:"mysql"
});

export default db;