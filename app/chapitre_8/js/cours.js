var unObjet = {
  a: 2
};

var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined
