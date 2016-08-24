// TODO : ajoutez ici la définition de l'objet chien
var chien = {
  nom: "Médor",
  race: "Chiwawa",
  taille: 180,

  aboyer: function() {
    return "wouaf wouaf";
  }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
