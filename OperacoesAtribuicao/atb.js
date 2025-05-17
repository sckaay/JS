document.write("Clique com o botão direito > Inspecionar > Console");

let a = 10;
let b = 4

console.log("Valores iniciais:");
console.log("a = " + a);
console.log("b = " + b);

// Atribuições Aritméticas
a += 5; // a = a + 5 -> 15
console.log("a += 5 -> " + a);

b -= 2; // b = b - 2 -> 2
console.log("b -= 2 -> " + b);

a *= 2; // a = a * 2 -> 30
console.log("a *= 2 -> " + a);

b /= 2; // b = b / 2 -> 1
console.log("b /= 2 -> " + b);

a %= 7; // a = a % 7 -> 2
console.log("a %= 7 -> " + a);

a **= 3; // a = a ** 3 -> 8
console.log("a **= 3 -> " + a);

// Incremento e Decremento
let x = 10;
console.log("\nIncremento e Decremento:");
console.log("x = " + x);

x++; // pós-incremento
console.log("x++ -> " + x);

x--; // pós-decremento
console.log("x-- -> " + x);

++x; // pré-incremento
console.log("++x -> " + x);

--x; // pré-decremento
console.log("--x -> " + x);

// Negação Numérica
let y = 7;
console.log("\nNegação Numérica:");
console.log("y = " + y);
console.log("-y -> " + (-y));