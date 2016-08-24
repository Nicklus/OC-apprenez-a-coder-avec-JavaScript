var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire: function() {
      var desc = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer();
      return desc;
    }
};

var crockdur = Object.create(Chien);
crockdur.init("Crockdur", "mâtin de Naples", 75);

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chiens = [crockdur, pupuce, medor];
console.log("Le chenil héberge " + chiens.length + " chien(s) :");
chiens.forEach(function(chien) {
  console.log(chien.decrire());
});
