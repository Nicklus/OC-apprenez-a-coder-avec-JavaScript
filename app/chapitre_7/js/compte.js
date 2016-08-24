var compte = {
  /**
   * PROPRIETES (ATTRIBUTS)
   */
  titulaire: "Alex",
  solde: 0,

  /**
   * METHODES
   */
  // Ajoute le montant passé en paramètre au solde du compte
  crediter: function(montantAjout) {
    this.solde += montantAjout;
  },
  // Retire le montant passé en paramètre du solde du compte
  debiter: function(montantDebit) {
    this.solde -= montantDebit;
  },
  // Renvoie la description du compte
  decrire: function() {
    var desc = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
    return desc;
  }
};

console.log(compte.decrire());

var credit = Number(prompt("Saisissez le montant à créditer")),
    debit = Number(prompt("Saisissez le montant à débiter"));

compte.crediter(credit);
compte.debiter(debit);

console.log(compte.decrire());
