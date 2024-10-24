//conf avec import .env pour sécurité de la BDD
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud "users"
const usersRef = dbRef.child("users");
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);
const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());
const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());
const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");

//TODO LIST FIREBASE
const todosRef = dbRef.child('todoList');
let btnAddTodoUI = document.querySelector('#add-todo-btn');
btnAddTodoUI.addEventListener('click', addTodoBtnClicked);//function add task todo
let formTodoUI = document.getElementById("add-todo-form");
formTodoUI.addEventListener("submit", (event) => event.preventDefault());//submit the form
let todoListUI = document.getElementById("todo-list");

readTodoData()
//todo added
function addTodoBtnClicked(){
  let addTodoInputsUI = document.querySelector('.todo-input');
  let newTask = {};
  let key = addTodoInputsUI.getAttribute('data-key');
  let value = addTodoInputsUI.value;
  newTask[key] = value;
  todosRef.push(newTask);
  console.log('new task added')
  console.log("task :" + newTask.task);
  formTodoUI.reset();
}

//Todo display list
function readTodoData(){
  todosRef.on('value', snap => {
    todoListUI.innerHTML = "";
    snap.forEach(childSnap => {
      let key = childSnap.key;
      let value = childSnap.val();
      let liTodo = document.createElement('li');

      let deleteBtnUI = document.createElement('button');
      deleteBtnUI.setAttribute('class','delete-task btn btn-outline-danger mx-3');
      deleteBtnUI.innerHTML = "Delete";
      deleteBtnUI.setAttribute('todoid', key);
      deleteBtnUI.addEventListener('click', todoDeleteButtonClicked);

      liTodo.innerHTML = value.task;
      liTodo.setAttribute("todo-key", key);
      liTodo.appendChild(deleteBtnUI);
      todoListUI.appendChild(liTodo);
    })
  })
}
function todoDeleteButtonClicked(event) { 
  let todoid = event.target.getAttribute("todoid");
  let todosRef = dbRef.child("todoList/" + todoid);
  todosRef.remove()
      .then(() => {
          console.log("Task deleted with sucess");
      })
      .catch((error) => {
          console.error("An error occured when deleting the task :", error);
      });
} 

//* ICI FIREBASE USERS LIST *
readUserData();
function addUserBtnClicked() { 
    //TODO Récupérer TOUS LES INPUTS avec la classe user-input 1 variable addUserInputsUI (getElementByClassName)
    let addUserInputsUI = document.getElementsByClassName("user-input");
    //TODO créer une variable newUser (qui est un objet vide)
    let newUser = {};
    
    //TODO faire une boucle for pour parcourir les input dans addUserInputsUI
    for(let i=0; i<addUserInputsUI.length; i++){
      let key = addUserInputsUI[i].getAttribute('data-key')
      let value = addUserInputsUI[i].value;
      newUser[key] = value
  }
    //TODO un push de newUsr
    usersRef.push(newUser);
    //TODO on console log un msg type nouvel utilisateur enregistré
    console.log("new utilisateur enregistré");
    //TODO  on console log le nom et l'âge du nouvel utilisateur
    console.log("nom :" + newUser.name + "age" + newUser.age);
    //TODO on réinitialise le formulaire avec l'id add-user-form
    formUserUI.reset();
  }; 

  function readUserData() { 
    usersRef.on("value", snap => {
      userListUI.innerHTML = "";
      snap.forEach(childSnap => {
          let key = childSnap.key;
          let value = childSnap.val();
          let $li = document.createElement('li');

          let deleteIconUI = document.createElement('button');
          deleteIconUI.setAttribute('class','delete-user btn btn-outline-danger mx-3');
          deleteIconUI.innerHTML = " Delete ";

          let updateIconUI = document.createElement('button');
          updateIconUI.innerHTML = " Update ";
          updateIconUI.setAttribute('class','edit-user btn btn-outline-success mx-3');

          updateIconUI.setAttribute("userid", key);
          updateIconUI.addEventListener('click', editButtonClicked);

          deleteIconUI.setAttribute("userid", key);
          deleteIconUI.addEventListener('click', deleteButtonClicked);

          $li.innerHTML = value.name;
          $li.setAttribute("user-key", key);
          $li.addEventListener('click', userClicked);
          $li.appendChild(deleteIconUI);
          $li.appendChild(updateIconUI);
          userListUI.appendChild($li);
      });
  });
  };  
  function userClicked(event) { 
    let userID = event.target.getAttribute("user-key");
    let userRef = dbRef.child("users/" + userID);
    let userDetailUI = document.getElementById('user-detail');
    userRef.on("value", snap =>{
      userDetailUI.innerHTML = "";
      snap.forEach(childSnap =>{
        let $p = document.createElement('p');
        $p.innerHTML = `${childSnap.key} : ${childSnap.val()}`;
        userDetailUI.append($p)
      })
    })
  }; 
  function editButtonClicked(event) { 
    formUserEditUI.style.display = "block";
    formUserUI.style.display = "none";

    let inputId = document.querySelector('.edit-userid');
    inputId.value = event.target.getAttribute("userid");
    let userRef = dbRef.child("users/"+ inputId.value);
    let editUserInputsUI = document.querySelectorAll('.edit-user-input');
    userRef.on("value", snap =>{
      for(let i=0; i<editUserInputsUI.length; i++){
        let key = editUserInputsUI[i].getAttribute("data-key");
        key = snap.val()[key];
      }
    })
    let saveBtn = document.querySelector('.edit-user-btn');
    saveBtn.addEventListener('click', saveUserBtnClicked);
  }; 

  function saveUserBtnClicked(event) { 
    let inputId = document.querySelector('.edit-userid').value;
    inputId.value = event.target.getAttribute("userid");
    let userRef = dbRef.child("users/"+ inputId);

    let editUserInputsUI = document.querySelectorAll('.edit-user-input');
    editUserInputsUI.forEach(textField =>{
      let key = editUserInputsUI.textField.getAttribute("data-key");
      editedUSerObject[key] = textField.value;
    })
    userRef.editButtonClicked(editedUSerObject);
    formUserEditUI.style.display = "none";
    formUserUI.style.display = "block";
  }; 

  function deleteButtonClicked(event) { 
    let userID = event.target.getAttribute("userid");
    let userRef = dbRef.child("users/" + userID);
    userRef.remove()
        .then(() => {
            console.log("User supprimé avec succès");
        })
        .catch((error) => {
            console.error("Erreur lors de la suppression de l'utilisateur:", error);
        });
  } 



