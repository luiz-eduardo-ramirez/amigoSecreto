//Variaveis

let amigos = [];
let amigoSorteado = ``;
let amigoRemovido = ``;
let sorteioBoolano = false;

//Funções

window.onload = function () {
  document.getElementById("modalSorteio").style.display = "none";
};

// Coloca a primeira letra de cada palavra em maiúscula
function capitalizarPrimeiraLetra(string) {
  return string
    .split(" ") // Divide a string em palavras
    .map(
      (palavra) =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    ) // Capitaliza cada palavra
    .join(" "); // Junta as palavras novamente
}

// Adicionar amigo
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = capitalizarPrimeiraLetra(input.value.trim());

  if (nome === "" || !validarAmigo(nome)) {
    return;
  }

  amigos.push(nome);
  input.value = "";
  exibirAmigos();
}

//Verifica se o input é válido
function validarAmigo(nome) {
  let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (!regex.test(nome)) {
    alert("O nome deve conter apenas letras e espaços.");
    return false;
  }

  if (amigos.includes(nome)) {
    alert("O amigo ja foi adicionado");
    return false;
  }

  return true;
}

//Exibe a lista de amigos
function exibirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li"); // Cria um novo elemento <li>
    li.textContent = amigo; // Define o texto como o nome do amigo
    listaAmigos.appendChild(li); // Adiciona o <li> à lista
  });
}

//Sorteia um nome aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo foi adicionado!");
    return;
  }

  let amigoSorteado = Math.floor(Math.random() * amigos.length);
  amigoRemovido = amigos[amigoSorteado];

  // Atualiza o texto dentro do modal
  document.getElementById("mensagemSorteio").textContent =
    `🎉 O amigo sorteado foi: ` + amigos[amigoSorteado];

  // Exibe o modal
  let modal = document.getElementById("modalSorteio");
  modal.style.display = "flex";
}

// Fecha o modal quando o usuário clica no "X"
function fecharModal() {
  document.getElementById("modalSorteio").style.display = "none";
}
