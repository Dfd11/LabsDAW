//Load libraries
let express = require("express");
let path = require("path")

//DB
let resTables = []
let waitlist = []
//Init the server
let app = express();
let PORT = process.env.PORT || 3000;

//To be able to read json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//Home page
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

//Tables page
app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname,"tables.html"));
})

//Reserve page
app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname,"reserve.html"));
})

//Get list of tables
app.get("/api/tables", function(req,res){
    res.json(resTables)
})

//Get list of waitlist
app.get("/api/waitlist", function(req,res){
    res.json(waitlist)
})


//Submit a new reservation
app.post("/api/tables",function(req,res){
    let newRes = req.body;
    let answer = [{"state":"test"},newRes]

    //check for size of reserved tables
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

//Clear the lists
app.post("/api/clear",function(req,res){
    resTables=[]
    waitlist=[]
    res.end()
})
