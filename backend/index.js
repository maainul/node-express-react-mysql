import express from "express";
import db from "./config/database";


const app = express();

try{
    await db.authenticate();
    console.log('Database Connected successfully')
}catch(error){
    console.log('Connection error :',error);
}