function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
** DOM Elements
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const btnSubmit = document.querySelector('.btn-submit');
const modalBody = document.querySelector('.modal-body');


// récupération de l'id de la premiere radio (New York) pour que la case soit rempli par defaut avec "checked"
const firstTown = document.getElementById('location1').checked = true;

// pour que les conditions générales soient cochées par defaut.
const checkBox1 = document.querySelector('#checkbox1')

//ciblage de l'id des conditions générales
const checkbox1 = document.querySelector('#checkbox1');

// ciblage de l'input (bouton) "Fermer"
const btnSubmitConfirm = document.querySelector('.btn-submit-confirm');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", unLaunchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// unlaunch modal form
function unLaunchModal() {
  modalbg.style.display = "none";
}

/*
** ciblage des input du formulaire qu'on stock dans des variables
*/
const inputFirst = document.querySelector('#formulaire input[name="first"]');
const inputLast = document.querySelector('#formulaire input[name="last"]');
const inputEmail = document.querySelector('#formulaire input[name="email"]');
const inputBirthdate = document.querySelector('#formulaire input[name="birthdate"]');
const inputQuantity = document.querySelector('#formulaire input[name="quantity"]');
const inputCheckbox1 = document.querySelector('#formulaire input[name="checkbox1"]');

/*
** fonction permettant de personnaliser le message d'erreur du prénom lors de la soumission du formulaire
*/
const firstFunction = () => {
  const validityState = inputFirst.validity;

  if (validityState.valueMissing) {
    inputFirst.setCustomValidity('Prénom invalide, veuillez entrer 2 caractères ou plus');
  } else {
    inputFirst.setCustomValidity('');
  }
  inputFirst.reportValidity();

}
/*
** fonction permettant de personnaliser le message d'erreur du nom lors de la soumission du formulaire
*/
const lastFunction = () => {
  const validityState = inputLast.validity;

  if (validityState.valueMissing) {
    inputLast.setCustomValidity('Nom invalide, veuillez entrer 2 caractères ou plus');
  } else {
    inputLast.setCustomValidity('');
  }
  inputLast.reportValidity();

}

/*
** fonction permettant de personnaliser le message d'erreur de l'email lors de la soumission du formulaire
*/
const emailFunction = () => {
  const validityState = inputEmail.validity;

  if (validityState.valueMissing) {
    inputEmail.setCustomValidity('Entrez une adresse valide. Exemple : contact@nom.com');
  } else {
    inputEmail.setCustomValidity('');
  }
  inputEmail.reportValidity();

}

/*
** fonction permettant de personnaliser le message d'erreur de la date de naissance lors de la soumission du formulaire
*/
const birthdateFunction = () => {
  const validityState = inputBirthdate.validity;

  if (validityState.valueMissing) {
    inputBirthdate.setCustomValidity('veuillez entrer votre date de naissance');
  } else {
    inputBirthdate.setCustomValidity('');
  }
  inputBirthdate.reportValidity();

}
/*
** fonction permettant de personnaliser le message d'erreur s'il n'y a pas de quantité lors de la soumission du formulaire
*/
const quantityFunction = () => {
  const validityState = inputQuantity.validity;

  if (validityState.valueMissing) {
    inputQuantity.setCustomValidity('veuillez indiquer la quantité');
  } else {
    inputQuantity.setCustomValidity('');
  }
  inputQuantity.reportValidity();

}

/*
** fonction permettant de personnaliser le message d'erreur pour accepter les conditions générales lors de la soumission du formulaire
*/
const checkbox1Function = () => {
  const validityState = inputCheckbox1.validity;

  if (validityState.valueMissing) {
    inputCheckbox1.setCustomValidity('veuillez accepter les conditions générales');
  } else {
    inputCheckbox1.setCustomValidity('');
  }
  inputCheckbox1.reportValidity();

}

// variable contenant la class du formulaire de confirmation d'inscription
const modalConfirmation = document.querySelector('.formConfirmation');

/*
** fonction qui permettra de faire rendre visible le formulaire de confirmation (de display none à block)
*/
function launchModalConfirmation() {
  modalConfirmation.style.display = "block";
}

/*
** fonction qui permettra la fermeture du formulaire de confirmation avec un rechargement de la page.
*/
function unLaunchModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

/*
** fonction qui va permettre la validation du formulaire quand les inputs auront été vérifié.
*/
document.querySelector('#formulaire input[type="submit"]').addEventListener("click", (e) => {
  // appels des fonctions précédentes 
  e.preventDefault();
  checkbox1Function();
  quantityFunction();
  birthdateFunction();
  emailFunction();
  lastFunction();
  firstFunction();

  // On stock dans des variables les inputs avec reportValidity qui va renvoyer "true" ou "false" si les regex sont valides ou non.  
  let checkbox1Validity = inputCheckbox1.reportValidity();
  let quantityValidity = inputQuantity.reportValidity();
  let birthdateValidity = inputBirthdate.reportValidity();
  let emailValidity = inputEmail.reportValidity();
  let lastValidity = inputLast.reportValidity();
  let firstValidity = inputFirst.reportValidity();
  
 // On pose une condition, si tous les inputs sont à "true" alors on enleve le formulaire qu'on remplace par la page de fin d'inscription.
  if (firstValidity && lastValidity && emailValidity && birthdateValidity && quantityValidity && checkbox1Validity) {
    modalBody.remove();
    launchModalConfirmation();

  } else {
    console.log("error");
  }
})

/*
** fonction pour fermer le formulaire par la "croix" et par le bouton "Fermer"
*/
const closeConfirm = () => { 
btnSubmitConfirm.addEventListener("click", unLaunchModalConfirmation);
modalClose.addEventListener("click", unLaunchModalConfirmation);
}
closeConfirm();


