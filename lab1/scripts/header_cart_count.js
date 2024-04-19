

function updateHeaderCartCount(){
    const countElement = document.getElementById("header_cart_count");

    const count = Object.values(JSON.parse(localStorage.cart)).reduce((sum, val) => sum + val, 0);

    countElement.innerHTML = (count == 0 || count == undefined) ? '' : count;

}

updateHeaderCartCount();