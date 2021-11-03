/*
create: POST
read: GET
update: PUT
delete: DELETE
*/

module.exports.create = (req, res) => {
    global.conexao.query(
        'INSERT INTO `estoque` (`codigoAlmoxarifado`,`codigoProduto`,`saldo`) VALUES (?, ?, ?);',
        [req.body.codigoAlmoxarifado, req.body.codigoProduto, req.body.saldo],
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send('sucesso').end();
            }
        }
      );
}

module.exports.read = (req, res) => {
    global.conexao.query(
        'SELECT `estoque`.`codigoAlmoxarifado`, `estoque`.`codigoProduto`, `estoque`.`saldo` FROM `estoque`;',
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

module.exports.update = (req, res) => {
    global.conexao.query(
        'UPDATE `estoque` SET `codigoProduto` = ?, `saldo` = ? WHERE `codigoAlmoxarifado` = ?;',
        [req.body.codigoProduto, req.body.saldo, req.body.codigoAlmoxarifado],
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send('sucesso').end();
            }
        }
      );
}

module.exports.delete = (req, res) => {
    global.conexao.query(
        'DELETE FROM `estoque` WHERE `codigoAlmoxarifado` = ?;',
        [req.params.codigoAlmoxarifado],
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            if (err) {
                res.status(500).send().end();
            } else {
                res.status(200).send('sucesso').end();
            }
        }
      );
}