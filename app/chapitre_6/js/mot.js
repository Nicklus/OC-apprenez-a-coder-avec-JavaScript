var motSaisi = prompt("Saisissez un mot");

// Renvoie le nombre de voyelles et de consonne d'un mot
function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        switch (mot[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y":
                nbVoyelles++;
                break;
        }
    }
    return nbVoyelles;
}

// Renvoie le mot inversé
function inverser(mot) {
    var motInverse = "";
    for (var i = mot.length - 1; i >= 0; i--) {
        motInverse += mot[i];
    }
    return motInverse;
}

// Renvoie le mot converti en "leet speak"
function convertirEnLeetSpeak(mot) {
    var motConverti = "";
    for (var i = 0; i < mot.length; i++) {
        switch (mot[i].toLowerCase()) {
            case "a":
                motConverti += "4";
                break;
            case "b":
                motConverti += "8";
                break;
            case "e":
                motConverti += "3";
                break;
            case "l":
                motConverti += "1";
                break;
            case "o":
                motConverti += "0";
                break;
            case "s":
                motConverti += "5";
                break;
            default:
                motConverti += mot[i];
        }
    }
    return motConverti;
}

console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractère(s)");
console.log("Il s'écrit en minuscule :: " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscule :: " + motSaisi.toUpperCase());

console.log("Il contient " + compterNbVoyelles(motSaisi) + " voyelle(s) et " + (motSaisi.length - compterNbVoyelles(motSaisi)) + " consonne(s)");

console.log("Il s'écrit à l'envers :: " + inverser(motSaisi));

if (inverser(motSaisi).toLowerCase() === motSaisi.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

console.log("Il s'écrit en \"leet speak\" :: " + convertirEnLeetSpeak(motSaisi));
