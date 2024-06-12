
function incrementCount(countElement, kodProizvoda){
    console.log(kodProizvoda)
    fetch(`/cart/add/${kodProizvoda}`, {method: "POST", "content-type": "application/x-www-form-urlencoded"}).then(console.log);
    changeCount(countElement, kodProizvoda, 1);
}
function decrementCount(countElement, kodProizvoda){
    fetch(`/cart/remove/${kodProizvoda}`, {method: "POST", "content-type": "application/x-www-form-urlencoded"}).then(console.log);
    changeCount(countElement, kodProizvoda, -1);
}

function changeCount(countElement, kodProizvoda, amount){

    let newCount = parseInt(countElement.innerHTML) + amount;
    newCount = newCount > 0 ? newCount : 0;

    if(countElement != null) countElement.innerHTML = newCount;

    
    updateHeaderCartCount(amount);
}
