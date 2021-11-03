const express = require('express')
const port = 3000
const cors = require('cors')
global.conexao = require('./bd')

const app = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    //CRUD DA TABELA ALMOXARIFADO
    .post("/almoxarifado", require('./controllers/Almoxarifado').create)
    .get("/almoxarifado", require('./controllers/Almoxarifado').read)
    .put("/almoxarifado", require('./controllers/Almoxarifado').update)
    .delete("/almoxarifado/:codigo", require('./controllers/Almoxarifado').delete)

    //CRUD DA TABELA PRODUTO
    .post("/produto", require('./controllers/Produto').create)
    .get("/produto", require('./controllers/Produto').read)
    .put("/produto", require('./controllers/Produto').update)
    .delete("/produto/:codigo", require('./controllers/Produto').delete)

    //CRUD DA TABELA ESTOQUE
    .post("/estoque", require('./controllers/Estoque').create)
    .get("/estoque", require('./controllers/Estoque').read)
    .put("/estoque", require('./controllers/Estoque').update)
    .delete("/estoque/:codigoAlmoxarifado", require('./controllers/Estoque').delete)

    //QUESTOES D, E, F
    .get("/selectd", require('./controllers/selects').d)
    .get("/selecte", require('./controllers/selects').e)
    .get("/selectf", require('./controllers/selects').f)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})