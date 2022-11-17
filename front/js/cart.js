
//--------------------------------affichage card panier-------------------------------------------------------------//

let produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
let cardCart = document.querySelector ('#cart__items');




if(produitEnregistreLS === null){
    console.log("je suis vide");
}else {
    
    let structureProduitPanier = [];

    for(b = 0; b < produitEnregistreLS.length; b++){
    
    let articleCard = document.createElement('article');
    articleCard.classList.add ("cart__item");
    //should I add an id? 
    //data color? 
    cart__items.appendChild (articleCard);

    let imageContainer = document.createElement ('div');
    imageContainer.classList.add ("cart__item__img");
    articleCard.appendChild (imageContainer);

       let imageCart = document.createElement ('img');
        //imageCart.src= produitEnregistreLS.imagetest;
        //imageCart.alt= produitEnregistreLS.textAlt[b];
        imageContainer.appendChild (imageCart); 


    let contentContainer = document.createElement ("div");
    contentContainer.classList.add ("cart__item__content");
    articleCard.appendChild(contentContainer);

      let contentDescription = document.createElement ("div");
        contentDescription.classList.add ("cart__item__content__description");
        contentContainer.appendChild(contentDescription);

            let cartH2 = document.createElement ("h2");
            cartH2.textContent =  produitEnregistreLS[b] .name;
            contentDescription.appendChild(cartH2);

            let cartColor = document.createElement ("p");
            cartColor.textContent = produitEnregistreLS[b].color ;
            contentDescription.appendChild(cartColor);

            let cartPrice = document.createElement ("p");
            cartPrice.textContent =  produitEnregistreLS[b].price;
            contentDescription.appendChild(cartPrice); 

    let contentSettings = document.createElement ("div");
    contentSettings.classList.add ("cart__item__content__settings");
    contentContainer.appendChild(contentSettings);

       let cartQuantity = document.createElement ("div");
        cartQuantity.classList.add ("cart__item__content__settings_quantity");
        contentSettings.appendChild( cartQuantity);

            let cartAfficheQuantite = document.createElement ("p");
            cartAfficheQuantite.textContent = 'Qté : ' + produitEnregistreLS[b] .quantity;
            cartQuantity.appendChild(cartAfficheQuantite);
            
            let inputQuantite = document.createElement('input');
            inputQuantite.type = "number";
            inputQuantite.classList.add('itemQuantity');
            inputQuantite.name = 'itemQuantity';
            cartQuantity.appendChild(inputQuantite);

        let cartDelete= document.createElement ("div");
        cartDelete.classList.add ("cart__item__content__settings_delete");
        contentSettings.appendChild( cartDelete);
            
            let deleteItem = document.createElement ("p");
            deleteItem.classList.add ('deleteItem');
            deleteItem.textContent = "Suprimer";
            cartDelete.appendChild(deleteItem);
    }

    
}



let totalPriceCalcul = [] ;
          
//Aller chercher tous les prix qu'il y a dans le panier
/*for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    let totalPriceInsideCart =  produitEnregistreLS[c].price;

    //mettre les prix du panier dans le tableau totalPriceCalcul methode reduce
    totalPriceCalcul.push(totalPriceInsideCart);
    console.log(totalPriceCalcul);        
    


}
*/
//addition des prix


    const reducer = (accumulator, currentValue) => accumulator + currentValue ;
    const totalPrice = totalPriceCalcul.reduce(reducer,0);
    console.log(totalPrice);
    
    let totalPriceText = document.querySelector ('#totalPrice');
    totalPriceText.textContent = totalPrice ;
    


let totalQuantityCalcul = [] ;
            
//Aller chercher tous les prix qu'il y a dans le panier
for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    let totalQuantityInsideCart =  produitEnregistreLS[c].quantity;

//mettre les prix du panier dans le tableau totalPriceCalcul methode reduce
    totalQuantityCalcul.push(totalQuantityInsideCart);
    console.log(totalQuantityCalcul);            
}



//addition de la quantité du tableau 

const reducer2 = (accumulator, currentValue) => accumulator + currentValue ;
const totalQuantity = totalQuantityCalcul.reduce(reducer2,0);
console.log(totalQuantity);

let totalQuantityText = document.querySelector ('#totalQuantity');
totalQuantityText.textContent = totalQuantity;





//--------------------------------modification du panier -------------------------------------------------------------//

//recuperer l'id du produit (product added) avec data-id et data-color dans cart__item

//recuperer localisation de value of input 
let newQuantity = document.querySelector('.itemQuantity').value; 
//recuperer la nouvelle valeur selectionne 
let choiceQuantity = newQuantity;

/*
newQuantity.addEventListener ("click", () => {
    if (newQuantity > 0 ) {
        quantity= newQuantity;
    } else {
            quantity= quantity.value;
    }
});


*/

console.log ("choiceQuantity");
console.log (choiceQuantity);

//recuperer la localisation du btn supprimer
let deleteItem = document.querySelectorAll (".deleteItem");
console.log(deleteItem);



//if there's an input inside <inputQuantite> that is different 
//from the qntity already chosen for a given product <produitEnregistreLS[b] .quantity)>
//then change quantity in object LS from the previus value to the new one selected in input. 
//change cartAfficheQuantite.textContent = 'Qté : ' + produitEnregistreLS[b] .quantity; to the new produitenregistre's amount



