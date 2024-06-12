const express = require("express");
const router = express.Router();

const data = require("../data/mydata");
const {getCart, accountCategory} = require("../scripts/cartManager");



function getCategories(data) {
    return data.categories.map((c) => c.name);
}

const categoriesList = getCategories(data);

router.get('/', (req, res, next) => {
    if(req.query.category == undefined){
        req.query.category = 0;
    }

    const cart = getCart(req.session);

    const categoryAccounted = accountCategory(req.query.category, cart);
    categoryAccounted.index = req.query.category;

    const summedItemCount = Object.values(cart).reduce((sum, el) => sum+el, 0);

    res.render("home", {
        "category_titles": categoriesList,
        "category": categoryAccounted,
        "cart_item_count": summedItemCount,
        
    });
})

router.get('/getCategories', (req, res, next) => {
    res.send(JSON.stringify(categoriesList));
})

router.get('/getProducts/:id', (req, res, next) => {
    // TODO: send error if id invalid
    res.send(JSON.stringify(data.categories[req.params.id].products || data.categories[0].products));
})


module.exports = router;


