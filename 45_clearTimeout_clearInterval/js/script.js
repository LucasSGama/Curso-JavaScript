// clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function() {
    console.log("O x é 0");
}, 100);

x = 5;

if(x > 5) {
    clearInterval(myTimer);
    console.log("O x passou de 0");
}

// clearSetInterval na prática
var myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    
    console.log("Não precisamos mais repetir!");
    clearInterval(myInterval);
}, 1500);