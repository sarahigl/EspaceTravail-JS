
/*
Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille

- Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la
    virgule si possible)
    - Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console :
    Le nom de la personne, son poids, sa taille et son imc dans une phrase
    - En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau
    de nouvelle instances de la class) (voir discord ou " )
    - Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la
    fonction display 
*/
class Imc {
        constructor(nameUser, poidUser, tailleUser) {
            this.nameUser = nameUser;
            this.poidUser = poidUser;
            this.tailleUser = tailleUser;
        }
        display() {
            const imc = (this.poidUser / (this.tailleUser ** 2)).toFixed(2);
            return `${this.nameUser}(${this.poidUser}, ${this.tailleUser}) a un IMC de : ${imc}`;
        }
   }

// //* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
   ];
//*Boucle qui parcourt list pour utiliser display
for (const user of list) {
    console.log(user.display());
}
/*
TODO :
- Créer une classe Pme et une classe Employee
- Utiliser des fonctions
- Faire le bilan annuel de l’entreprise et l’afficher en console.

Détails :
- 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
- R = 300000 (trois cent mille)
- FF = 20000 (vingt mille)
- FA = 50000 (cinquante mille)
- N = 12
- XXX = 90%

*/
class Employee{
    constructor(nom, prénom, âge, salaireMensuel){
        this.nom = nom;
        this.prénom = prénom;
        this.âge = âge;
        this.salaireMensuel = salaireMensuel;
    }
}

class Pme{
    constructor(nomEntreprise, equipe, revenu, fraisFixe, fraisAchat){
        this.nomEntreprise = nomEntreprise;
        this.equipe = equipe;
        this.revenu = revenu;
        this.fraisFixe = fraisFixe;
        this.fraisAchat = fraisAchat;
    }
    bilanCalculed(){
        //couts récurents
        let coutInital = this.fraisFixe + this.fraisAchat;
        //calculs couts employés
        let coutTotalEquipe = 0;
        for (const employee of this.equipe){
            let coutTndividuel = employee.salaireMensuel *12;
            coutTotalEquipe += coutTndividuel;
        }
        let coutTotal90Pourcent = (coutTotalEquipe * 90) / 100;
        let coutEmploye = coutTotalEquipe + coutTotal90Pourcent;
        //bilan financié
        let bilan = this.revenu - (coutEmploye + coutInital);

        console.log("Ma Petite Entreprise - : Cout Initial :" + coutInital);
        console.log("Ma Petite Entreprise - : cout total équipe:" + coutEmploye);
        console.log("Ma Petite Entreprise - : VENTE : " + this.revenu);
        console.log("Ma Petite Entreprise - : BILAN : " + bilan);
    }
} 

// // Scénario
const pme = new Pme (
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
   pme.bilanCalculed();

//Gérer des compte en banque
/*
Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
un autre.

- Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui
dépassent le solde du compte bancaire)
*/
class CompteBancaire{
    constructor(nom, solde){
        this.nom = nom;
        this.solde = solde;
    }
    crédit(number){
        this.solde+= number;
        console.log(`Ajouut de: ${number} pour ${this.nom}`);
    }
    retrait(number){
            try {
                if(this.solde >= number){
                    this.solde -= number;
                    console.log(`Retrait de: ${number} pour ${this.nom}`);
                }else {
                    throw new Error(`${this.nom}, retrait refusé avec solde de: ${this.solde}`);
                }
            } catch (error) {
               console.error(error.message)
            }
    }

    etatCompte(nom){
        console.log(nom.solde);
    }
    virement(number, name1, name2){
        try{
            if(this.solde >= number){
                this.solde -= number;
                name2.solde += number;
                name1.solde -= number;
                console.log(`virement de: ${number} de: ${name1.nom} vers: ${name2.nom}`);
            }else {
                throw new Error(`${this.nom}, retrait refusé avec solde de: ${this.solde}`);
            }
        }catch{
            console.error(error.message);
        }
    }
}

const compteBancaire = {
    Alex: new CompteBancaire("alex", 0),
    Clovis: new CompteBancaire("Clovis", 0),
    Marco: new CompteBancaire("Marco", 0),
};
compteBancaire.Alex.crédit(1000);
compteBancaire.Clovis.crédit(1000);
compteBancaire.Marco.crédit(1000);
compteBancaire.Alex.retrait(100);
compteBancaire.Marco.virement(300, compteBancaire.Marco, compteBancaire.Clovis);
compteBancaire.Alex.retrait(1200);
for(const compte in compteBancaire){
    console.log(`${compte} : ${compteBancaire[compte].solde}`);
}

//EXO BIBLIOTHEQUE 

class Livre{
    constructor(titre, auteur, disponible = true){
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = disponible;
    }

    emprunter(){
        try {
            if(this.disponible){
                this.disponible = false;
                console.log('le livre est disponible !')
            }else{
                throw new Error('le livre est indisponible');
            }
        } catch (error) {
            console.log(error)
        }
    }

    retourner(){
        this.disponible = true;
    }
}

class Bibliotheque {
    constructor(livres = []){
        this.livres = livres;
    }
    ajouterLivre(livre){
        if (livre instanceof Livre) {
            this.livres.push(livre);
        } else {
            throw new Error("L'objet n'est pas un livre");
        }
    }
    emprunterLivre(titre){
        const livre = this.livres.find(l => l.titre === titre);
            if(livre){
                livre.emprunter();
            }else{
                throw new Error("livre indisponible");
            }
        
    }

    retournerLivre(titre){
        const livre = this.livres.find(l => l.titre === titre);
        try {
            if(livre){
                livre.retourner();
            }else{
                throw new Error("livre inexistant dans la collection de la Bibliothèque");
            }
        } catch (error) {
            console.log(error)
        }
    }
}
let livres =[ 
    new Livre("Les Miserable", "victor Hugo", true),
    new Livre("Princesse Poly", "Sarah Connor", true),
    new Livre("La finance pour les nuls", "Elva Disme", true)
];
let mediaZone = new Bibliotheque(livres);
mediaZone.emprunterLivre("Les Miserable");
mediaZone.emprunterLivre("Les Miserable");
mediaZone.retournerLivre("Barbie")
// Créez une instance de Bibliotheque.

// Ajoutez quelques livres à la bibliothèque.

// Essayez d'emprunter un livre, puis de le retourner.

// Testez les exceptions en essayant d'emprunter un livre qui n'est pas disponible ou qui n'existe pas.