const express = require("express");
const app = express();
const server = require("http").Server(app);

const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

const MONGOPASS = process.env.PASSWORD;
const url = `mongodb+srv://jusart92:${MONGOPASS}@cluster0.anotp.mongodb.net/backendNode`;

db(url);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);

router(app);

//Estaticos
app.use("/app", express.static("public"));

server.listen(3000, () => {
  console.log("La aplicacion está escuchando en http://localhost:3000");
});
