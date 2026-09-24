var nomeVinho = prompt("Digite o nome do vinho:");

var tipoVinho = prompt(
    "Digite o tipo do vinho (Tinto, Branco ou Rosé):"
);

var safra = prompt("Digite o ano da safra:");

var quantidadeEstoque = prompt(
    "Digite a quantidade de garrafas em estoque:"
);

alert("Cadastro realizado! Veja os detalhes no console.");

alert("A seguir, veja os detalhes do vinho no console.");

console.log("===== DETALHES DO VINHO =====");
console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo: " + tipoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidadeEstoque);
console.log("=============================");