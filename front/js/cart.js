//--------------------------------affichage card panier-------------------------------------------------------------//
var produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
console.log(produitEnregistreLS);
let cardCart = document.querySelector ('#cart__items');
console.log(produitEnregistreLS)

for ( k = 0 ; k < produitEnregistreLS.length ; k++){
    id = produitEnregistreLS[k]._id;
    canap = produitEnregistreLS[k];  
    afficheProduits(canap);
   

}




function afficheProduits (canapS) {
    fetch("http://localhost:3000/api/products/" + canapS._id )

    .then(function (res) {
     if (res.ok) {
     return res.json();   
   }})
   .then((res) => {
     console.log(res);
     listProduct = res;
     //afficheProduits(listProduct, canap); 
    articleCard = document.createElement('article');
     articleCard.classList.add ("cart__item");
     articleCard.setAttribute('data-id', canapS._id)
     articleCard.setAttribute ("data-color", canapS.color) 
     cardCart.appendChild (articleCard);
     

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
                 cartAfficheQuantite.textContent = 'Qt?? : ' ;
                 cartQuantity.appendChild(cartAfficheQuantite);
                 
                 let inputQuantite = document.createElement('input');
                 inputQuantite.type = "number";
                 inputQuantite.classList.add('itemQuantity');
                 inputQuantite.name = 'itemQuantity';
                 inputQuantite.value = canapS.quantity;
                 inputQuantite.setAttribute("value", canapS.quantity);

                 cartQuantity.appendChild(inputQuantite);
                 changeQuantity (inputQuantite)
                 
                 

     let cartDelete= document.createElement ("div");
     cartDelete.classList.add ("cart__item__content__settings_delete");
     contentSettings.appendChild( cartDelete);
         
         let deleteItem = document.createElement ("p");
         deleteItem.classList.add ("deleteItem");
         deleteItem.textContent = "Suprimer";
         deleteItem.addEventListener("click", function() { deleteProduct (canapS._id) });
        cartDelete.appendChild(deleteItem);

         // Select all buttons with the btnSupprimer class


    
    // Call the deleteProduct function, passing in the articleCard element
    deleteProduct(articleCard);

    getTotalPrice ();

  }).catch((err)=> console.log(err));
   
   

        //appel a deleteProduct que lorsque les ??l??ments du DOM sont bien affich??s. 
      window.onload = function() {
     
  deleteProduct(articleCard);

}



//--------------------------------calcul total du prix et de la quantit?? -------------------------------------------------------------//

function getNumberProduct () {
    //let basket = get basket(); 
    let number = 0 ;
    for (let product of produitEnregistreLS){
        number += Number (product.quantity) ;
    }
    return number ;

}


//insertion du r??sultat dans l'affichage
let totalQuantityText = document.querySelector ('#totalQuantity');
totalQuantityText.textContent = getNumberProduct ();
/*
function getTotalPrice (){
    let cartPrices = document.querySelectorAll('.cartPrice');
    //let basket = get basket(); 
    let total = 0 ;

    for (let product of produitEnregistreLS){
        total += Number (product.quantity) * Number (product.cartPrice);
    }
    return total;
}*/

//old totalprice
window.onload = function () {
  function getTotalPrice() {
    // Get all elements with the class "cartPrice"
    let cartPrices = document.querySelectorAll('.cartPrice');
    console.log("cartPrices",cartPrices)
    let total = 0;
    // Iterate through the elements and add the price to the total
    for (let price of cartPrices) {
      total += Number(price.textContent) * Number(price.parentNode.querySelector('.itemQuantity').value);
    }
    return total;
  }
  
  //insertion du r??sultat dans l'affichage
  let totalPriceText = document.querySelector ('#totalPrice');
  totalPriceText.textContent = getTotalPrice ();

}


//--------------------------------affichage du panier -------------------------------------------------------------//


//function de l'ordre : ils doivent ??tre regroup??s par "mod??le et par couleur "

//PUT IN ORDER

/*
//array.prototype.sort()

function putInOrder () {
    listProducts.sort(function (a,b)){
        //compare betwen one item and the one next to it in the API 



    }

}

*/


//--------------------------------modification du panier -------------------------------------------------------------//


// SUPPRIMER PRODUIT 

function deleteProduct(articleCard) {
    const btnSupprimer = document.querySelector('.deleteItem');

btnSupprimer.addEventListener('click', function(event) {
    const btnSupprimer = document.querySelector('.deleteItemr');
  // Get the articleCard element
  const articleCard = event.target.closest('article');
 

    // Get the product ID and color from the articleCard element
    const productId = articleCard.getAttribute('data-id');
    const productColor = articleCard.getAttribute('data-color');
  
    // Get the products array from local storage
    const products = JSON.parse(localStorage.getItem("product"));
  
    // Find the index of the product in the array
    const index = products.findIndex(product => product._id === productId && product.color === productColor);
  
    // Remove the product from the array
    products.splice(index, 1);
  
    // Update the products in local storage
    localStorage.setItem("product", JSON.stringify(products));
  
    // Remove the articleCard element from the DOM
    articleCard.remove();

    //recharger la page une fois le produit supprim??
    //window.location.href = "cart.html" ; 

    
})
}
 

//CHANGEMENT DE QUANTITE - 


function changeQuantity() {
    // Get all the quantity input elements
    const quantityInputs = document.querySelectorAll('.itemQuantity');
  
    // Add a change event listener to each input element
    quantityInputs.forEach(input => {
      input.addEventListener('change', function() {
        // Get the current value of the input element
        const currentValue = this.value;
  
        // Get the product id and color from the input's parent element
        const productId = this.closest('article').dataset.id;
        const color = this.closest('article').dataset.color;
  
        // Get the product from local storage
        const products = JSON.parse(localStorage.getItem('product'));
        let product;
        for (let i = 0; i < products.length; i++) {
          if (products[i]._id === productId && products[i].color === color) {
            product = products[i];
            break;
          }
        }
  
        // Update the quantity in the product object
        product.quantity = currentValue;
  
        // Update the local storage element
        localStorage.setItem('product', JSON.stringify(products));

             // Refresh the page
      location.reload();
      });
    });
  }
  
  // Call the changeQuantity function when the DOM is ready
  document.addEventListener('DOMContentLoaded', changeQuantity);


  
   
//--------------------------------formulaire-------------------------------------------------------------//



//selection du btnCommander pour pouvoir actionner l'envoi de donn??es dans le local storage quand on clique dessus
let btnCommander = document.querySelector (".cart__order__form__submit");
console.log ( btnCommander);

//----------------add Event Listener ----------------//

btnCommander.addEventListener("click", (e)=> {
    e.preventDefault();


//recuperation des valeurs du formulaire qnd il a ??t?? rempli, et les garder dans une variable. 
//la r??cuperation se fait en cr??ant un objet, o?? tu mets la direction de l'info que tu veux r??cuperer, 
//et vu que tu veux r??cuperer pas seulement la direction d'une donn??e x, mais aussi ce qu'il y a ?? l'int??rieur , tu mets <.value>
let contactLocation = {
    inputPrenom: document.querySelector("#firstName").value,
    inputNom:document.querySelector("#lastName").value,
    inputAddress:document.querySelector("#address").value,
    inputCity: document.querySelector("#city").value,
    inputEmail:document.querySelector("#email").value,
    inputOrder: document.querySelector("#order").value,
    
}



//v??rification du formulaire avant d'envoyer l'objet dans le local storage
//=> en utilisant les expressions r??guli??res (regex) 



//PRENOM
function prenomVerif(){
let lePrenom = contactLocation.prenom;
if (/^[A-Za-z]{3,20}$/.test(lePrenom)){
    return true; 
}else {
        document.querySelector("#firstNameErrorMsg").textContent = 'Pr??nom non valide';
            //alert(textAlert ("Pr??nom"));
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
//creer une key pour le LS, et mettre toutes les valeurs recup??r??s du formulaire qui a ??t?? rempli. 
if(prenomVerif() && nomVerif() && villeVerif() && adresseVerif() && emailVerif()){
    localStorage.setItem("formulaire", JSON.stringify(contactLocation));
}else {
    //message erreur 
    alert("Veuillez bien remplir le formulaire");
}
;

//--------------------------------envoi du formulaire  -------------------------------------------------------------//


//declaration des donn??es obtenues dans le formulaire

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

//--------------------------------creation de l'objet ?? envoyer contenant le panier et le formulaire  ---------------------------//
//objet pour sauvegarder les donn??es du formulaire
// et le tableau avec les infos du produit enregistr?? 
//pour que la commande puisse ??tre enregistr?? dns LS comme un seul objet


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
            //r??cuperation de l'id de la reponse du serveur 
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
} 
