function perimetre(rayon) {
  return 2 * Math.PI * rayon;
}

function aire(rayon) {
  return Math.PI * (Math.pow(rayon, 2));
}

var rayon  = Number(prompt("Saisissez le rayon du cercle"));
console.log("Périmètre du cercle de rayon " + rayon + " :: " + perimetre(rayon));
console.log("Aire du cercle de rayon " + rayon + " :: " + aire(rayon));
