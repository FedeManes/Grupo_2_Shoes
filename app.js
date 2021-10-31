const express = require("express");
const { get } = require("http");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/login", (req, res)=> {
    res.sendFile(__dirname + "/views/login.html")
});

app.get("/registro", (req, res)=> {
    res.sendFile(__dirname + "/views/registro.html")
});


app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});

