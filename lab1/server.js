const express = require("express");
const app = express();
var path = require("path");
const cookieParser = require('cookie-parser')

const session = require('./sessions/session')

const homeRouter = require("./routes/home.routes");
const cartRouter = require("./routes/cart.routes");



//body content parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cookie-parsing middleware
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, "public")));

// sets req.session
app.use(session.sessionManager)

app.use('/', homeRouter);
app.use('/cart', cartRouter);

/*
app.get("/", (req, res) => {
    res.send("helo wo");
});

*/





app.listen(3000);