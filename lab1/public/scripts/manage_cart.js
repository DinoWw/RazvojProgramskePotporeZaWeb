function initCart(){

    const kolicinaHome = document.getElementById("kolicina_list")

    for(const elem of kolicinaHome.children){
        
        const count = elem.querySelector(".item_count");

        const itemId = elem.id.slice(elem.id.indexOf('_')+1);

        elem.querySelector(".minus").addEventListener("click", (e) => {
            decrementCount(count, itemId);
        });
        elem.querySelector(".plus").addEventListener("click", (e) => {
            incrementCount(count, itemId);
        });
        

    }


}



initCart();