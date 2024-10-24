// Section: exercices/domEvent.js
const divTest = document.querySelector('.divTeste');
const p = document.createElement('p');
p.innerText = "bonjour je suis un paragraphe";
divTest.append(p);
p.style.textAlign='center';

//IMG 
document.addEventListener('click', (event) => {
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mr._Bean_2011.jpg/280px-Mr._Bean_2011.jpg';

    img.style.position = 'absolute';
    img.style.left = event.x + 'px';
    img.style.top = event.y + 'px';

    document.body.append(img);
    console.log("souris is clicking");
});

//MOUSE LEAVE
const h2 = document.querySelector('.surprise');

document.addEventListener('mouseleave', () => {
    console.log("leaving");
    h2.style.display = 'block';
});

//SET TIME out
const myTimeout = setTimeout(change, 3000);

function change() {
    const div = document.querySelector('.divTeste');
    const surprise2 = document.createElement('h1').innerHTML = "EHH ON S'ACCROCHE ! ZEEE PARTI";
    div.append(surprise2);
    document.body.style.backgroundColor = 'pink';
}

// Section: exercices/exoDome2.js
const zoneTxt = document.querySelector(".form-control");
const zoneRender = document.querySelector(".formulaire");
zoneTxt.value = localStorage.getItem('monSuperTexte');
if (zoneTxt.value) {
    zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
}
zoneTxt.addEventListener("keyup", function() {
    localStorage.setItem('monSuperTexte', zoneTxt.value);
    zoneRender.innerHTML = marked(zoneTxt.value);
});

const divTexteAjout = document.querySelector('.ajoutTexte');
const ajouterTexte = function (pseudo, duTexte) {
    const pElement = document.createElement('p'); 
    pElement.innerText = `${pseudo} - ${duTexte}`; 
    divTexteAjout.append(pElement);  
}
ajouterTexte('Sarah', "l'èleve studieuse *");

const titreChange = document.querySelector('.titreDom');
titreChange.addEventListener('click', function() {
    titreChange.setAttribute("style", "color: pink");
    titreChange.innerHTML = "***Je suis une super nanaaa AHHHHHHH****";
});

const titre2 = document.getElementById('secondTitre');
const btnAdd = document.getElementById('btnAjouter');
const btnRemove = document.getElementById('btnSupp');
const btnToggle = document.getElementById('btnToggle');

function reactClick() {
    titre2.style.color = 'red';
}
btnAdd.addEventListener('click', reactClick);

function removeClick() {
    titre2.style.removeProperty('color');
}
btnRemove.addEventListener('click', removeClick);

function toggleClick() {
    titre2.classList.toggle('bg-pink');
}
btnToggle.addEventListener('click', toggleClick);

const copieTexte = document.createElement('p');
const emplacement = document.querySelector('.container');
const texteArea = document.querySelector('.texte');

texteArea.addEventListener('input', function() {
    copieTexte.innerHTML = texteArea.value;
});

emplacement.append(copieTexte);

// Section: exercices/exoDom1.js
const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
let divUser = document.querySelector('.userProfile');
divUser.style.width = '300px';
divUser.style.margin = 'auto'; 
divUser.style.background = 'radial-gradient(circle, purple, pink)'; 
divUser.style.display = 'flex';
divUser.style.flexDirection = 'column'; 
divUser.style.alignItems = 'start';

const id = function() {
    const newImg = document.createElement('img');
    newImg.src = userData.img;
    divUser.append(newImg);
    newImg.style.width = '250px';
    newImg.style.alignSelf = 'center';
    newImg.style.border = '5px solid pink'; 
    for (const [key, value] of Object.entries(userData)) {
        if (key != 'img') {
            const pElement = document.createElement('p'); 
            pElement.innerText = `${key}: ${value}`; 
            pElement.style.marginLeft = '15px';
            pElement.style.padding = '5px';
            pElement.style.border = '5px solid pink';
            divUser.append(pElement); 
        }
    }
}
id();