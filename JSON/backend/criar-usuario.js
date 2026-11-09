const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

async function criarUsuario() {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'crud_funcionarios'
    });

    const login = 'admin';
    const senha = '123456';

    const senhaHash = await bcrypt.hash(senha, 10);

    await db.execute(
        'INSERT INTO usuarios (login, senha) VALUES (?, ?)',
        [login, senhaHash]
    );

    console.log('Usuário criado com sucesso!');

    await db.end();
}

criarUsuario().catch(console.error);