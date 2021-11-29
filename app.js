const express = require("express");
const path = require('path');
const { get } = require("http");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Definicion de routers 
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var detailRouter = require('./routes/detail');
var registerRouter = require('./routes/register');
var cartRouter = require('./routes/cart');

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/login', loginRouter);
app.use('/detail', detailRouter);
app.use('/register', registerRouter);
app.use('/shoppingcart', cartRouter);

app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});

module.exports = app;


/* Codigo Viejo

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/index", (req, res)=> {
    res.sendFile(__dirname + "/views/index.html")
});
app.get("/login", (req, res)=> {
    res.sendFile(__dirname + "/views/login.html")
});

app.get("/registro", (req, res)=> {
    res.sendFile(__dirname + "/views/registro.html")
});

app.get("/detalle", (req, res)=> {
    res.sendFile(__dirname + "/views/detalle.html")
});

app.get("/shoppingCart", (req, res)=> {
    res.sendFile(__dirname + "/views/shoppingcart.html")
});

app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});

*/