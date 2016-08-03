var nombre = Number(prompt("Saisissez un nombre"));

for (var i = 1; i <= 10; i++) {
    if (nombre % 2 === 0) {
        console.log(nombre + " est pair");
    } else {
      console.log(nombre + " est impair");
    }
    nombre++;
}
