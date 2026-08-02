import db from "../config/db.js";

export const TarefaModel = {
  async listarTodas() {
    const [linhas] = await db.query("SELECT * FROM tarefas");
    return linhas;
  },

  async adicionar(tarefaTexto) {
    await db.query("INSERT INTO tarefas (tarefa, status) VALUES (?, ?)", [
      tarefaTexto,
      false,
    ]);

    return this.listarTodas();
  },

  async deletar(idParaDeletar) {
    await db.query("DELETE FROM tarefas WHERE id = ?", [idParaDeletar]);
    return this.listarTodas();
  },

  async riscar(idParaRiscar) {
    await db.query("UPDATE tarefas SET status = true WHERE id = ?", [
      idParaRiscar,
    ]);
    return this.listarTodas();
  },
};
