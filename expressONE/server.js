let express = require("express");

//debuging libray
let morgan = require("morgan");

let app = express();

//init server
app.listen(3000, () => {
    console.log(`Servidor en el puerto 3000`)
})

//So the app can interpret JSON FORMAT
app.use(express.json())

//use the morgan library
app.use(morgan('dev'))
/*
//middleware
function logger ( req,res,next){
    console.log("Request recieved");
    next();
}

app.use(logger)
*/

//Request / Response 
app.get("/", (req,res) => {
    res.send("Bienvenido")

})

app.get("/registro", (req,res) => {
    res.send("Registro de Usuario")

})

app.post("/registro", (req,res) => {
    console.log(req.body)
    res.send("Se registro al usuario")

})

app.post("/about", (req,res) => {
    res.send("POST REQUEST")

})

app.put("/contact", (req,res) => {
    res.send("PUT REQUEST")

})

app.delete("/delete/:userID", (req,res) => {
    console.log(req.body)
    console.log(req.params)
    let id = req.params.userID;
    console.log(`Buscando usuario:` + id)
    res.send("DELETE REQUEST")

})

