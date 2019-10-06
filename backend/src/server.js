const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@omnistack-bmkz4.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    // tira algumas mensagens do console
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// req: informaçoes enviadas do usuário.
// res: resposta

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição (criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
