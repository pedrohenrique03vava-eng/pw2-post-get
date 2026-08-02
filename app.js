import express from "express";
import cors from "cors";
import tarefaRoutes from "./src/routes/tarefaRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(tarefaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
