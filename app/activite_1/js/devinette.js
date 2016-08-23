/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Déclaration des variables
var nbSaisi = 0, // On donne une 1re valeur au nombre à vérifier
    nbEssai = 0, // Nombre d'essais effectuer par le joueur
    gagne = false; // booléen du jeu gagné ou pas

// On répéte l'opération tant que la solution n'est pas trouvé et que le nombre d'essais n'est pas 6
while (nbSaisi !== solution && nbEssai !== 6) {
    // On enregistre le nombre saisi par le joueur dans la variable
    nbSaisi = Number(prompt("Saisissez un nombre entre 1 et 100"));
    // On incrémente le nombre d'essai
    nbEssai++;
    // nombre saisi supérieur à la solution
    if (nbSaisi > solution) {
        console.log(nbSaisi + " est trop grand");
    } else if (nbSaisi < solution) { // nombre saisi inférieur à la solution
        console.log(nbSaisi + " est trop petit");
    } else { // Nombre trouvé
        console.log("Bravo !! La solution était " + solution + "\nVous avez trouvé en " + nbEssai + " essai(s)");
        gagne = true;
    }
}

// Après 6 essais, le joueur à perdu
if (!gagne) {
    console.log("Perdu... La solution était " + solution);
}
