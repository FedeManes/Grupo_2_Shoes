const express = require("express");
const { get } = require("http");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/home.html")
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

