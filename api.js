import  express  from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import  Jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as avariaveis de ambiente do arq. .env

const app = express();

app.use(express.json());

// Rota aberta
app.get("/", (req,res) => {
    res.status(200).json({ msg: "Bem-vindo a nossa API"});
});

const dbUser = process.env.DB_user;
const db_password = process.env.DB_pass;

mongoose
    .connect(`mongodb+srv://${dbUser}:${db_password}@apiuc13.hnbpm.mongodb.net/?retryWrites=true&w=majority&appName=APIUC13`)
.then (() => {
    app.listen(3000);
    console.log("Conectou ao DataBase :)");
})
.catch((err) => console.log(err));