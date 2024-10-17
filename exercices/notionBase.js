//variable
let character = 'Pierro';
let number = 1456;
let decimal = 14.56;
let array = ['Pierro', 1456, true];
let object = {
  name: 'Pierro',
  birth: 1456,
  taille: 180.45,
}

console.log(character);
console.log(number);
console.log(decimal);
console.log(array);
console.log(object);

let affichage = function(){
  console.log('hello world');
}

affichage();

//calculs
function calcul(a,b){
  if(a > b){
    console.log(a+b);
  }else if(a < b){
    console.log(a-b);
  }else if(a == 2){
    console.log(a*b);
  }else{
    console.log(a/b);
  }
}

calcul(2,2);  

function calcul2(a,b){
  let result = a%b + 16.5;
  console.log(result);
}
calcul2(31,8);

//objet qui contient les informations de la commande
const SumUpOrderPhrase = {
  id: 1456,
  nom: 'Pierro',
  pizza: 'Margherita',
  sauce: 'Tomate',
  garniture: ['ananas', 'champignons'],
  quantite: 1,
  total: 15,
  blague: 'Qu\'est-ce qu\'une pizza a dit a une autre pizza qui lui demandait des conseils? "suis la pâte tout iras bien !"',
}

// Transforme l'objet en tableau sinn for each ne fonctionnera pas.
const orderDetails = [SumUpOrderPhrase];
// pour chaque élément du tableau, affiche le récapitulatif de la commande
orderDetails.forEach(element => {
  console.log(`Bonjour ${element.nom}!, voici le récapitulatif de votre commande: ${element.quantite} ${element.pizza} avec une sauce : ${element.sauce}, avec ceci: ${element.garniture.join(', ')} pour un total de : ${element.total}. ${element.blague}`)
});

console.log(SumUpOrderPhrase);

//array 
let name;
let age;
let passion = ['foot', 'voiture', 'informatique'];
let tabUser = [name, age, passion];

console.log(tabUser);
//aficcher toute les passions
const passion2 = passion.map(function(item){
  return item + ' est une passion';
});
console.log(passion2);

//afficher la passion numero 2
console.log('passion n*2',tabUser[2][2]);

//fonction pour array
let tableau = [1,2,3,4,5,6,7,8,9,10];
tableau.push(11);

for (const number of tableau) {
  console.log(number);
}

//array recp

let leNom = "Doe";
let lePrenom = "John";
let laPhrase = [];
laPhrase.push(leNom, lePrenom);
console.log(laPhrase);
//la premiere lettre 
console.log(leNom.charAt(0));

//fonction

function f1(nombre){
  console.log(33+nombre);
}
f1(10);
function f2(nombre1, nombre2){
  console.log(nombre1+nombre2);
}

//if else condition
let notes = [13, 16, 8]
function moyenne(array){
  let average = 0;
  for (const number of array){
    average += number/array.length;
  }
  if(average>= 15){
    return("trés bien !");
  }else if(average>=10){
    return("assez bien.")
  }
  return("refus.")
}
console.log(moyenne(notes))

//objet
let user = {
  nom : "Doe",
  age : "24",
  passion : {
    1 : "foot",
    2 : "informatique",
  }
}

//boucle
const lesTxt = document.querySelectorAll('p')
lesTxt.forEach(p => {
  console.log(p);
});

let  textesTab = Array.from(lesTxt);
textesTab.forEach(p => {
  console.log("avec array texteTab", p);
});

const map3 = textesTab.map((nom) =>{
  nom.innerText = "modifer !";
  return nom;
});
console.log(map3);