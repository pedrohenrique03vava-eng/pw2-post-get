const bt = document.getElementById("btn-enviar")

bt.addEventListener('click', async function slaNome() {
    try{
        const nome = document.getElementById("nome").value
        const idade = document.getElementById("idade").value
        const email = document.getElementById("email").value
        const cargo = document.getElementById("cargo").value
        const ul = document.getElementById("lista")
        const enviarDados = await fetch('/usuarios/enviar',{
            method: "POST",
            headers:{
                "Content-Type" : "application/JSON"
            },
            body:JSON.stringify({nome,idade,email,cargo})
        })
        if(!enviarDados.ok){
            throw new Error(`Erro ao enviar dados ${enviarDados.status}`)
        }

        const resposta = await enviarDados.json()

        resposta.array.forEach(e => {
            const li = document.createElement("li")
            li.textContent = `Nome: ${e.nome} Idade: ${e.idade} Email: ${e.email} Cargo: ${e.cargo}`
            ul.appendChild(li)
        });
    }catch(err){
        console.log(err)
    }
})