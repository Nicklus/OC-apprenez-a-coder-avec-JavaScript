var nombre1 = 5;
var nombre2 = 3;

var nombreTemp = nombre1,
    nombre1 = nombre2,
    nombre2 = nombreTemp;


console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5
