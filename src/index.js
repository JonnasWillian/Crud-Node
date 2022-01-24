const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')

//Criação de rotas e conexão
app.use(express.json());
app.use(routes)

//Porta de acesso a aplicação
//Para iniciar aolicação utilize o código "yarn dev"
app.listen(3030);
console.log("Acesse o sistema em http://localhost:3030");