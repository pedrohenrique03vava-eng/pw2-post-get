const bt = document.getElementById("btn-enviar");

bt.addEventListener("click", async function slaNome(evento) {
  evento.preventDefault();

  try {
    const tarefa = document.getElementById("tarefa").value;
    const ul = document.getElementById("lista");

    if (!tarefa) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const enviarDados = await fetch("http://localhost:3000/usuarios/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tarefa }),
    });

    if (!enviarDados.ok) {
      throw new Error(`Erro ao enviar dados ${enviarDados.status}`);
    }

    const resposta = await enviarDados.json();

    ul.innerHTML = "";

    resposta.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `Tarefa: ${e.tarefa} <button class="bt-excluir"> Excluir Tafefa </button> <button class="bt-check"> Riscar Tarefa </button>`;
      ul.appendChild(li);
    });

    document.getElementById("tarefa").value = "";
  } catch (err) {
    console.error("Erro na requisição:", err);
  }
});
