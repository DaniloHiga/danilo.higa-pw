
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

// LISTAR funcionários
app.get('/api/funcionarios', async (req, res) => {
  let conexao;

  try {
    conexao = await mysql.createConnection(dbConfig);

    const [funcionarios] = await conexao.execute(
      'SELECT * FROM funcionarios ORDER BY id DESC'
    );

    res.json(funcionarios);
  } catch (erro) {
    console.error('Erro ao listar:', erro);
    res.status(500).json({ erro: 'Erro ao listar funcionários.' });
  } finally {
    if (conexao) await conexao.end();
  }
});

// CADASTRAR funcionário
app.post('/api/funcionarios', async (req, res) => {
  const { nome, funcao, salario } = req.body;

  if (
    !nome?.trim() ||
    !funcao?.trim() ||
    salario === undefined ||
    salario === null ||
    salario === '' ||
    !Number.isFinite(Number(salario)) ||
    Number(salario) < 0
  ) {
    return res.status(400).json({ erro: 'Dados inválidos.' });
  }

  let conexao;

  try {
    conexao = await mysql.createConnection(dbConfig);

    const [resultado] = await conexao.execute(
      'INSERT INTO funcionarios (nome, funcao, salario) VALUES (?, ?, ?)',
      [nome.trim(), funcao.trim(), Number(salario)]
    );

    res.status(201).json({
      id: resultado.insertId,
      nome: nome.trim(),
      funcao: funcao.trim(),
      salario: Number(salario)
    });
  } catch (erro) {
    console.error('Erro ao cadastrar:', erro);
    res.status(500).json({ erro: 'Erro ao cadastrar funcionário.' });
  } finally {
    if (conexao) await conexao.end();
  }
});

// EDITAR funcionário
app.put('/api/funcionarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, funcao, salario } = req.body;

  if (
    !Number.isInteger(Number(id)) ||
    Number(id) <= 0 ||
    !nome?.trim() ||
    !funcao?.trim() ||
    salario === undefined ||
    salario === null ||
    salario === '' ||
    !Number.isFinite(Number(salario)) ||
    Number(salario) < 0
  ) {
    return res.status(400).json({ erro: 'Dados inválidos.' });
  }

  let conexao;

  try {
    conexao = await mysql.createConnection(dbConfig);

    const [resultado] = await conexao.execute(
      'UPDATE funcionarios SET nome = ?, funcao = ?, salario = ? WHERE id = ?',
      [nome.trim(), funcao.trim(), Number(salario), Number(id)]
    );

    if (resultado.affectedRows === 0) {
      const [existentes] = await conexao.execute(
        'SELECT id FROM funcionarios WHERE id = ?',
        [Number(id)]
      );

      if (existentes.length === 0) {
        return res.status(404).json({ erro: 'Funcionário não encontrado.' });
      }
    }

    res.json({ mensagem: 'Funcionário atualizado com sucesso.' });
  } catch (erro) {
    console.error('Erro ao editar:', erro);
    res.status(500).json({ erro: 'Erro ao editar funcionário.' });
  } finally {
    if (conexao) await conexao.end();
  }
});

// EXCLUIR funcionário
app.delete('/api/funcionarios/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ erro: 'ID inválido.' });
  }

  let conexao;

  try {
    conexao = await mysql.createConnection(dbConfig);

    const [resultado] = await conexao.execute(
      'DELETE FROM funcionarios WHERE id = ?',
      [id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Funcionário não encontrado.' });
    }

    res.json({ mensagem: 'Funcionário excluído com sucesso.' });
  } catch (erro) {
    console.error('Erro ao excluir:', erro);
    res.status(500).json({ erro: 'Erro ao excluir funcionário.' });
  } finally {
    if (conexao) await conexao.end();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
