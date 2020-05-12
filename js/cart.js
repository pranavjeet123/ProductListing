let Data= localStorage.getItem("CartItems");
let cartData = JSON.parse(Data);
cartData.forEach(value=>{
    console.log(value);
})