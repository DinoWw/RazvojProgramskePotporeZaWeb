function fillCart(){
    const nazivTemplate = document.getElementById("naziv_proizvoda_template");
    const kolicinaTemplate = document.getElementById("kolicina_proizvoda_template");
    const nazivHome = document.getElementById("naziv_list")
    const kolicinaHome = document.getElementById("kolicina_list")

/*
    localStorage.cart = JSON.stringify(
        {
            "Meso_Juneći ramstek 1kg": 2
        }
    )*/
    // localStorage za cookie

    cart = JSON.parse(localStorage.cart);
    console.log(cart)
    for(const naziv in cart){
            
        let newNaziv = nazivTemplate.content.cloneNode(true);
        let newKolicina = kolicinaTemplate.content.cloneNode(true);
        newNaziv.querySelector(".naziv_proizvoda").innerHTML = naziv.split('_')[1];
        
        const count = newKolicina.querySelector(".kolicina_proizvoda").querySelector(".item_count");
        count.innerHTML = cart[naziv];

        newKolicina.querySelector(".minus").addEventListener("click", (e) => {
            decrementCount(count, naziv)
        })
        newKolicina.querySelector(".plus").addEventListener("click", (e) => {
            incrementCount(count, naziv)
        })



        nazivHome.appendChild(newNaziv);   
        kolicinaHome.appendChild(newKolicina);       
    }



}



fillCart();