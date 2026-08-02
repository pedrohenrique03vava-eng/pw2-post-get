import express from "express";
import { TarefaController } from "../controller/TarefaController.js";

const router = express.Router();

router.post("/usuarios/enviar", TarefaController.enviar);
router.delete("/usuarios/delete/:id", TarefaController.deletar);
router.put("/usuarios/riscar/:id", TarefaController.riscar);

export default router;
