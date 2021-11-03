module.exports.d = (req, res) => {
    global.conexao.query(
        'SELECT almoxarifado.codigo, almoxarifado.nome, almoxarifado.endereco, produto.codigo, produto.nome, produto.estoqueMinimo,estoque.saldo FROM estoque INNER JOIN almoxarifado ON estoque.codigoAlmoxarifado=almoxarifado.codigo INNER JOIN produto ORDER BY produto.nome;',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send(results).end();
            }
        }
      );
}

module.exports.e = (req, res) => {
    global.conexao.query(
        'SELECT produto.codigo, produto.nome, produto.estoqueMinimo, estoque.saldo FROM produto INNER JOIN  estoque ON estoque.saldo=produto.estoqueMinimo',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send(results).end();
            }
        }
      );
}

module.exports.f = (req, res) => {
    global.conexao.query(
        'SELECT codigo, nome, saldo as "Saldo" FROM produto INNER JOIN  estoque ON estoque.codigoProduto=produto.codigo',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send(results).end();
            }
        }
      );
}

