document.write("Clique com o botão direito > Inspecionar > Console");

// 'prompt' sempre retorna uma string
// 'parseFloat' transforma a string em número decimal

// função para validar nota entre 0 e 10
function obterNotaValida(bimestre) {
    let nota;
    do {
        nota = parseFloat(prompt(`Nota do ${bimestre} bimestre (0 a 10):`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida! Digite um número entre 0 e 10.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// pede nome e 4 notas de um aluno
const nome = prompt("Nome do aluno:");
const nota1 = obterNotaValida("1º");
const nota2 = obterNotaValida("2º");
const nota3 = obterNotaValida("3º");
const nota4 = obterNotaValida("4º");

// calcula a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// exibe resultado
console.log(`Aluno: ${nome}`); // uso da crase para concatenar texto e variáveis
console.log(`Média final: ${media.toFixed(1)}`);  // 'toFixed(1)' apresenta apenas 1 casa depois da vírgula

if (media >= 6) {
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Reprovado");
}