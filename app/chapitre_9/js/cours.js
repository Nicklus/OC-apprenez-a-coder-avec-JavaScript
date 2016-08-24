var Film = {
    // Initialise le Film
    init: function(titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    decrire: function() {
        var desc = this.titre + " (" + this.annee + ")";
        return desc;
    }
};

var film1 = Object.create(Film); // Création d'une instance non initialisée
film1.init("Le loup de Wall Street", 2013); // Initialisation de l'instance

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [film1, film2, film3];
films.forEach(function(film) {
    console.log(film.decrire());
});
