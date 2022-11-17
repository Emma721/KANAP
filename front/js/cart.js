
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
        imageCart.src= produitEnregistreLS[b].imageSrc;
        //imageCart.alt= produitEnregistreLS[b].imageAlt;
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
            //inputQuantite.type.add = number;
            inputQuantite.classList.add('itemQuantity');
            //inputQuantite.name = 'itemQuantity';
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
for ( let c = 0; c < produitEnregistreLS.length; c++){ 
    let totalPriceInsideCart =  produitEnregistreLS[c].price;

    //mettre les prix du panier dans le tableau totalPriceCalcul methode reduce
    totalPriceCalcul.push(totalPriceInsideCart);
    console.log(totalPriceCalcul);        
    


}

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


//message d'erreur avec une conditionelle 
let messageErreur = document.getElementById ('firstNameErrorMsg');


//--------------------------------modification du panier -------------------------------------------------------------//


/*
let deleteItem = document.querySelectorAll (".deleteItem");
console.log(deleteItem);


for(let l = 0; l <deleteItem.length; l++){
    deleteItem[l].addEventListener ("click",()=>{
        //add event prevent default? 

    })
}


function removeItem() {

}
*/

//--------------------------------formulaire-------------------------------------------------------------//


//récuperer les données du formulaire et les envoyer dans le LS