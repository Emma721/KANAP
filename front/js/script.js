//get the API to display in the console//


fetch("http://localhost:3000/api/products")
   .then(function (res) {
    if (res.ok) {
    return res.json();  
 
  }})
  .then((res) => {
    console.log(res);
    listProducts = res;
    afficheProduits(listProducts); 
    
  })
  .catch((err)=> console.log(err));



function afficheProduits (listProducts) {
  // tu crées + enregistres le lien entre l'endroit dans ton doc html en déclarant cette variable
  items = document.querySelector("#items"); 

 
  //let link;
  for (let i=0; i <listProducts.length ; i ++) {
    //CREATING THE ELEMENTS AS CHILDREN 
// create the element:
let linkCard = document.createElement('a') ;
linkCard.href = "./product.html?id=" + listProducts[i]._id;
//attatch the child to the parent :
items.appendChild (linkCard);

let article = document.createElement ('article');
linkCard.appendChild(article);


let imageCard = document.createElement('img');
imageCard.src = listProducts[i].imageUrl; 
imageCard.alt = listProducts[i].altTxt ;
article.appendChild (imageCard);


//elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément


let titleCard = document.createElement('h3');
titleCard.textContent = listProducts[i].name;
titleCard.classList.add("productName");
article.appendChild (titleCard);

let descriptionCard = document.createElement('p');
descriptionCard.textContent = listProducts[i].description;
descriptionCard.classList.add ('productDescription');
article.appendChild (descriptionCard);

}
  
}



  