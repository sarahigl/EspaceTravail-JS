let loginForm = document.querySelector('#login-user-module');
let signinForm = document.querySelector('#signin-user-form');
let btnSwitch = document.querySelector('#switch');



function switchForm(){
    loginForm.style.display = 'block';
    signinForm.style.display = 'none';
}

btnSwitch.addEventListener('click', (event)=>{
    if(event){
        console.log('clicked')
        switchForm()
    }
});

//!REGEX 
let signinInput = document.querySelector('#mail');
console.log(signinInput);
let passwordInput = document.querySelector('#password');

let divDetail = document.querySelector('#log-detail');
let p = document.createElement('p');
divDetail.appendChild(p);

signinInput.addEventListener('keyup', ()=>{
    let mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if(mailRegex.test(signinInput.value)){
        p.textContent = "Email Valid ! ";
        signinInput.style.backgroundColor = 'green';
    }else{
        signinInput.style.backgroundColor = 'red';
        p.textContent = 'Enter a valid email !';
    }
})
p.textContent = "";
passwordInput.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    p.textContent = "";
    p.style.textDecoration = 'none';
    let errorMessage ='';
    if(passwordInput.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }else if(passwordInput.value.length>12){
      errorMessage +='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!passwordInput.value.match(charDecimal)){
      errorMessage +='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
      errorMessage +='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      p.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      passwordInput.style.border ='5px solid red'
    }
    else{
      p.innerHTML = 'Le mot de passe est valide ! 👍';
      passwordInput.style.border ='5px solid green'
    }
  
})
