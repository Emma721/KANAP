
//insertion des elemtns de la card du produit dans la page produit 
let totalQuantity = document.getItemById ('totalQuantity');
let totalPrice = document.getItemById ( 'totalPrice'); 
let messageErreur = document.getItemById ('firstNameErrorMsg');


function afficheRecapitulatif ( ){
    //function somme pour obtenir total quantity 
    // fnct somme pour obtenir total price 

};


//creating the html card 

let articleCard = document.createElement('article');
articleCard.classList.add ("cart__item");
//should I add an id? 
//data color? 
cart__items.appendChild (articleCard)

    let imageContainer = document.createElement ("div");
    imageContainer.classList.add ("cart__item__img");
    articleCard.appendChild ("cart__item__img") ;

        let imageCart = document.createElement ("img");
        imageCart.src= //productimageurl;
        imageCart.alt= //productaltTxt;
        imageContainer.appendChild ("imageCart");


    let contentContainer = document.createElement ("div");
    contentContainer.classList.add ("cart__item__content");
    articleCard.appendChild(contentContainer);

        let contentDescription = document.createElement ("div");
        contentDescription.classList.add ("cart__item__content__description");
        contentContainer.appendChild.add ( "contentDescription");

            let cartH2 = document.createElement ("h2");
            cartH2.textContent = //productname;
            contentDescription.appendChild(cartH2);

            let cartColor = document.createElement ("p");
            cartColor.textContent = //productColor;
            contentDescription.appendChild(cartColor);

            let cartPrice = document.createElement ("p");
            cartPrice.textContent = //productPrice;
            contentDescription.appendChild(cartPrice);

    let contentSettings = document.createElement ("div");
    contentSettings.classList.add ("cart__item__content__settings");
    articleCard.appendChild(contentSettings);

        let cartQuantity = document.createElement ("div");
        cartQuantity.classList.add ("cart__item__content__settings_quantity");
        contentSettings.appendChild.add ( "contentQuantity");

            let cartAfficheQuantite = document.createElement ("p");
            cartAfficheQuantite.textContent = //productquantity;
            contentSettings.appendChild(cartAfficheQuantite);
            //input type

        let cartDelete= document.createElement ("div");
        cartDelete.classList.add ("cart__item__content__settings_delete");
        contentSettings.appendChild.add ( "cartDelete");
            
            let deleteItem = document.createElement ("p");
            deleteItem.classList.add ('deleteItem');
            cartAfficheQuantite.textContent = "Suprimer";
            cartDelete.appendChild(deleteItem);

//il te manque le prix total de tous les elements de ta commande 
// ainsi que la quantite totale de produits 
//both selecteurs sont tout en haut 


//Attention à ne pas stocker le prix des articles en local. Les données stockées en local ne
//sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même.