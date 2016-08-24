var mots = [];

var mot = "";
while (mot.toLowerCase() !== "stop") {
  mot = prompt("Saisissez un mot");
  if(mot.toLowerCase() !== "stop") {
    mots.push(mot);
  }
}

mots.forEach(function (mot) {
  console.log(mot);
});
