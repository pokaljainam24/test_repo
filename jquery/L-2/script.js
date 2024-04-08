$(document).ready(function () {
    // $("#img1").hide();
  
    $("#on").on("click", function () {
      $("#img1").show();
      $(".container").hide();
      $("body").css("background-color", "#FDE26E");
      $(this).css("background-color", "#FDE26E");
    });
  
    $("#off").on("click", function () {
      $("#img1").hide();
      $(".container").show();
      $("body").css("background-color", "black");
    });
  });