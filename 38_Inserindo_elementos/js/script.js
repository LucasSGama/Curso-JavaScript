// criar elemento
var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");


// Inserindo elemento filho
container.appendChild(el);

// inser Before - insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-before");

console.log(el3);

// ELEMENTO PAI, INSERIR ANTES, O QUE SERA INSERIDO, INSERIR ANTES;
container.insertBefore(el2, el3);