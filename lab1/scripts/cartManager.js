
const data = require("../data/mydata");



function getCart(session){
    if(session.cart == undefined){
        session.cart = {};
    }
    return session.cart;
}

function ensureSessionCartItem(session, id){
    const cart = getCart(session);
    if(cart[id] == undefined){
        cart[id] = 0;
    }
}

function accountCategory(category, cart){

    // || data.categories[0] is redundant but doesn't hurt
    let categoryAccounted = data.categories[category];
    if( categoryAccounted == undefined){
        category = data.categories[0].name;
        categoryAccounted = data.categories[0];
    }


    for(const [index, product] of categoryAccounted.products.entries()){
        product.count = cart[`${categoryAccounted.name}_${index}`] | 0;
        console.log(`${category}_${index}`)
    }
    return categoryAccounted;

}

module.exports = {getCart, ensureSessionCartItem, accountCategory}

