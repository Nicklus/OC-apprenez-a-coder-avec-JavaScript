// var nombre = Number(prompt("Entrez un nombre :"));
//
// if (nombre > 0) {
//   console.log(nombre + " est positif");
// } else {
//   if (nombre < 0) {
//     console.log(nombre + " est négatif");
//   } else {
//     console.log(nombre + " est nul");
//   }
// }

var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull.");
} else if (meteo === "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo === "neige") {
    console.log("Restez au chaud à la maison.");
} else {
    console.log("Je n'ai pas compris !");
}
