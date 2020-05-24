






let cartContainer = document.querySelector(".cartpage-container");




let Data = localStorage.getItem("CartItems");
//cART data is an array of items in localstorage present.

let cartData = JSON.parse(Data);

if (!cartData) {
    alert("ops no data");
}

cartData.forEach(value => {
    cartContainer.insertAdjacentHTML("beforeend", `
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

/**
 * A utility function to remove item from Localstorage
 * 
 */

function removeItemLS(name) {
    let newCartData = cartData.filter(cartItem => cartItem.name !== name);
    localStorage.setItem("CartItems", JSON.stringify(newCartData));
}



const removeBtnDom = document.querySelectorAll('.remove-btn');
removeBtnDom.forEach((eachBtn) => {
    eachBtn.addEventListener('click', (e) => {
        const productName = document.querySelector('.cart-itemName').innerHTML;

        const removeBtnparentDOM = event.target.parentElement.parentElement;
        removeBtnparentDOM.remove();
        //deleting an object based on productName and setting Loalstorage
        removeItemLS(productName);

    })
})


/**Decrement  Button functionality
 * It decrease the count of Product 
 * If product count reaches 0 Automatically the product will removed from the DOM.
 */
const decreaseBtnDom = document.querySelectorAll('[data-action = DECREASE_ITEM]');
decreaseBtnDom.forEach((eachBtn) => {
    eachBtn.addEventListener('click', (e) => {
        const decreaseBtnparentDOM = event.target.parentElement.parentElement.parentElement;

        let decrementQuantity = document.querySelector('.cart-quantity');
        decrementQuantity.innerHTML = parseInt(decrementQuantity.innerHTML) - 1;
        console.log(decrementQuantity.innerHTML);

        if (decrementQuantity.innerHTML < 1) {
            decrementQuantity.innerHTML = 0;
            decreaseBtnparentDOM.remove();
        }

    })
})

/**Increase Button functionality
 * It increses the count of Product 
 * 
 */
const increaseBtnDom = document.querySelectorAll('[data-action = INCREASE_ITEM]');
increaseBtnDom.forEach((eachBtn) => {
    eachBtn.addEventListener('click', (e) => {

        let incrementQuantityDom = document.querySelector('.cart-quantity');

        incrementQuantityDom.innerHTML = parseInt(incrementQuantityDom.innerHTML) + 1;


    })
})