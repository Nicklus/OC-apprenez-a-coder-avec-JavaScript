// Déclaration des variables
var heure = Number(prompt("Saisissez une heure")),
    minute = Number(prompt("Saisisiez les minutes")),
    seconde = Number(prompt("Saissiez les secondes")),
    heureSaisie,
    heureSuivante;

// On teste la saisie
if ((heure >= 0 && heure <= 23) && (minute >= 0 && minute <= 59) && (seconde >= 0 && seconde <= 59)) {
    heureSaisie = heure + "h" + minute + "m" + seconde + "s";
    seconde += 1; // On incrémente les secondes
    if (seconde === 60) {
        // On passe à la minute suivante et les secondes passent à 0
        seconde = 0;
        minute += 1;
        if (minute === 60) {
            // On passe à l'heure suivante et les minutes passent à 0
            minute = 0;
            heure += 1;
            if (heure === 24) {
                // On passe à minuit
                heure = 0;
            }
        }
    }
    heureSuivante = heure + "h" + minute + "m" + seconde + "s";
    console.log(heureSaisie + " => " + heureSuivante);
} else {
    console.log("Saisie incorrecte pour " + heure + "h" + minute + "m" + seconde + "s");
}
