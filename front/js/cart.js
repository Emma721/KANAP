
//--------------------------------affichage card panier-------------------------------------------------------------//

let produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
let cardCart = document.querySelector ('#cart__items');




if(produitEnregistreLS === null){
    console.log("je suis vide");
}else {
    
    //let structureProduitPanier = [];

    for(b = 0; b < produitEnregistreLS.length; b++){
     

    let articleCard = document.createElement('article');
    articleCard.classList.add ("cart__item");
    articleCard.id = produitEnregistreLS[b]._id; 
    articleCard.color=produitEnregistreLS[b].color; 
    cart__items.appendChild (articleCard);

    let imageContainer = document.createElement ('div');
    imageContainer.classList.add ("cart__item__img");
    articleCard.appendChild (imageContainer);
    

       let imageCart = document.createElement ('img');
        imageCart.src= produitEnregistreLS[b].image;
        imageCart.alt= produitEnregistreLS[b].image;
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

//--------------------------------calcul total du prix et de la quantité -------------------------------------------------------------//

let totalPriceCalcul = [] ;
          
//Aller chercher tous les prix qu'il y a dans le panier
for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    let totalPriceInsideCart =  produitEnregistreLS[c].price;
    console.log(totalPriceInsideCart);

    //mettre les prix du panier dans le tableau totalPriceCalcul methode .reduce
    totalPriceCalcul.push(totalPriceInsideCart);
    console.log(totalPriceCalcul);        
    


}

//addition des prix
/*

    const reducer = (accumulator, currentValue) => accumulator + currentValue ;
    console.log(reducer);
    const totalPrice = totalPriceCalcul.reduce(reducer,0);
    console.log(totalPrice);

//insertion du résultat dans l'affichage
    let totalPriceText = document.querySelector ('#totalPrice');
    totalPriceText.textContent = totalPrice ;
    


let totalQuantityCalcul = [] ;
            
//Aller chercher la quantité totale qu'il y a dans le panier
for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    let totalQuantityInsideCart =  produitEnregistreLS[c].quantity;

//mettre les quantites dns tableau totalQuantity Calcul. methode reduce
    totalQuantityCalcul.push(totalQuantityInsideCart);
    console.log(totalQuantityCalcul);            
}



//addition de la quantité du tableau 

const reducer2 = (accumulator, currentValue) => accumulator + currentValue ;
const totalQuantity = totalQuantityCalcul.reduce(reducer2,0);
console.log(totalQuantity);


//insertion du résultat dans l'affichage
let totalQuantityText = document.querySelector ('#totalQuantity');
totalQuantityText.textContent = totalQuantity;

*/



//--------------------------------modification du panier -------------------------------------------------------------//

//changer basket par pro
    
    function saveBasket(produitEnregistreLS) {
    localStorage.setItem( "product", JSON.stringify("produitEnregistreLS"));
    
}
console.log(saveBasket);


//get the quantity of the product added to the cart ( from LS)
function getBasketLS () {
    let basketQuantity = JSON.parse(localStorage.getItem("product[b].quantity"));   
    if(basket == nul){
        return [];
    }else {
        return JSON.parse(localStorage.getItem (product[b].quantity));   
    }
    
}
console.log(getBasketLS);



// si tu ajoutes le meme produit, actualiser la quantité au lieu d'en ajouter deux fois le même dans le panier  
function addBasket (product ){
    let basket = getBasketLS();
    let findProduct = product.find( p => p.id == product.id);
    if (findProduct != undefined){
        findProduct.quantity ++; //p.quantity + product.quantity ?
    }else {
        product.quantity = product[b].quantity;
        basket.push(product[b].quantity);
    }
    saveBasket(basket);

}

//pour retirer un produit 
function removeFromBasket (product){
    //let btnDeleteItem = document.querySelectorAll (".deleteItem");
    addEventListener("click", (btnDeleteItem) => {
    let basket = getBasketLS();
    basket = basket.filter (p => p.id != product.id);
    saveBasket(basket);
})}



function changeQuantity (product,quantity){  
    let basket = getBasketLS();
    let findProduct = product.find( p => p.id == product.id);
    if  (findProduct != undefined){
        findProduct.quantity += quantity;
        if(findProduct.quantity <= 0) {
            removeFromBasket(findProduct);
        }else {
            saveBasket(basket);
        }
    } 
    };

//calcul quantité

function getNumberProduct () {
    //let basket = get basket(); 
    let number = 0 ;
    for (let product of produitEnregistreLS){
        number += product.quantity;
    }
    return number ;

}

//insertion du résultat dans l'affichage
let totalPriceText = document.querySelector ('#totalPrice');
totalPriceText.textContent = getTotalPrice ();





function getTotalPrice (){
    //let basket = get basket(); 
    let total = 0 ;
    for (let product of produitEnregistreLS){
        total += product.quantity * product.price;
    }
    return total;
}

//insertion du résultat dans l'affichage
let totalQuantityText = document.querySelector ('#totalQuantity');
totalQuantityText.textContent = getNumberProduct ();

/*
0. what do you want to acomplish ? ( name of the function)
1. what are the conditions ( conditionals)
2. what trigers the event? (addEventListener)
3. where are the things you need (selectors)
3. how do those thigns need to change? 
4. where do you want to put them ? 
5. is it working? 
6. what part isn't working? 




*/

//--------------------------------formulaire-------------------------------------------------------------//


//selection du btnCommander pour pouvoir actionner l'envoi de données dans le local storage quand on clique dessus
let btnCommander = document.querySelector (".cart__order__form__submit");
console.log ( btnCommander);

//----------------add Event Listener ----------------//

btnCommander.addEventListener("click", (e)=> {
    e.preventDefault();


//recuperation des valeurs du formulaire qnd il a été rempli, et les garder dans une variable. 
//la récuperation se fait en créant un objet, où tu mets la direction de l'info que tu veux récuperer, 
//et vu que tu veux récuperer pas seulement la direction d'une donnée x, mais aussi ce qu'il y a à l'intérieur , tu mets <.value>
let contactLocation = {
    inputPrenom: document.querySelector("#firstName").value,
    inputNom:document.querySelector("#lastName").value,
    inputAddress:document.querySelector("#address").value,
    inputCity: document.querySelector("#city").value,
    inputEmail:document.querySelector("#email").value,
    inputOrder: document.querySelector("#order").value,
    
}



//vérification du formulaire avant d'envoyer l'objet dans le local storage
//=> en utilisant les expressions régulières (regex) 



//PRENOM
function prenomVerif(){
let lePrenom = contactLocation.prenom;
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
let leNom = contactLocation.nom;
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
let laVille = contactLocation.city;
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
    let lemail = contactLocation.email;
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
    let ladress = contactLocation.address;
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
    localStorage.setItem("formulaireDataKey", JSON.stringify(contactLocation));
}else {
    //message erreur 
    //alert("Veuillez bien remplir le formulaire");
}
;

//--------------------------------envoi du formulaire  -------------------------------------------------------------//


//declaration des données obtenues dans le formulaire
let inputPrenom =document.querySelector("#firstName").value;
let inputNom=document.querySelector("#lastName").value;
let inputAddress=document.querySelector("#address").value;
let inputCity= document.querySelector("#city").value;
let inputEmail=document.querySelector("#email").value;
//let   inputOrder= document.querySelector("#order").value;

// THERE4S SOMETHJING GOING ON WITH SELECTINOF THEH ID OF THE PRODCUT thzt doesn't make the resquest post work??? 

//tableau pour sauvegarder les données du produit(s) choisis par le client
let produitAchete = [];
produitAchete.push(produitEnregistreLS);


//--------------------------------creation de l'objet à envoyer contenant le panier et le formulaire  ---------------------------//
//objet pour sauvegarder les données du formulaire
// et le tableau avec les infos du produit enregistré 
//pour que la commande puisse être enregistré dns LS comme un seul objet
const order = {
    contact: {   
      firstName: inputPrenom.value,
      lastName: inputNom.value,
      city: inputCity.value,
      address: inputAddress.value,
      email: inputEmail.value,

},

    produits : produitAchete,
};


//envoi de l'objet vers le serveur 
/*let promise01 =*/ 
fetch ("http://localhost:3000/api/products/order", {
    method : "POST",
    headers: { 
        'Accept' : "application/json",
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(order)

}).then((response)=> {
    return response.json();
})
.then((data)=> {
    console.log(data);  
})
.catch((error)=> {
    console.log(error);
});

});

