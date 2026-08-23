import mysql from "mysql2/promise";
import "dotenv/config";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const createTableQueryTarefas = `
  CREATE TABLE IF NOT EXISTS tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(100) NOT NULL,
    status BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
const createTableQueryUsers = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

async function inicializationBD() {
  try {
    await db.query(createTableQueryTarefas);
    console.log("Tabela 'tarefas' verificada/criada.");
    await db.query(createTableQueryUsers);
    console.log("Tabela 'users' verificada/criada.");
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
