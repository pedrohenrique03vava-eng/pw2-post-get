import express from 'express'
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static('public'));


const bancoDeDadosUsuarios = [];


app.post('/usuarios/enviar', (req, res) => {
    try {
        
        const { nome, idade, email, cargo } = req.body;

       
        if (!nome || !idade || !email || !cargo) {
            return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
        }

        
        const novoUsuario = { nome, idade, email, cargo };
        bancoDeDadosUsuarios.push(novoUsuario);

        
        res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso!",
            array: bancoDeDadosUsuarios
        });

    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ erro: "Erro interno no servidor." });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});