//if product added 1 and product added 2's colors are the same then keep only product one and add to 
//its quantity the quantity selected for product 2 

//if product added 1 === product added 2 then only keep product 1 (so they don't duplicate)

//--------------------------------formulaire-------------------------------------------------------------//


//récuperer les données du formulaire et les envoyer dans le LS

let affichageFormulaireHtml = () => { 
let vaVersFormulaire = document.querySelector(".cart__order");

/*let structureFormulaire = `
        <div class="cart__order">
              <form method="get" class="cart__order__form">
                <div class="cart__order__form__question">
                  <label for="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required>
                  <p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required>
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="address">Adresse: </label>
                  <input type="text" name="address" id="address" required>
                  <p id="addressErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="city">Ville: </label>
                  <input type="text" name="city" id="city" required>
                  <p id="cityErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="email">Email: </label>
                  <input type="email" name="email" id="email" required>
                  <p id="emailErrorMsg"></p>
                </div>
                <div class="cart__order__form__submit">
                  <input type="submit" value="Commander !" id="order">
                </div>
              </form>
            </div>
       `;
            //injection HTML 
//vaVersFormulaire.insertAdjacentHTML("afterend", structureFormulaire);

};*/

//affichage du formulaire 
//affichageFormulaireHtml();


//selection du btnCommander pour pouvoir actionner l'envoi de données dans le local storage quand on clique dessus
let btnCommander = document.querySelector (".cart__order__form__submit");
console.log ( btnCommander);

//----------------add Event Listener ----------------//

btnCommander.addEventListener("click", (e)=> {
    e.preventDefault();


//recuperation des valeurs du formulaire qnd il a été rempli, et les garder dans une variable. 
//la récuperation se fait en créant un objet, où tu mets la direction de l'info que tu veux récuperer, 
//et vu que tu veux récuperer pas seulement la direction d'une donnée x, mais aussi ce qu'il y a à l'intérieur , tu mets <.value>
let formulaireData = {
    prenom: document.querySelector("#firstName").value,
    nom:document.querySelector("#lastName").value,
    address:document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    email:document.querySelector("#email").value,
    order: document.querySelector("#order").value,
}

//vérification du formulaire avant d'envoyer l'objet dans le local storage
//=> en utilisant les expressions régulières (regex) 

//Message erreur

/*const textAlert = (value) => {
    return `${value} non valide`;
}*/

//PRENOM
function prenomVerif(){
let lePrenom = formulaireData.prenom;
if (/^[A-Za-z]{3,20}$/.test(lePrenom)){
    return true; 
}else {
        document.querySelector("#firstNameErrorMsg").textContent = 'Prénom non valide';
            //alert(textAlert ("Prénom"));
        return false;
}
};


//NOM
function nomVerif(){
let leNom = formulaireData.nom;
if (/^[A-Za-z\s]{3,20}$/.test(leNom)){   
    return true;
}else {   
    document.querySelector("#lastNameErrorMsg").textContent = 'Nom non valide';
    //alert(textAlert ("Nom"));
    return false;
}
};

//CITY
function villeVerif(){
let laVille = formulaireData.city;
if (/^[A-Za-z]{3,20}$/.test(laVille)){
    return true;
}else {    
    document.querySelector("#cityErrorMsg").textContent = 'Ville non valide';
    //alert(textAlert ("Ville"));
    return false;
}
};

//EMAIL
function emailVerif(){
    let lemail = formulaireData.email;
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(lemail)){
        return true;
    }else {    
        document.querySelector("#emailErrorMsg").textContent = 'Email non valide';
        //alert(textAlert ("Email"));
        return false;
    }
    };

//ADRESSE
function adresseVerif(){
    let ladress = formulaireData.address;
    if (/^[A-Za-z0-9\s]{5,50}$/.test(ladress)){
        return true;
    }else {    
        document.querySelector("#addressErrorMsg").textContent = 'Adresse non valide';
        //alert(textAlert ("Adresse"));
        return false;
    }
    };




//pour envoyer l'objet ( le formulaire rempli) dans le LS
//creer une key pour le LS, et mettre toutes les valeurs recupérés du formulaire qui a été rempli. 
if(prenomVerif() && nomVerif() && villeVerif() && adresseVerif() && emailVerif()){
    localStorage.setItem("formulaireDataKey", JSON.stringify(formulaireData));
}else {
    //message erreur 
    //alert("Veuillez bien remplir le formulaire");
}

//--------------------------------envoi du formulaire  -------------------------------------------------------------//

//ENVOYER les données au serveur 
//une fois le formulaire remplit, mettre ces infos là dans un objet pour l'envoyer au serveur et que la commande puisse être enregistré sous la forme d'objet
//et envoyé dans la localstorage
let aEnvoyer = {
    produitEnregistreLS, 
    formulaireData
}

console.log("aEnvoyer");
console.log(aEnvoyer);
//envoi de l'objet vers le serveur 
let promise01 = fetch (" http://localhost:3000/api/products", {
    method : "POST",
    body : JSON.stringify(aEnvoyer),
    headers : {
        "Content-Type" : "application/json",
    },

    //pour voir le resultat du serveur dans la controle


});



})
};