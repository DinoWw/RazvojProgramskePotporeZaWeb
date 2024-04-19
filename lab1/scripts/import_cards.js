//document.body.onload = cardImport;



function cardImport(category_name = data.categories[0].name){
    const cardTemplate = document.getElementById("product_card_template");
    const cardHome = document.querySelector(".product_container")

    // localStorage za cookie
    let categoryIndex = data.categories.findIndex((el) => el.name == category_name);

    cardHome.replaceChildren();
    for(let product of data.categories[categoryIndex].products){
            
        let clone = cardTemplate.content.cloneNode(true);

        let image = clone.querySelector("img");
        image.src = "images/logo.png";
        clone.querySelector(".product_name").innerHTML = product.name;
        clone.querySelector(".product_category").innerHTML = data.categories[categoryIndex].name;

        const cartIco = clone.querySelector(".cart_ico_container").querySelector(".cart_ico");
        const product_code = `${data.categories[categoryIndex].name}_${product.name}`

        cartIco.product_code = product_code;

        cartIco.addEventListener("click", (e)=> {
            incrementCount(null, e.target.product_code);

            const count = JSON.parse(localStorage.cart)[product_code];
            
            e.target.parentElement.parentElement.querySelector(".product_count").innerHTML = count;

        })

        const countDisplay = clone.querySelector(".product_count");

        const count = JSON.parse(localStorage.cart)[product_code];
        countDisplay.innerHTML = count != 0 && count != undefined ? count : '';
        //clone.getElementByClass()

        cardHome.appendChild(clone);       
    }

    // i title promijenit

    const title = document.getElementById("kategorija");
    title.innerHTML = category_name;


}

cardImport();