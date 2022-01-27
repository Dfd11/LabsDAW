//Load libraries
let express = require("express");
let path = require("path")

//DB
let resTables = []
let waitlist = []
//Init the server
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname,"tables.html"));
})

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname,"reserve.html"));
})

app.get("/api/tables", function(req,res){
    res.json(resTables)
})

app.get("/api/waitlist", function(req,res){
    res.json(waitlist)
})

app.post("/api/tables",function(req,res){
    let newRes = req.body;
    let answer = [{"state":"test"},newRes]
    if (resTables.length < 5){

        resTables.push(newRes);
        answer[0].state = "list"
        answer[0].length = resTables.length
    }else {

        waitlist.push(newRes);
        answer[0].state = "waitlist"
        answer[0].length = resTables.length
    }

    res.json(answer)
})

app.post("/api/clear",function(req,res){
    resTables=[]
    waitlist=[]
    res.end()
})
