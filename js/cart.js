






let cartContainer = document.querySelector(".cartpage-container");




let Data= localStorage.getItem("CartItems");
//cART data is an array of items in localstorage present.

let cartData = JSON.parse(Data);

if(!cartData){
    alert("ops no data");
}

cartData.forEach(value=>{
    cartContainer.insertAdjacentHTML("beforeend",`
<div class="cart-items">
<img src ="${value.image}"  alt ="${value.name}">
<div class="cart-actions">
 <div class="cart-itemName">${value.name}</div>
<div class="cart-itemInfo">
 <div class="cart-offerPrice">&#8377;${value.offerPrice}</div>
 <div class="cart-price">${value.price}</div>
 <div class="cart-offer">${value.offer}</div>
 </div>
 <div class ="inc-dec-actions">
  <button class="cart-dec" data-action="DECREASE_ITEM">&minus;</button>
 <div class ="cart-quantity">${value.quantity}</div>
 <button class="cart-inc" data-action="INCREASE_ITEM">&plus;</button>
 </div>

 <button class="remove-btn" data-action="REMOVE_ITEM">REMOVE</button>
</div>
</div>
`);
})

const removeBtnDom = document.querySelectorAll ('.remove-btn');
removeBtnDom.forEach((eachBtn)=>{
    eachBtn.addEventListener('click',(e)=>{
        const productName =document.querySelector('.cart-itemName').innerHTML;

        const removeBtnparentDOM =event.target.parentElement.parentElement;
        console.log(productName);
        removeBtnparentDOM.remove();
        let index = cartData.indexOf(productName);
        console.log(index);
       
    })
})

const decreaseBtnDom = document.querySelectorAll ('[data-action = DECREASE_ITEM]');
decreaseBtnDom.forEach((eachBtn)=>{
    eachBtn.addEventListener('click',(e)=>{
        const decreaseBtnparentDOM =event.target.parentElement.parentElement.parentElement;
        
        let decrementQuantity = document.querySelector('.cart-quantity');
      console.log(decrementQuantity.innerHTML);
         if( decrementQuantity.innerHTML <= 1 ){
            decreaseBtnparentDOM.remove();
         }
         decrementQuantity.innerHTML=decrementQuantity.innerHTML-1;
    })
})


const increaseBtnDom = document.querySelectorAll ('[data-action = INCREASE_ITEM]');
increaseBtnDom.forEach((eachBtn)=>{
    eachBtn.addEventListener('click',(e)=>{
        
        let incrementQuantityDom = document.querySelector('.cart-quantity');
      
        incrementQuantityDom.innerHTML  =parseInt(incrementQuantityDom.innerHTML) + 1;
        
      
    })
})