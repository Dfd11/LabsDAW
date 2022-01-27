var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');


// Data
var icecreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1},
    { name: "greentea", price: 5, awesomeness: 7},
    { name: "jawbreakers", price: 6, awesomeness: 2 },
    { name: "vanilla", price: 10, awesomeness: 3 }
  ];


app.listen(port , () =>{
console.log(`Server running on port ${port}`)
})