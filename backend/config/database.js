// import { Sequelize } from "sequelize";
// import dbConfig from "./db.config";

// const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorAliases: false,

//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });

// export default db;


import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db','root','P@ssword12',{
    host:"localhost",
    dialect:"mysql"
});

export default db;
