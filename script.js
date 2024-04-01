$("p").hide();

$("#jainam").hide();

$("#show").on("click",()=>{
    $("p").show();
    $("p").css("background-color", "lightblue");
    $("p").hide().fadeIn("slow");
});

$("#hide").on("click",()=>{
    $("p").hide();
    $("p").show().fadeOut("slow");
});

$("#tuch-in").on("click",()=>{
    $("#jainam").fadeIn(2000);
});

$("#tuch-out").on("click",()=>{
    $("#jainam").fadeOut("slow");
});

$(document).ready(()=>{

    $("#show").on("click",()=>{
        $("p").show();
    });

    
    $("#show").on("dblclick",()=>{
        $("p").hide();
    });

});
