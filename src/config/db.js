import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "9632587410Ph@",
  database: "tarefas",
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(100) NOT NULL,
    status BOOLEAN,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

async function inicializationBD() {
  try {
    await db.query(createTableQuery);
    console.log("tabela criada com sucesso");
  } catch (err) {
    console.log("Falha ao criar tabela", err.message);
  }
}

export const tarefasBD = {
  criarTarefa(tarefa) {
    console.log("Tarefa Criada com sucesso:" + tarefa);
    return;
  },
};

inicializationBD();

export default db;
