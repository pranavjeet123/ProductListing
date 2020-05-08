//const grid container

let data = {
    "items": [
{
        "name": "Samsung Series 4",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 13999,
            "display": 22500
},
        "discount": 37
},
{
        "name": "Samsung Super 6",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 35999,
            "display": 66900
},
        "discount": 46
},
{
        "name": "Samsung The Frame",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 84999,
            "display": 133900
},
        "discount": 36
},
{
        "name": "Thomson B9 Pro",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 9999,
            "display": 16999
},
        "discount": 41
},
{
        "name": "LG Ultra HD",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 39990,
            "display": 79990
},
        "discount": 50
},
{
        "name": "Vu Ready LED TV",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 7999,
            "display": 17e3
},
        "discount": 52
},
{
        "name": "Koryo Android TV",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 55999,
            "display": 199990
},
        "discount": 71
},
{
        "name": "Micromax LED Smart",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
            "actual": 9999,
            "display": 27990
},
        "discount": 64
}
]
}


let itemData= data.items;

let grid =document.querySelector('[grid-data]');




function contentGenerator(itemData){

       itemData.forEach((item)=>{
                let element = document.createElement("div");
                element.classList.add('item');
                let img = document.createElement("img");
                img.src = item.image;
               
                let itemName = document.createElement('div');
                itemName.classList.add('item-name');
                itemName.innerHTML= item.name;
                let itemdes = document.createElement('div');
                itemdes.classList.add('item-description');
               let offerPrice= document.createElement('span');
               
               offerPrice.classList.add('offer-price');
               offerPrice.innerHTML= item.price.actual;
               let price= document.createElement('span');
               price.classList.add('price');
               price.innerHTML= item.price.display;
               let offer= document.createElement('span');
               offer.classList.add('offer');
               offer.innerHTML= item.discount+" % OFF";
                itemdes.appendChild(offerPrice);
                itemdes.appendChild(price);
                itemdes.appendChild(offer);
                 
                 element.appendChild(img);
                 element.appendChild(itemName);
                 element.appendChild(itemdes);
               grid.appendChild(element);
               
               })

}

contentGenerator(itemData);

function searchHandler(){
        console.log("Search Handler clicked!!!");
}