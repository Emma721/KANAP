
//recuperer l'order id du LS 
const orderId =  localStorage.getItem("orderId");
console.log ( `orderId : ${orderId}`)

//selectionner l'endroit 'html'
let afficheOrderId = document.querySelector("#orderId");
console.log(afficheOrderId);
//afficher l'info 
afficheOrderId.innerHTML = orderId;

//clear le local storage pour ne pas garder l'id et permettre de recommencer l'achat
localStorage.clear();