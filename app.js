const express = require("express");
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Definicion de routers 
const indexRouter = require('./src/routes/index');
const detailRouter = require('./src/routes/detail');
const cartRouter = require('./src/routes/cart');
const loginRouter = require('./src/routes/login');
const registerRouter = require('./src/routes/register');
const indexProducts  = require('./src/routes/products');

//uso de routers
app.get('/', indexRouter);
app.get('/index', indexRouter);
app.get('/detail', detailRouter);
app.get('/shoppingcart', cartRouter);
app.get('/users/login', loginRouter)
app.get('/users/register', registerRouter)
app.get('/products', indexProducts)

// Definicion de puerto y a la escucha
let port = 3000;

app.listen(port, ()=>{
    console.log('Servidor funcionando en puerto ' + port);
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