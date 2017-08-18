//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("clicked");
});
//click on X to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Write in input and pressing enter makes a new to do
$("input[type=text]").on("keypress", function(event){
    if(event.which === 13){
        //storing new todo from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to <ul>
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + " " + todoText +"</li>");
    }
});

//fade in and out plus simbol
$(".fa-plus").on("click", function(){
    $("input[type=text]").fadeToggle();
});