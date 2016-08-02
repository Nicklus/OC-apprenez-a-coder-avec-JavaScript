var moyenne = Number(prompt("Saisissez la moyenne"));

if (!isNaN(moyenne) && moyenne >= 0) {
  if (moyenne < 10) {
    console.log("Désolé, mais vous êtes recalé");
  } else if (moyenne >= 10 && moyenne < 12) {
    console.log("Félicitations, vous êtes reçu");
  } else {
    console.log("Wouhaou !! Une mention !!");
  }
} else {
  console.log("Saisie incorrecte pour moyenne a " + moyenne);
}
