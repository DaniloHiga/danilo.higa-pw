
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_funcionarios'
};

app.get('/api/funcionarios', async (req, res) => {
  try {
    const conexao = await mysql.createConnection(dbConfig);
    const [funcionarios] = await conexao.execute(
      'SELECT * FROM funcionarios'
    );
    await conexao.end();
    res.json(funcionarios);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao buscar funcionários.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
