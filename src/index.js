import express from "express";
const app = express()
const port = 8081
app.use(express.json())

import { create } from "./controllers/criarDica.js";
create(app)

import { getDicas } from "./controllers/buscarDica.js";
getDicas(app)

app.listen(port, () => {
    console.log("Conexão na porta 8081.");
})