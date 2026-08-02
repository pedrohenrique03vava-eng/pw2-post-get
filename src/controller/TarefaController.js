import { TarefaModel } from "../model/TarefaModel.js";

export const TarefaController = {
  async enviar(req, res) {
    try {
      const { tarefa } = req.body;

      if (!tarefa) {
        return res.status(400).json({ erro: "O campo tarefa é obrigatório." });
      }

      const bancoAtualizado = await TarefaModel.adicionar(tarefa);

      return res.status(201).json(bancoAtualizado);
    } catch (error) {
      console.error("Erro no servidor:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
  },

  async deletar(req, res) {
    try {
      const idParaDeletar = Number(req.params.id);

      const bancoAtualizado = await TarefaModel.deletar(idParaDeletar);

      return res.status(200).json(bancoAtualizado);
    } catch (error) {
      console.error("Erro ao deletar no servidor:", error);
      return res.status(500).json({ erro: "Erro interno ao deletar." });
    }
  },

  async riscar(req, res) {
    try {
      const idParaRiscar = Number(req.params.id);

      const bancoAtualizado = await TarefaModel.riscar(idParaRiscar);

      return res.status(200).json(bancoAtualizado);
    } catch (error) {
      console.error("Erro no servidor:", error);
      return res.status(500).json({ erro: "Erro interno ao atualizar." });
    }
  },
};
