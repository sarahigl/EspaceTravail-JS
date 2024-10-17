const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };
  let divUser = document.querySelector('.userProfile');
  divUser.style.width = '300px';
  divUser.style.margin = 'auto'; // Centre la div dans son conteneur parent
  divUser.style.background = 'radial-gradient(circle, purple, pink)'; 
  divUser.style.display = 'flex';
  divUser.style.flexDirection = 'column'; 
  divUser.style.alignItems = 'start';


 const id = function() {
    const newImg = document.createElement('img');
    newImg.src = userData.img;
    divUser.append(newImg);

    //style 
    newImg.style.width = '250px';
    newImg.style.alignSelf = 'center';
    newImg.style.border = '5px solid pink'; // Correction de la bordure pour spécifier l'épaisseur et le style
    for (const [key, value] of Object.entries(userData)) {
        if(key != 'img'){
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

/*
en code initiale :

  const newImg = document.createElement('img');
  newImg.src = userData.img;
  divUser.append(newImg);
  //style 
  newImg.style.width = '250px';


  const h1Name = document.createElement('h1');
  h1Name.innerText = userData.name;
  divUser.append(h1Name);


  const pMail = document.createElement('p');
  pMail.innerText = userData.email;
  divUser.append(pMail);

  const pAge = document.createElement('p');
  pAge.innerText = userData.age;
  divUser.append(pAge);

  const pDob = document.createElement('p');
  pDob.innerText = userData.dob;
  divUser.append(pDob); 

  const pStatus = document.createElement('p');
  pStatus.innerText = userData.active;
  divUser.append(pStatus);
*/
