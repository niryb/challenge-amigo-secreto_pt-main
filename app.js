// 1. Cria array para armazenar os amigos
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    // 3. Atualiza a lista sempre que um amigo for adicionado
    atualizarLista();

    input.value = "";
}

// 3. Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de recriar

    // percorre o array com for
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // gera índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    // exibe o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong> 🎉</li>`;
}
