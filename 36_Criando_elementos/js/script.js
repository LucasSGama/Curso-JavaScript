// INserir o elemento no body
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do paragráfo");
var texto2 = "Este é o conteúdo do paragráfo"

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// Inserir em um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("Texto do span"));

console.log(el);

container.appendChild(el);
