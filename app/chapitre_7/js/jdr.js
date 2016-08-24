var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,
  xp: 0,

  // Renvoie la description du personnage
  decrire: function() {
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + perso.xp + " point(s) d'expérience";
    return description;
  }
};

console.log(perso.decrire());

// Aurora est bléssée par une flèche
perso.sante -= 20;

// Aurora trouve un bracelet de force
perso.force += 10;

console.log(perso.decrire());
