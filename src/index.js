const express = require('express');
const debug = require("debug")("app:main");
const app = express();

const {AutoAPI} = require('./vehiculos/index.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());

AutoAPI(app);

/**Pagina principal */
app.get("/", (req, res) => res.send("<h1> Una vez mas </h1>"));

//App
app.listen(PORT, (req, res) => {
  debug(`Ejecutando en el puerto ${PORT}.`);
});
