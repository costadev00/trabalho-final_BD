/*
create: POST
read: GET
update: PUT
delete: DELETE
*/

module.exports.create = (req, res) => {
    global.conexao.query(
        'INSERT INTO `produto` (`codigo`,`nome`,`estoqueMinimo`) VALUES (?,?,?);',
        [req.body.codigo, req.body.nome, req.body.estoqueMinimo],
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
        'SELECT `produto`.`codigo`,`produto`.`nome`,`produto`.`estoqueMinimo` FROM `produto`;',
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
        'UPDATE `produto` SET `nome` = ?,`estoqueMinimo` = ? WHERE `codigo` = ?;',
        [req.body.nome, req.body.estoqueMinimo, req.body.codigo],
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
        'DELETE FROM `produto` WHERE `codigo` = ?;',
        [req.params.codigo],
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