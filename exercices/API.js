//API => https://pokeapi.co/api/v2/pokemon
const divAPI = document.querySelector('.zoneApi');
const URL = "https://pokeapi.co/api/v2/pokemon";

//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(const pokemon of data.results){ 
            divAPI.innerText += pokemon.name + '\n';//accumulation des nom dans la div 
        }
    })
    .then(data =>(console.log(data)))
    .catch(error => console.log("Erreur custom : " + error));
   };
contactApi();

const contactApi2 =  async () => {
    const response = await fetch('https://randomuser.me/api/');
    console.log(response);
    
    if (!response.ok || response.status !== 200) {
        console.error("Erreur lors de la récupération des données : ", response.statusText);
        return;
    }
    const transformedData = await response.json();
    console.log(transformedData);
    return transformedData.results[0];
}

let randomUser = await contactApi2();
console.log ('randomUser', randomUser);

if (randomUser) {
    let UserCard = document.createElement('div');
    UserCard.className = 'user-card';
    
    let img = document.createElement('img');
    img.src = randomUser.picture.large;
    img.alt = 'Photo de ' + randomUser.name.first;
   
    let name = document.createElement('h2');
    name.innerText = `${randomUser.name.title}. ${randomUser.name.last} ${randomUser.name.first}`;
    
    let email = document.createElement('p');
    email.innerText = `Email : ${randomUser.email}`;
   
    let address = document.createElement('p');
    address.innerText = `Address : ${randomUser.location.postcode} - ${randomUser.location.city}, ${randomUser.location.state} - ${randomUser.location.country}`;

    let phone = document.createElement('p');
    phone.innerText = `Phone : ${randomUser.phone} - ${randomUser.cell}`;

    UserCard.appendChild(img);
    UserCard.appendChild(name);
    UserCard.appendChild(email);
    UserCard.appendChild(address);
    UserCard.appendChild(phone);
    document.body.appendChild(UserCard); 
} else {
    console.error("pas d'utilisateur récupéré");
}

const btnRandom = document.createElement('button');
btnRandom.innerText = 'random user';
userCard.appendChild(btnRandom);

btnRandom.addEventListener('click', ()=>{
    console.log("random user click");
    contactApi2();
})
/*

   //test avec erreur via RESPONSE en accédant au propriétés de l’objet
const contactApi3 = () => {
    //! tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire)
   fetch("https://api.npms.io/on-s-est-trompe-dans-l-url")
   //! Ci dessous avec une url valide
    //fetch(URL)
    .then(async (response) => {
    const dataTransformed = await response.json();
    // Ici on gère aussi les erreurs au niveau de la
    // réponse de l'api
    // Si dans la response la propriété ok n’est pas définie
    if (!response.ok) {
    // on récupère les messages d'erreur ou la propriété statusText par default de la response
        const error = (dataTransformed && dataTransformed.message) || response.statusText;
    //ƒ° native de JS utilisé sur les objets de type Promise
        return Promise.reject(error);
    }
    for(const pokemon of dataTransformed.results){ 
        divAPI.innerText += pokemon.name + '\n';
    }
    })
    .catch((error) => {
        console.log(error);
        // Ici on crée une error custom et l'objet error
        console.error("Attention une fusée à décollée depuis Grenoble", error);
    });
};
contactApi3();

//version sans chainage de fetch
const contactApi2 = async () => {
    //Data va récup Toutes les données de l'api
    const data = await fetch(URL);
    console.log(data);
    //Plutôt que de Travailler sur la réponse, on va la transformé pour
    //qu'elle devient un OBJET JS (+ pratique)
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    for(const pokemon of dataTransformed.results){ 
        divAPI.innerText += pokemon.name + '\n';
    }
};
contactApi2();
*/