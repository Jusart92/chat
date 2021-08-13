const express = require("express");
const db = require("./db");
const router = require("./network/routes");

const MONGOPASS = process.env.PASSWORD;
const url = `mongodb+srv://jusart92:${MONGOPASS}@cluster0.anotp.mongodb.net/backendNode`;

db(url);

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

//Estaticos
app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion está escuchando en http://localhost:3000");
