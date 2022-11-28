//--------------------------------affichage card panier-------------------------------------------------------------//
var produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
console.log(produitEnregistreLS);
let cardCart = document.querySelector ('#cart__items');

for ( k = 0 ; k < produitEnregistreLS.length ; k++){
    id = produitEnregistreLS[k]._id;
    canap = produitEnregistreLS[k];
    console.log("canap");
    console.log(canap);
    fetch("http://localhost:3000/api/products/" + id )
   .then(function (res) {
    if (res.ok) {
    return res.json();  
 
  }})
  .then((res) => {
    console.log(res);
    listProduct = res;

    afficheProduits(listProduct, canap); 

   
    
  })
  .catch((err)=> console.log(err));

}


function afficheProduits (listProduct, canapS) {
    console.log("canapS");
    console.log(canapS);
    //const givenId = produitEnregistreLS[b]._id
   

        //declaration pour afficher et pour obtenir l'id pour chaque produit dans le local storage
         articleCard = document.createElement('article');
        articleCard.classList.add ("cart__item");
        articleCard.id = canapS._id; 
        articleCard.color  = canapS.color; 
        cart__items.appendChild (articleCard);

        /*
        console.log(articleCard.id)
        //enregistrement de l'id produit LS dans une variable
        givenId = (articleCard.id)
        console.log("givenId")
        console.log(givenId)
       
            

        //put the name of the variable that stocks the id 

   //parcourir id de api (for of) 
   //if the id of api == givenId 
   //retrieve et affiche name and price of that instance in the api 
     if ( listProduct[b]._id == givenId){
        //Array.prototype.index( )
        console.log(listProducts.indexOf(givenId))*/
        
     
        let imageContainer = document.createElement ('div');
        imageContainer.classList.add ("cart__item__img");
        articleCard.appendChild (imageContainer);

        
           let imageCart = document.createElement ('img');
            imageCart.src= listProduct.imageUrl;
            imageCart.alt= listProduct.textAlt;
            imageContainer.appendChild (imageCart); 

            
    let contentContainer = document.createElement ("div");
    contentContainer.classList.add ("cart__item__content");
    articleCard.appendChild(contentContainer);
      let contentDescription = document.createElement ("div");
        contentDescription.classList.add ("cart__item__content__description");
        contentContainer.appendChild(contentDescription);
        
                let cartH2 = document.createElement ("h2");
                cartH2.textContent =  listProduct .name;
                contentDescription.appendChild(cartH2);

                let cartColor = document.createElement ("p");
                cartColor.textContent = canapS.color ;
                contentDescription.appendChild(cartColor);

                let cartPrice = document.createElement ("p");
                cartPrice.textContent = listProduct.price;
                contentDescription.appendChild(cartPrice); 

            let contentSettings = document.createElement ("div");
            contentSettings.classList.add ("cart__item__content__settings");
            contentContainer.appendChild(contentSettings);
               let cartQuantity = document.createElement ("div");
                cartQuantity.classList.add ("cart__item__content__settings_quantity");
                contentSettings.appendChild( cartQuantity);
                    let cartAfficheQuantite = document.createElement ("p");
                    cartAfficheQuantite.textContent = 'Qté : ' ;
                    cartQuantity.appendChild(cartAfficheQuantite);
                    
                    let inputQuantite = document.createElement('input');
                    inputQuantite.type = "number";
                    inputQuantite.classList.add('itemQuantity');
                    inputQuantite.name = 'itemQuantity';
                    //inputQuantite.value = canap.quantity;
                    inputQuantite.setAttribute("value", canapS.quantity);

                    cartQuantity.appendChild(inputQuantite);

        let cartDelete= document.createElement ("div");
        cartDelete.classList.add ("cart__item__content__settings_delete");
        contentSettings.appendChild( cartDelete);
            
            let deleteItem = document.createElement ("p");
            deleteItem.classList.add ("deleteItem");
            deleteItem.textContent = "Suprimer";
            cartDelete.appendChild(deleteItem);
    

    

}



//--------------------------------calcul total du prix et de la quantité -------------------------------------------------------------//
/*
let totalPriceCalcul = [] ;
//let productAPI = listProducts[b].price

//Aller chercher tous les prix qu'il y a dans le panier
for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    //a changer par le nom donné au prix du produit x, recupéré auprès de l'api.
    let totalPriceInsideCart =  produitEnregistreLS[c].price;
   // console.log(totalPriceInsideCart);

    //mettre les prix du panier dans le tableau totalPriceCalcul methode .reduce
    totalPriceCalcul.push(totalPriceInsideCart);
    //console.log(totalPriceCalcul);        
    
} 

//calcul quantité



function getNumberProduct () {
    //let basket = get basket(); 
    let number = 0 ;
    for (let product of produitEnregistreLS){
        number += Number (product.quantity) ;
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
        total += Number (product.quantity) * Number (product.price);
    }
    return total;
}

//insertion du résultat dans l'affichage
let totalQuantityText = document.querySelector ('#totalQuantity');
totalQuantityText.textContent = getNumberProduct ();


//--------------------------------affichage du panier -------------------------------------------------------------//


//function de l'ordre : ils doivent être regroupés par "modèle et par couleur "

//PUT IN ORDER


//array.prototype.sort()
/*
function putInOrder () {
    listProducts.sort(function (a,b)){
        //compare betwen one item and the one next to it in the API 



    }

}
*/

