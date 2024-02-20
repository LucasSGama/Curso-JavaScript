//  toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var FraseCaixaAlta = frase.toLocaleUpperCase();

console.log(FraseCaixaAlta);

console.log(frase.toLocaleLowerCase());

// trim

var nome = "                    Mathues      ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// Lasindexof

var fraseDois = "Eu quero a última palavra teste desse teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));