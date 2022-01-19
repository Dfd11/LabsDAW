let lista = $(".Lista")
let newText = $("#newText");

$(".agregar").on("click",function(event){
    event.preventDefault()

    let div = $("<div>");
    let li = $("<li>");
    let p = $("<p>");
    let chk = $("<button>");
    let del = $("<button>");
    chk.attr("class","check");
    del.attr("class","delete");
    chk.text("Check");
    del.text("Delete");
    p.text(newText[0].value);
    
    li.append(p);
    li.append(chk);
    li.append(del);
    
    div.append(li);
    lista.append(div);
})

lista.on("click",".check",function(){
    $(this).parent().toggleClass("chec");
})

lista.on("click",".delete",function(){
    $(this).parent().parent().remove();
})