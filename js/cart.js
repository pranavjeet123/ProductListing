let cartContainer = document.querySelector(".cart-container");




let Data= localStorage.getItem("CartItems");
let cartData = JSON.parse(Data);
cartData.forEach(value=>{
    console.log(value);
    cartContainer.insertAdjacentHTML("beforeend",`
<div class="cart-items">
<img src ="${value.image}"  alt ="${value.name}">
<div class="cart-actions">
 <div class="cart-itemName">${value.offerPrice}</div>
 <div class="cart-itemPrice">${value.price}</div>
 <div class="inc-dec">Increment decrement here</div>
 <button>REMOVE</button>
</div>
</div>
`);
})

