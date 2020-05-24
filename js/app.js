//Data to be used in app , lAter could be fetched using AJax , I prefer Async Await fetch Call.

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


let itemData = data.items;


let grid = document.querySelector('[grid-data]');

const modalDom = document.querySelector('.modalBg');
const modalHeaderDom = document.querySelector('.modalHeader');
const modalbodyDom = document.querySelector('.modalbody');


let asc = false;





const submit = document.getElementById("submit");
const search = document.getElementById("search");
submit.addEventListener('submit', searchHandler);
let cartCount = 0;
const cartNum = document.getElementById('cart-count');
cartNum.innerHTML = cartCount;

let sortButton = document.querySelector('[sort]');
sortButton.addEventListener('click', modalGenerator);

let filterButton = document.querySelector('[filter]');
filterButton.addEventListener('click', modalGenerator);

function Countupdater() {
        let cData = localStorage.getItem("CartItems");
        let cDataArray = JSON.parse(cData);
        let cartCount = cDataArray.length;
        console.log(cartCount)
        cartNum.innerHTML = cartCount;

}



function contentGenerator(itemData) {

        itemData.forEach((item, index) => {
                let element = document.createElement("div");
                element.classList.add('item');
                let img = document.createElement("img");
                img.src = item.image;

                let itemName = document.createElement('div');
                itemName.classList.add('item-name');
                itemName.innerHTML = item.name;
                let itemdes = document.createElement('div');
                itemdes.classList.add('item-description');
                let offerPrice = document.createElement('span');

                offerPrice.classList.add('offer-price');
                offerPrice.innerHTML = "&#8377;" + item.price.actual;
                let price = document.createElement('span');
                price.classList.add('price');
                price.innerHTML = item.price.display;
                let offer = document.createElement('span');
                offer.classList.add('offer');
                offer.innerHTML = item.discount + " % OFF";
                itemdes.appendChild(offerPrice);
                itemdes.appendChild(price);
                itemdes.appendChild(offer);
                let button = document.createElement('button');
                button.classList.add('add-button');
                button.innerHTML = "Add To Cart";
                element.appendChild(img);
                element.appendChild(itemName);
                element.appendChild(itemdes);
                element.appendChild(button);
                grid.appendChild(element);

        })

}

contentGenerator(itemData);


/**
 * Show  Search Box upon click function 
 */
function showSearch() {
        document.getElementById('submit').style.display = "block";
}


/**
 * Search Functionality
 */
function searchHandler(e) {
        e.preventDefault();
        let target = search.value.toLowerCase();
        let resultArr = [];
        let result = itemData.find(value => value.name.toLowerCase() === target);
        resultArr.push(result);
        while (grid.firstChild) {
                grid.removeChild(grid.firstChild);
        };
        contentGenerator(resultArr);

}


/**
 * Modal Generator
 */

function modalGenerator(event) {
        const modalbgdom = document.querySelector('.modalBg')
        const modalheaderdom = document.querySelector('.modalHeader');
        const modalbodydom = document.querySelector('.modalbody');
        console.log(modalbodydom.firstChild);
        while (modalheaderdom.firstChild) {
                modalheaderdom.removeChild(modalheaderdom.firstChild);

        }

        while (modalbodydom.firstChild !== null) {
                modalbodydom.removeChild(modalbodydom.firstChild);
        }


        modalbgdom.style.display = 'flex';


        if (event.target.parentElement.classList.contains('sort')) {
                modalHeaderDom.innerHTML = "Sort Options";
                modalbodyDom.insertAdjacentHTML("afterbegin", `
                 <input type="radio" name="sorting" id="asc" value="asc">
                 <label for ="asc">Price--High Low</label>
                 <br/>
                 <input type="radio" name="sorting" id="dec" value="dec">
                 <label for ="dec">Price--Low High</label>
                 <br/>
                 <input type="radio" name="sorting" id="discount" value="discount">
                 <label for ="discount">Discount</label>
                 `)
        }
        else {
                modalHeaderDom.innerHTML = "Filter Options";
                modalbodyDom.insertAdjacentHTML("afterbegin", `
                <input type="range" min="1000" max="100000" value ="100000" class="slider" id="slider">
                
                `)
        }


}
/**
 * Sort Functionality
 */

function sortHandler(value, type) {

        if (type === "price") {
                let sortedData = itemData.sort((a, b) => {

                        if (value === asc) { return b.price.actual - a.price.actual }
                        else {
                                return a.price.actual - b.price.actual
                        }


                }
                );

                while (grid.firstChild) {
                        grid.removeChild(grid.firstChild);

                };
                contentGenerator(sortedData);
        }

        let sortedData = itemData.sort((a, b) => {

                return b.discount - a.discount;



        }
        );
        while (grid.firstChild) {
                grid.removeChild(grid.firstChild);

        };
        contentGenerator(sortedData);



}



/**
 * Filter Functionality
 */


const applyDom = document.querySelector('.apply');
applyDom.addEventListener("click", applyHandler)




/**
 * ApplyHandler
 */

function applyHandler() {
        const ascendingDom = document.getElementById('asc');
        const descendingDom = document.getElementById('dec');
        const discountDom = document.getElementById('discount');

        if (ascendingDom.checked) {
                sortHandler(asc, "price");
        }
        else if (descendingDom.checked) {
                sortHandler(dec, "price");
        } else if (discountDom.checked) {
                sortHandler(asc, "offer");
        }

        else {
                console.log("Nothing is checked");
        }
        closeModal();
}



/**
* Cancel Handler.
* This function is a callback event function which closes the model
*/
function closeModal() {
        let modalbgdom = document.querySelector('.modalBg');
        modalbgdom.style.display = 'none';
}

const cancelDom = document.querySelector('.cancel');
cancelDom.addEventListener("click", closeModal);



/**
 * Add to cart functionality.
 * 
 */

let cartItems = [];
let cartbutton = document.getElementsByClassName("add-button");
for (let i = 0; i < cartbutton.length; i++) {
        let button = cartbutton[i];
        button.addEventListener('click', function (event) {
                const productDOM = event.target.parentElement;

                const cartProduct = {
                        image: productDOM.querySelector('img').getAttribute('src'),
                        name: productDOM.querySelector('.item-name').innerHTML,
                        offerPrice: productDOM.querySelector('.offer-price').innerHTML,
                        price: productDOM.querySelector('.price').innerHTML,
                        offer: productDOM.querySelector('.offer').innerHTML,
                        quantity: 1
                }
                cartItems.push(cartProduct);
                localStorage.setItem("CartItems", JSON.stringify(cartItems));
                Countupdater();
                button.innerHTML = "In cart";
                button.disabled = true;

        })

}

