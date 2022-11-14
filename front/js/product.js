let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)


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
  let itemImg= document.querySelector(".item__img");
  let itemTitle= document.querySelector("#title");
  let itemPrice= document.querySelector("#price");
  let itemDescription= document.querySelector("#description");
  let colorOption = document.querySelector("#colors");

  //creating the img element 
  let imgOneProduct = document.createElement('img');
  imgOneProduct.src = listProduct.imageUrl ;
  imgOneProduct.alt = listProduct.altTxt ;
  itemImg.appendChild(imgOneProduct);

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

