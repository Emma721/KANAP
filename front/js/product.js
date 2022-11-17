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
    //addToCart();

  
  })
  .catch((err)=> console.log(err));

function afficheProduit (listProduct) {

  //selecteurs
  //let itemImg= document.querySelector(".item__img");
  let itemTitle= document.querySelector("#title");
  let itemPrice= document.querySelector("#price");
  let itemDescription= document.querySelector("#description");
  let colorOption = document.querySelector("#colors");
  let itemImg = document.querySelector(".item__img")

  //creating the img element 
  let image = document.createElement('img');
  image.src = listProduct.imageUrl ;
  image.alt = listProduct.altTxt ;
  itemImg.appendChild(image);

  //inserting the other elements
  itemTitle.textContent = listProduct.name;
  itemPrice.textContent = listProduct.price;
  itemDescription.textContent = listProduct.description;

  //inserting the colors 
  //let colorChoice = document.createElement("option");
  
  for (let i=0; i <listProduct.colors.length ; i ++) {
    let colorChoice = document.createElement("option");
    colorChoice.value =  listProduct.colors[i]; 
    colorChoice.innerText = listProduct.colors[i];
    colorOption.appendChild(colorChoice);
  
 
  }
  let colorChoice = document.createElement("option");
  console.log(colorChoice);


}


//------gestion du panier ------//



//function addToCart (){ 

let addToCartBtn= document.querySelector("#addToCart")
addToCartBtn.addEventListener("click", () => {
  if (quantity.value > 0 && quantity.value < 100) {
 //récuperation des options choisies par le client sous la forme d'un objet
let itemTitle= document.querySelector("#title");
let colorOption = document.querySelector("#colors");
let itemPrice= document.querySelector("#price");
let itemImg = document.querySelector(".item__img");


let productAdded = {
  name: itemTitle.textContent, 
  _id: id,
  quantity: quantity.value,
  color: colorOption.textContent, 
  price: itemPrice.innerHTML,
  imageSrc :image.src,
  imageAlt : image.alt,
 
 
 }


 console.log(productAdded);


 //--------------Local Storage------------/
// -------stocker la récupération des valeurs du formulaire dans le local storage ------//

  let produitEnregistreLS = JSON.parse(localStorage.getItem("product"));
  console.log(produitEnregistreLS);


//s'il y a des produits déjà enregistrés dans LS
if(produitEnregistreLS){
  produitEnregistreLS.push(productAdded);
  localStorage.setItem("product", JSON.stringify(produitEnregistreLS));
  console.log(produitEnregistreLS);
  
}
//s'il n'y pas de produits déjà enregistrés en LS
else  {
  // ajouter le code pour faire que si le produit a ajouter n'a pas déja était ajouté alors on execute ce qu'il y a dans else : 
produitEnregistreLS = [];
produitEnregistreLS.push(productAdded);
//creation de la clef
localStorage.setItem("product", JSON.stringify(produitEnregistreLS));

console.log(produitEnregistreLS);
}

}
});




