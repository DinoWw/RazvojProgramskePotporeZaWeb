//document.body.onload = cardImport;



function cardManage(){
    const cardHome = document.querySelector(".product_container")

    for(let card of cardHome.children){
            

        const cartIco = card.querySelector(".cart_ico_container").querySelector(".cart_ico");

        cartIco.addEventListener("click", (e)=> {

            const countElem = e.target.parentElement.parentElement.querySelector(".product_count");

            incrementCount(countElem, e.target.getAttribute("product_code"));
        })

        const countDisplay = card.querySelector(".product_count");

    }

}

cardManage();