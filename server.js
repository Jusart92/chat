const express = require("express");
const response = require("./network/response");
// const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
// app.use(bodyParser.json());

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Valor personalizado",
  });
  // res.send("Lista de mensajes");
  response.success(req, res, "Lista de Mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error simulado");
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

app.listen(3000);
console.log("La aplicacion está escuchando en http://localhost:3000");
