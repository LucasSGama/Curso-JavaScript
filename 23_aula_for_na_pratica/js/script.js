var lista = ['Laranja', 'Maçã', 'Pera', 'Java', 'Limao'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

console.log(body[0]);

body[0].appendChild(listaUL);

var ListaNoBody = document.getElementsByTagName('ul');

console.log(ListaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    var LIfor = document.createElement('li');

    var textoLI = document.createTextNode(lista[i]);

    LIfor.appendChild(textoLI);
    
    console.log(LIfor);

    ListaNoBody[0].appendChild(LIfor);
}