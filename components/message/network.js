const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Valor personalizado",
  });
  // res.send("Lista de mensajes");
  response.success(req, res, "Lista de Mensajes");
});

router.post("/", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulación de los errores"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

module.exports = router;
