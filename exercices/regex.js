            //MAIL//
//utiliser le regex
//utiliser fonction .test()
//condition input en vert si ok sinon rouge
// if ? ou try catch ?

            //MPD//
//6 et 8 chart ok, sinon erreur
//regex chartDecimal charSpecial
//fonction match() si match pas avec regex 1 et 2 msg erreur
//msg confirmation 

document.getElementById('formTest').addEventListener('submit', function(event) {

    event.preventDefault(); //ne pas submit le form direct
//les var necessaires pour erreur
    const div = document.querySelector('.MsgErreurDiv')
    const p = document.createElement('p');
    div.append(p);
//email value à utiliser
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
//fonction avec regex test()
    function validateEmail(email) {
        const mailBase = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        return mailBase.test(email);
    }
//conditions input vérification
    if (validateEmail(email)) {
        p.textContent = ''; // supp message erreur precedant 
        emailInput.style.border = "4px solid green";
    }else{
        emailInput.style.border = "4px solid red";
        p.textContent = 'entrez un mail valide !';
    } 
    //PASSWORD PARTIE en cours
    const psd = document.querySelector('.password');
    const password = psd.value;
    const chartDecimal = "/\d/";
    function verifyPassword(password){
            return password.match(chartDecimal, );
    }
    if(password.length<= 8){
        verifyPassword(password);
    }
});

/*
                                CORRECTION
                                
const loginInput = document.querySelector('#exampleInputEmail1');
 console.log(loginInput);
 const passwordInput = document.querySelector('#exampleInputPassword1');
 const userMessage = document.querySelector('#userMessage');

 loginInput.addEventListener('keyup',()=>{ 
  // Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
    // Définit une expression régulière pour valider le format de l'email
    if(regex.test(loginInput.value)){ 
      loginInput.style.backgroundColor = 'green'; 
      // Change la couleur de fond en rouge si l'email est invalide
    }else{  // Vérifie si la valeur saisie ne correspond pas à l'expression régulière

      loginInput.style.backgroundColor = 'red'; // Change la couleur de fond en vert
    }
 })

 passwordInput.addEventListener('keyup',()=>{
  const charDecimal = /\d/;
  const charSpecial = /[$&@!]/;
  let errorMessage ='';
  if(passwordInput.value.length<6){
    errorMessage+='<li>Le Mot de passe trop COURT</li>'
  }
  else if(passwordInput.value.length>8){
    errorMessage+='<li>Le Mot de passe trop LONG</li>'
  }

  if(!passwordInput.value.match(charDecimal)){
    errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
  }
  if(!passwordInput.value.match(charSpecial)){
    errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
  }
  if(errorMessage!==''){
    userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
    userMessage.style.border ='5px solid red'
  }
  else{
    userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
    userMessage.style.border ='5px solid green'
  }

 })*/