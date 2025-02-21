//Variaveis

let amigos = [];
let amigoSorteado = ``;
let amigoRemovido = ``;

//Funções

//Esconde o Modal ao carregar a página
function fecharModal() {
  document.getElementById("modalSorteio").style.display = "none";
  document.getElementById("modalAlerta").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("modalSorteio").style.display = "none";
  document.getElementById("modalAlerta").style.display = "none";
});

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

//Verifica se o input é válido
function validarAmigo(nome) {
  let caracteresRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (!caracteresRegex.test(nome)) {
    exibirModalAlerta("O nome deve conter apenas letras e espaços!");
    return false;
  }

  if (amigos.includes(nome)) {
    alert("O amigo ja foi adicionado");
    return false;
  }

  return true;
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
  if (amigos.length === 0 || amigos.length === 1) {
    exibirModalAlerta("Adicione pelo menos dois amigos!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  amigoSorteado = amigos[indiceSorteado];

  // Atualiza o texto dentro do modal
  document.getElementById("mensagemSorteio").textContent =
    `🎉 O amigo sorteado foi ` + amigoSorteado;

  // Exibe o modal
  let modal = document.getElementById("modalSorteio");
  modal.style.display = "flex";
}

//Reinicia
function reiniciar() {
  amigos = [];
  exibirAmigos();
}

//### Exibicão de paineis modal

// Função para exibir o modal
function exibirModalAlerta(mensagem) {
  let modal = document.getElementById("modalAlerta");
  let mensagemAlerta = document.getElementById("mensagemAlerta");

  if (modal && mensagemAlerta) {
    mensagemAlerta.textContent = mensagem;
    modal.style.display = "flex";
  }
}
