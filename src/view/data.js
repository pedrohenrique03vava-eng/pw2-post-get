const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");

const bntCad = document.getElementById("mostrarCadastro");
const bntLog = document.getElementById("mostrarLogin");

bntCad.addEventListener("click", () => {
  login.classList.remove("active");
  cadastro.classList.add("active");
});
bntLog.addEventListener("click", () => {
  cadastro.classList.remove("active");
  login.classList.add("active");
});

//-----------------------------

const buttonLogar = document.getElementById("buttonLogar");

buttonLogar.addEventListener("click", async () => {
  try {
    let senha = document.getElementById("senha-login");
    let email = document.getElementById("email-login");

    if (!senha || !email) {
      alert("Os campos não podem ser vazios");
    }

    const fazerCadastro = await fetch("http://localhost:3000/usuarios/enviar");
  } catch (err) {
    console.log(err);
  }
});

const buttonCadastrar = document.getElementById("buttonCadastrar");

buttonCadastrar.addEventListener("click", async () => {
  try {
    let nome = document.getElementById("nome-cad");
    let senha = document.getElementById("senha-cad");
    let email = document.getElementById("email-cad");

    if (!nome || !senha || !email) {
      alert("Os campos não podem ser vazios");
    }

    const fazerCadastro = await fetch("http://localhost:3000/usuarios/enviar");
  } catch (err) {
    console.log(err);
  }
});
