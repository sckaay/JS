document.write("Clique com o botão direito > Inspecionar > Console");

// if, else if, else
let nota = 4;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// switch - verifica múltiplos valores de uma variável
let dia = "segunda";

switch (dia) {
    case "segunda":
        console.log("Começo de semana");
        break;
    case "sexta":
        console.log("Sextou");
        break;
    default:
        console.log("Outro dia qualquer")
}