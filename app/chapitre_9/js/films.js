var Film = {
    // Initialise le Film
    init: function(titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    decrire: function() {
        var desc = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return desc;
    }
};

var film1 = Object.create(Film); // Création d'une instance non initialisée
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese"); // Initialisation de l'instance

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [film1, film2, film3];

films.forEach(function(film) {
    console.log(film.decrire());
});
