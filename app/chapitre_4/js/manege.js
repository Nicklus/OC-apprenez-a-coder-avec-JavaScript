var nbTour = Number(prompt("Combien de tours voulez-vous ?"));

if (!isNaN(nbTour) && nbTour > 0) {
  for (var i = 1 ; i <= nbTour ; i++) {
    console.log("C'est le tour numéro " + i);
  }
} else {
  console.log("Saisie incorrecte");
}
