let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 



fetch("http://localhost:3000/api/products/" + id)
   .then(function (res) {
    if (res.ok) {
    return res.json();  
 
  }})
  .then((res) => {
    listProduct = res ;
    console.log(res);
    afficheProduit(listProduct);
    

  
  })
  .catch((err)=> console.log(err));
 

function afficheProduit (listProduct) {

  //selecteurs
  
  let itemTitle= document.querySelector("#title");
  let itemPrice= document.querySelector("#price");
  let itemDescription= document.querySelector("#description");
  let colorOption = document.querySelector("#colors");
  let imageMotherPlace = document.querySelector(".item__img");

 
  //creating the img element 
  let itemImage = document.createElement('img');
  itemImage.src = listProduct.imageUrl ;
  itemImage.alt = listProduct.altTxt ;
  imageMotherPlace.appendChild(itemImage);


  //inserting the other elements
  itemTitle.textContent = listProduct.name;
  itemPrice.textContent = listProduct.price;
  itemDescription.textContent = listProduct.description;

  //inserting the colors  
  for (let i=0; i <listProduct.colors.length ; i ++) {
    let colorChoice = document.createElement("option");
    colorChoice.value =  listProduct.colors[i]; 
    colorChoice.innerText = listProduct.colors[i];
    colorOption.appendChild(colorChoice);
  
 
  }
 




//------gestion du panier ------//





let addToCartBtn= document.querySelector("#addToCart")
addToCartBtn.addEventListener("click", () => {
  if (quantity.value > 0 && quantity.value < 100 && colorOption.value != "") {


 let produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
  if (produitEnregistreLS === null) {
    produitEnregistreLS = [];
  }

let productAdded = { 
  _id: id,
  quantity: quantity.value,
  color: colorOption.value, 

 }

let trouve = 0 
for (z =0; z <produitEnregistreLS.length; z++){
  if( produitEnregistreLS[z]._id == productAdded._id &&  produitEnregistreLS[z].color == productAdded.color  ){
      const newTotalQuantity = Number (produitEnregistreLS[z].quantity) + Number (productAdded.quantity) ; 
      trouve = 1
      if( newTotalQuantity > 100) {
        alert ("quantité limite depassée, ajout pas possible");
      } else {
        produitEnregistreLS[z].quantity = newTotalQuantity ; 
        localStorage.setItem("product", JSON.stringify(produitEnregistreLS));
      }
  

  }

}

if (trouve == 0) {
  produitEnregistreLS.push(productAdded);
  localStorage.setItem("product", JSON.stringify(produitEnregistreLS));
}
 //--------------Local Storage------------/
// -------stocker la récupération des valeurs du formulaire dans le local storage ------//


  console.log(produitEnregistreLS);


//s'il y a des produits déjà enregistrés dans LS


}else {
  alert("quantité et/ou coleur incorrecte");
  
}
});


}