


//------------creating the html card 

//------------afficher les produits ajoutés au panier 

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
        imageCart.src=  produitEnregistreLS[b].imageU;
        imageCart.alt= produitEnregistreLS[b].altTxt ;
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
            cartColor.textContent =produitEnregistreLS[b] .colors ;
            contentDescription.appendChild(cartColor);

            let cartPrice = document.createElement ("p");
            cartPrice.textContent =  produitEnregistreLS[b] .price;
            contentDescription.appendChild(cartPrice); 

    let contentSettings = document.createElement ("div");
    contentSettings.classList.add ("cart__item__content__settings");
    articleCard.appendChild(contentSettings);

       let cartQuantity = document.createElement ("div");
        cartQuantity.classList.add ("cart__item__content__settings_quantity");
        contentSettings.appendChild( cartQuantity);

            let cartAfficheQuantite = document.createElement ("p");
            cartAfficheQuantite.textContent = produitEnregistreLS[b] .quantity;
            contentSettings.appendChild(cartAfficheQuantite);
            //input type   

        let cartDelete= document.createElement ("div");
        cartDelete.classList.add ("cart__item__content__settings_delete");
        contentSettings.appendChild( cartDelete);
            
            let deleteItem = document.createElement ("p");
            deleteItem.classList.add ('deleteItem');
            deleteItem.textContent = "Suprimer";
    }

}

//--------------------------------old code-------------------------------------------------------------//

//insertion des elemtns de la card du produit dans la page produit 
let totalQuantity = document.getElementById ('totalQuantity');
let totalPrice = document.getElementById ( 'totalPrice'); 
let messageErreur = document.getElementById ('firstNameErrorMsg');


function afficheRecapitulatif ( ){
    //function somme pour obtenir total quantity 
    // fnct somme pour obtenir total price 

};

//il te manque le prix total de tous les elements de ta commande 
// ainsi que la quantite totale de produits 
//both selecteurs sont tout en haut 



//Attention à ne pas stocker le prix des articles en local. Les données stockées en local ne
//sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même.*/