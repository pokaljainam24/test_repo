$(document).ready(function(){
    $("#click").on("click",function(){
      $("p").hide();
    });

    $("#click").on("dblclick",function(){
        $("p").css("background-color", "red");
        $("p").show();
      });

      $(".mydiv").on("mouseleave",function(){
        alert("Bye! You now leave MYDIV!");
      });

      $(".mydiv-2").on("mouseenter",function(){
        alert("Hii! You entered MYDIV!");
      });

  });

