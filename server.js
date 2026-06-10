const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const bancoDeDadosUsuarios = [];

app.post("/usuarios/enviar", (req, res) => {
  try {
    const { tarefa } = req.body;

    if (!tarefa) {
      return res
        .status(400)
        .json({ erro: "Todos os campos são obrigatórios." });
    }

    const novaTarefa = { tarefa };
    bancoDeDadosUsuarios.push(novaTarefa);

    res.status(201).json(bancoDeDadosUsuarios);
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});

console.log(bancoDeDadosUsuarios);
