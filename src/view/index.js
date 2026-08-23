const bt = document.getElementById("btn-enviar");
const tarefasFazer = document.getElementById("tarefasFazer");
const tarefasFeitas = document.getElementById("tarefasFeitas");
function atualizarInterface(listaDeTarefas) {
  const ul = document.getElementById("lista");

  ul.innerHTML = "";

  listaDeTarefas.forEach((e) => {
    const li = document.createElement("li");
    if (e.status) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
    const dataObjeto = new Date(e.criado_em);

    const dataFormatada = dataObjeto.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });

    const horaFormatada = dataObjeto.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    li.innerHTML = `
      <span>[${dataFormatada} às ${horaFormatada}]</span> Tarefa: ${e.tarefa}
      <button class="bt-excluir" onclick="excluir(${e.id})"> Excluir Tarefa </button> 
      <button class="bt-check" onclick="riscar(${e.id})"> Riscar Tarefa </button>
    `;

    ul.appendChild(li);
    document.getElementById("tarefa").value = "";
  });
}
//-------------------------------------------------------------------------------
bt.addEventListener("click", async function dispararFront(evento) {
  evento.preventDefault();
  try {
    const tarefaInput = document.getElementById("tarefa").value.trim();

    if (!tarefaInput) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const tarefa = {
      tarefa: tarefaInput,
    };

    const enviarDados = await fetch("http://localhost:3000/usuarios/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    });

    if (!enviarDados.ok) {
      throw new Error(`Erro ao enviar dados ${enviarDados.status}`);
    }

    const resposta = await enviarDados.json();
    atualizarInterface(resposta);
  } catch (err) {
    console.error("Erro na requisição:", err);
  }
});

async function excluir(id) {
  try {
    if (id.status === true) {
      alert("Não e possivel excluir uma tarefa 'riscada' ");
      return;
    }
    let excluirTarefa = await fetch(
      `http://localhost:3000/usuarios/delete/${id}`,
      {
        method: "DELETE",
      },
    );
    if (!excluirTarefa.ok) {
      throw new Error("Erro ao excluir tarefa do servidor");
    }
    const resposta = await excluirTarefa.json();
    atualizarInterface(resposta);
  } catch (err) {
    console.log("Erro ao deletar:");
  }
}
async function riscar(id) {
  try {
    let riscarTarefa = await fetch(
      `http://localhost:3000/usuarios/riscar/${id}`,
      {
        method: "PUT",
      },
    );
    const resposta = await riscarTarefa.json();
    atualizarInterface(resposta);
  } catch (err) {
    console.log("Erro ao deletar:");
  }
}
