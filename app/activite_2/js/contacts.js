/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Déclaration de l'objet Contact
var Contact = {
  // Initialise l'objet contact
  init: function(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  // Renvoie la description du contact
  decrire: function() {
    var desc = "Nom : " + this.nom + ", prenom : " + this.prenom;
    return desc;
  }
};

// Création du tableau de contacts
var contacts = [];

// Créé un objet Contact et l'ajoute au tableau des contacts
function ajouterContact(nom, prenom) {
  var c = Object.create(Contact);
  c.init(nom, prenom);
  contacts.push(c);
}

// Peuplement initial du tableau
ajouterContact("Lévisse", "Carole");
ajouterContact("Nelsonne", "Mélodie");

console.log("Bienvenue dans le gestionnaire des contacts");
var menu = "\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter";

var choix = "";
// Boucle tant que le choix n'est pas 0
while(choix !== "0") {
  // Affichage du menu
  console.log(menu);
  choix = prompt("Choisissez une option :");

  // Si le choix est 1 -> Afficher les contacts
  if (choix === "1") {
    console.log("Voici la liste de tous vos contacts :");
    // Boucle sur le tableau pour afficher le détail de chaque contact
    for (var i = 0; i < contacts.length; i++) {
      console.log(contacts[i].decrire());
    }
  }
  // Si le choix est 2 -> Ajouter un contact
  else if (choix === "2") {
    var nom = prompt("Entrez le nom du nouveau contact");
    var prenom = prompt("Entre le prénom du nouveau contact");
    // Appel de la fonction d'ajout d'un contact
    ajouterContact(nom, prenom);
    console.log("Le nouveau contact a été ajouté");
  }
  // Si le choix est 0 -> Quitter
  else if (choix === "0") {
    console.log("Au revoir !");
  }
  // Sinon :: entrée non reconnue
  else {
    console.log("Choix non valide");
  }
}
