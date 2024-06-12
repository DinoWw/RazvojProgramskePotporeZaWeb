


// amount positive or negative valid
function updateHeaderCartCount(amount){
    const countElement = document.getElementById("header_cart_count");

    countElement.innerHTML = parseInt(countElement.innerHTML) + amount;

}

updateHeaderCartCount(0);