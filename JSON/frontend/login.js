const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    try {
        const resposta = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, senha })
        });

        const dados = await resposta.json();

        if (resposta.ok && dados.success) {
            localStorage.setItem('logado', 'true');
            window.location.href = 'index.html';
        } else {
            mensagem.textContent = dados.error || 'Login ou senha incorretos.';
        }

    } catch (error) {
        mensagem.textContent = 'Erro ao conectar com o servidor.';
        console.error(error);
    }
});