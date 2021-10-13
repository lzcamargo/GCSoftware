let mysql = require('mysql2');
const { exit } = require('process');
let util = require('util');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projeto1db'
})

connection.connect((erro) => {
  if (erro) {
    console.log("Conexão com o SGBD MySQL NÃO EFETUADA")
    exit()
  }
  console.log("Conectado ao SGBD MySQL")
})

connection.query = util.promisify(connection.query);

module.exports = connection;