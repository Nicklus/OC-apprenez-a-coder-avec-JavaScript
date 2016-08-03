var mois = Number(prompt("Saisissez le numéro du mois (1-12)")),
    mois31 = [1, 3, 5, 7, 8, 10, 12];

if (mois > 0 && mois <= 12) {
    if ((mois31.indexOf(mois)) !== -1) {
        console.log("Le mois numéro " + mois + " contient 31 jours.");
    } else if (mois === 2) {
        console.log("Le mois numéro 2 contient 28 jours");
    } else {
        console.log("Le mois numéro " + mois + " contient 30 jours.");
    }
} else {
    console.log("Saisie incorrecte pour mois = " + mois);
}
