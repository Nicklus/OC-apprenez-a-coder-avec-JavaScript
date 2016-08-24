var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
  rayon: r,

  // Renvoie le périmètre du cercle
  perimetre: function() {
    return 2 * Math.PI * this.rayon;
  },

  // Renvoie l'aire du cercle
  aire: function() {
    return Math.PI * (Math.pow(this.rayon, 2));
  }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