//--------------------------------modification du panier -------------------------------------------------------------//

// SUPPRIMER PRODUIT 



//supprimer produit draft
/*
//selection du "bouton" supprimer 
let btnSupprimer = document.querySelectorAll (".deleteItem");


//parcurir les btn supprimer 
for (let l= 0 ; l < btnSupprimer.length; l++){
    btnSupprimer[l].addEventListener ("click", (event) =>{
        event.preventDefault();

       
//selection du produit id en particulier 
        let idProduitASupprimer = produitEnregistreLS[l]._id;
        let colorProduitASupprimer = produitEnregistreLS[l].color;


        // supprimer un objet qui est dans un tableau avec la méthode filter : 
            // filter va créer un nouveau tableau avec les produits differents a celui avec l'idProduitASupprimer 
        
        produitEnregistreLS = produitEnregistreLS.filter( element => element.id !== idProduitASupprimer);
        produitEnregistreLS = produitEnregistreLS.filter( element => element.color !== colorProduitASupprimer);
       

        localStorage.setItem("product", JSON.stringify (produitEnregistreLS));
        //on envoie la variable dns LS 
        //if (produitEnregistreLS.id == idProduitASupprimer.id && produitEnregistreLS.color == colorProduitASupprimer){
            
        
        //recharger la page une fois le produit supprimé
        window.location.href = "cart.html" ; 

    });

}
*/


//CHANGEMENT DE QUANTITE - fisrt draft

/*
function changeQuantity () {

    //get all the inputs available and add event to for each
        //let oldQuantity = inputQuantite.value
        let oldQuantity = document.getElementsByClassName(".itemQuantity").value;
        let newInput = 0
        for ( i = 0 ; i < newInput.length ; i ++) {
         //add event listener du changement de l'input 
            newInput.addEventListener ('change', (event) => {
            preventDefault(event);
            newInput = 1
            
            if (newInput != oldQuantity){
                //ecrase produitEnregistreLS[b].quantity with value of newInput
                inputQuantite[b].value = newInput
                //afficher le panier updated
                afficheProduits();

                //calculate updated price 
                getTotalPrice ();
                //send to local storage
                localStorage.setItem("product", JSON.stringify(produitEnregistreLS));
                
            }else {
                //push to local storage
                localStorage.setItem("product", JSON.stringify(produitEnregistreLS));
            }

       
        });
    }
}


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
    localStorage.setItem("formulaire", JSON.stringify(contactLocation));
}else {
    //message erreur 
    alert("Veuillez bien remplir le formulaire");
}
;

//--------------------------------envoi du formulaire  -------------------------------------------------------------//


//declaration des données obtenues dans le formulaire

//console.log("productAdded._id");
//console.log(produitEnregistreLS[b]._id);

let products = [];

for (i = 0 ; i < produitEnregistreLS.lenght ; i ++){
    products.push(produitEnregistreLS._id);
}


console.log( "products");
console.log( products);

//maybe they are not send like strings
const order = {
    contact: {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        address :document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email :document.querySelector("#email").value,
},
    products : products,
}
//let   inputOrder= document.querySelector("#order").value;
//tableau pour sauvegarder l'ID' du produit(s) choisis par le client

//--------------------------------creation de l'objet à envoyer contenant le panier et le formulaire  ---------------------------//
//objet pour sauvegarder les données du formulaire
// et le tableau avec les infos du produit enregistré 
//pour que la commande puisse être enregistré dns LS comme un seul objet


/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */


 localStorage.setItem("order", order);
 console.log(order);
 
 // faut valider avant d'envoyer vers le serveur 
 
 
 //console.log(order);
 
 //envoi de l'objet vers le serveur 
 /*let promise01 =*/ 
  
 const promise01 = fetch ("http://localhost:3000/api/products/order", {
     method : "POST",
     headers: { 
         Accept : "application/json",
         "Content-Type" : "application/json",
     },
     body : JSON.stringify(order)
 
 });
     //pour voir le resultat du serveur dans al console
     promise01.then(async(response)=> {
    try{
            //récuperation de l'id de la reponse du serveur 
        const contenu = await response.json();
        let orderId = contenu.orderId;

        
        //mettre lid dans le local storage
        localStorage.setItem("orderId", orderId);

        //clear le local storage et changer de page
        //localStorage.clear();
        //window.location.assign("confirmation.html?id=" + contenu.orderId);
        window.location.href = "confirmation.html";

    } catch (e){
        console.log(e);
    }

 
 }); 
}); 
