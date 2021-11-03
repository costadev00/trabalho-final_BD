/*
create: POST
read: GET
update: PUT
delete: DELETE
*/

module.exports.create = (req, res) => {
    global.conexao.query(
        'INSERT INTO `almoxarifado` (`codigo`,`nome`,`endereco`) VALUES (?,?,?);',
        [req.body.codigo, req.body.nome, req.body.endereco],
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
        'SELECT `almoxarifado`.`codigo`, `almoxarifado`.`nome`, `almoxarifado`.`endereco`FROM `almoxarifado`;',
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
        'UPDATE `almoxarifado` SET `nome` = ?,`endereco` = ? WHERE `codigo` = ?;',
        [req.body.nome, req.body.endereco, req.body.codigo],
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
        'DELETE FROM `almoxarifado` WHERE `codigo` = ?;',
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