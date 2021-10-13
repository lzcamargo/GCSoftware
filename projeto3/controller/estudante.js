var db_connect = require('./../config/connection')

var estudante = {};

//Busca por todos os estudantes 
estudante.all = async function (req, res) {
  try {
    var estudantes = await db_connect.query("SELECT * FROM estudante;");
    res.send(estudantes);
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

//Consulta de Estudante por Matricula
estudante.byMatricula = async function (req, res) {
  try {
    var estudante_matr = req.params.estudante_matr;
    console.log(estudante_matr)
    var query = "SELECT * FROM estudante WHERE matricula_estudante = ?;"
    var estudantes = await db_connect.query(query, [estudante_matr]);
    res.send(estudantes);
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

//============ Inserção =====================//
estudante.create = async function (req, res) {
  try {
    var estudante = req.body;
    var query = "INSERT INTO estudante (matricula_estudante, nome_estudante, email_estudante) VALUES(?,?,?);"
    var values = [estudante.matricula_estudante, estudante.nome_estudante, estudante.email_estudante]
    var result = await db_connect.query(query, values);
    res.send({
      status: 'Inserção Efetuada com Sucesso',
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

// ==================== Busca por nome de Estudante name ====================
estudante.search = async function (req, res) {
  try {
    var nome = req.params.name;
    var query = `SELECT * FROM estudante WHERE nome_estudante LIKE '${nome}%';`
    var estudantes = await db_connect.query(query);
    res.send(estudantes);
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

//============= Atualização de Registro na Tabela estudante =============
estudante.update = async function (req, res) {
  try {
    var estudante_matr = req.params.estudante_matr;
    var estudante = req.body;
    var query = 'UPDATE estudante SET nome_estudante=?,email_estudante=? WHERE matricula_estudante=?'
    const values = [estudante.nome_estudante, estudante.email_estudante, estudante_matr]
    var result = await db_connect.query(query, values);
    res.send({
      status: "Atualização do Estudante :" + estudante.nome_estudante,
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

// ============== EXCLUSÃO de Registros na Tabela Estudante ==================
estudante.delete = async function (req, res) {
  try {
    var estudante_matr = req.params.estudante_matr;
    var query = 'DELETE FROM estudante WHERE matricula_estudante=?;';
    var result = await db_connect.query(query, [estudante_matr])
    res.send({
      status: "A Exclusão do Estudante : " + estudante_matr + " Foi Realizada!",
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro)
  }
}

module.exports = estudante;