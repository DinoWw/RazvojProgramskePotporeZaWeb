const express = require("express");
const router = express.Router();

const {getCart, ensureSessionCartItem} = require("../scripts/cartManager");
const data = require("../data/mydata");


router.get('/', (req, res, next) => {
    const cart = getCart(req.session);

    const namedCart = {};
    console.log(cart)
    for(const item in cart){
        console.log(item);
        const itemSplit = item.split("_");
        console.log(itemSplit)
        namedCart[item] = {
            "count": cart[item], 
            "name": data.categories[itemSplit[0]].products[itemSplit[1]].name
        };
    }


    res.render("cart", {
        "cart": namedCart,
        "cart_item_count": Object.values(cart).reduce((sum, el) => sum+el, 0)
    });
});

router.post('/add/:id', (req, res, next) => {
    ensureSessionCartItem(req.session, req.params.id);
    console.log(req.params.id)
    req.session.cart[req.params.id] ++;

    res.sendStatus(200);
});

router.post('/remove/:id', (req, res, next) => {
    ensureSessionCartItem(req.session, req.params.id);
    (-- req.session.cart[req.params.id]) >= 0 ? true : (++ req.session.cart[req.params.id]);

    res.sendStatus(200);
});

router.get('/getAll', (req, res, next) => {
    const cart = getCart(req.session);
    res.send(JSON.stringify(cart));
});







module.exports = router;