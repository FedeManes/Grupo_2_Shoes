const express = require("express");
const { get } = require("http");
const app = express();

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/index.html")
});


app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});

