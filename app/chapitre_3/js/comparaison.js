var nombre1 = Number(prompt("Saisissez un premier nombre")),
    nombre2 = Number(prompt("Saisissez un deuxième nombre"));

if (!isNaN(nombre1) && !isNaN(nombre2)) {
  if (nombre1 > nombre2) {
    console.log(nombre1 + " est supérieur à " + nombre2);
  } else if (nombre1 < nombre2) {
    console.log(nombre1 + " est inférieur à " + nombre2);
  } else {
    console.log(nombre1 + " est égal à " + nombre2);
  }
} else {
  console.log("Saisie incorrect :: Nombre1 = " + nombre1 + " ; Nombre2 = " + nombre2);
}
