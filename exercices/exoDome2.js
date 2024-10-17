const { text } = require("body-parser");

//! EXO 20.1
const divTexteAjout = document.querySelector('.ajoutTexte');
const ajouterTexte = function (pseudo, duTexte){
    //créer
    const pElement = document.createElement('p'); 
    //remplir
    pElement.innerText = `${pseudo} - ${duTexte}`; 
    //placer
    divTexteAjout.append(pElement); 
    
}
ajouterTexte('Sarah', "l'èleve studieuse *");

//! EXO réagir au clic
const titreChange = document.querySelector('.titreDom');
//event
titreChange.addEventListener('click', function(){
    titreChange.setAttribute("style", "color: pink");
    titreChange.innerHTML = "***Je suis une super nanaaa AHHHHHHH****";
})

//! EXO réagir au clic2

const titre2 = document.getElementById('secondTitre');
const btnAdd = document.getElementById('btnAjouter');
const btnRemove = document.getElementById('btnSupp');
const btnToggle = document.getElementById('btnToggle');

function reactClick(){
    titre2.style.color = 'red';
}
btnAdd.addEventListener('click', reactClick);

function removeClick(){
    titre2.style.removeProperty('color');
}
btnRemove.addEventListener('click', removeClick);

function toggleClick(){
    titre2.classList.toggle('bg-pink');
}
btnToggle.addEventListener('click', toggleClick)

//texte area qui copie texte
const copieTexte = document.createElement('p');
const emplacement = document.querySelector('.container');
const texteArea = document.querySelector('.texte');

texteArea.addEventListener('input', function() {
    copieTexte.innerHTML = texteArea.value; // Met à jour le contenu de copieTexte
});

emplacement.append(copieTexte);
