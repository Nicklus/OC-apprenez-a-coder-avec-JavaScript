var valeurs = [11, 3, 17, 2, 9, 10];

var max = valeurs[0];

valeurs.forEach(function (valeur) {
  if (valeur > max) {
    max = valeur;
  }
});

console.log("Le maximum des éléments vaut :: " + max);
