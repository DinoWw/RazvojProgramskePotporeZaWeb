
function incrementCount(countElement, kodProizvoda){
    changeCount(countElement, kodProizvoda, 1);
}
function decrementCount(countElement, kodProizvoda){
    changeCount(countElement, kodProizvoda, -1);
}

function changeCount(countElement, kodProizvoda, amount){
    cart = JSON.parse(localStorage.cart)
    if(cart[kodProizvoda] == undefined) cart[kodProizvoda] = 0;

    newCount = cart[kodProizvoda] + amount;
    newCount = newCount > 0 ? newCount : 0;

    cart[kodProizvoda] = newCount;

    if(countElement != null) countElement.innerHTML = newCount;
    localStorage.cart = JSON.stringify(cart);

    
    updateHeaderCartCount();
}
