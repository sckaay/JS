document.write("Clique com o botão direito > Inspecionar > Console");

// array 'alunos' vazio para armazenar os dados
const alunos = [];

// 'prompt' para perguntar quantos alunos e 'parseInt' para transformar em número inteiro
const qtdAlunos = parseInt(prompt("Digite a quantidade de alunos da turma"));

// loop para receber os dados de cada aluno
for (let i = 0; i < qtdAlunos; i++) {
    const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    const nota1 = parseFloat(prompt(`Digite a nota do 1º bimestre de ${nome}:`));
    const nota2 = parseFloat(prompt(`Digite a nota do 2º bimestre de ${nome}:`));
    const nota3 = parseFloat(prompt(`Digite a nota do 3º bimestre de ${nome}:`));
    const nota4 = parseFloat(prompt(`Digite a nota do 4º bimestre de ${nome}:`));

    // 'push' para adicionar um objeto no array aluno a cada interção no 'for'
    alunos.push({
        nome: nome, // objeto string
        notas: [nota1, nota2, nota3, nota4] // outro array (array dentro de outro)
    });
}

// cálculo dos resultados. deixamos os dados zerados para limpar as variáveis
let aprovados = 0;
let reprovados = 0;
let somaMedias = 0;

alunos.forEach(aluno => { // 'forEach' para percorrer cada aluno do array
    const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0); // 'reduce' para somar todas as notas do aluno.
    const media = somaNotas / aluno.notas.length; // média recebe a soma das notas e divide pelo tamanho do vetor notas 'length'
    somaMedias += media;

    console.log(`Aluno: ${aluno.nome} - Média`)

    // concatenando a quantidade de aprovados e reprovados
    if (media >= 6){
        aprovados++;
    } else {
        reprovados++;
    }
});

const mediaGeral = somaMedias / alunos.length; // média geral dividida pelo total de alunos

console.log(`\nTotal de alunos: ${alunos.length}`);
console.log(`Aprovados: ${aprovados}`);
console.log(`Reprovados: ${reprovados}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);