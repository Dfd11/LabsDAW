$(document).ready(function() {

    let temas = [ "Coches","Doge","Stonks","Its all coming together","Halo Infinite","Pathetic"];

    //look for the div where buttons are located
    let buttons = $("#animal-buttons");

    //generate Buttons
    genButtons()

    //watchs for a click on a button
    buttons.on("click","button", (e) => {
        realizarBusqueda(e.target.innerText);
    })

    //watch for a click on any on the showed images
    list = $("#animals");
    list.on("click","img", (e) => {
        let img = $(e.target)

        //toogle between the fixed and the moving image
        if (img.attr("data-state") == "still"){
            img.attr("src", img.attr("data-mov"))
            img.attr("data-state","moving")
        }else {
            img.attr("src", img.attr("data-fixed"))
            img.attr("data-state","still")    
        }
    })

    //check for the input of a new button as well it looks for the new button automaticaly
    let submit = $("#add-animal");
    submit.on("click", (e) => {

        //checks the input box
        let inputBox = $("#animal-input")
        e.preventDefault()

        let newVal = inputBox[0].value
        if (newVal != ""){
            temas.push(newVal)
            genButtons()
            realizarBusqueda(newVal)
        }
    })
    function genButtons(){
        buttons[0].innerHTML = ""
        temas.forEach(element => {
            
            let button = $("<button>");
            button.text(element);
            buttons.append(button);
        });
    }

    //does the search for a specific topic
    function realizarBusqueda(element){
        //create the configuration objetc
        let petition = {
            //we need the https protocol, the url has the "q" element  , the "api_key", and the limit of images
            // we add a success function
            // and an error function
            url: `https://api.giphy.com/v1/gifs/search?q=${element}&api_key=kVAuINW4JNGHQdKdI3wlkfOWiI4LLBAl&limit=10`,

            success: function(res){
                let data = res.data;
                let list = $("#animals");
                list[0].innerHTML = ''
                data.forEach((e) => {
                    let div = $("<div>")
                    div.append(`<p>${e.rating}<p/>`)
                    let img = $("<img/>")
    
                    img.attr("src",e.images.fixed_height_still.url)
                    img.attr("data-fixed",e.images.fixed_height_still.url)
                    img.attr("data-mov",e.images.fixed_height.url)
                    img.attr("data-state","still")
                    div.append(img)
                    list.append(div);
                })   
            },

            error: function() {
                console.log(`Error in the request
                I tried to search "${element}"`)
            }
    
        }
        //does the petition
        $.ajax(petition)
    }
});



