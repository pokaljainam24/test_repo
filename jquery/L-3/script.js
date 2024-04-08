$(document).ready(function() {
    var slideIndex = 0;
    showSlide(slideIndex);
  
    $('.prev').click(function() {
      slideIndex -= 1;
      showSlide(slideIndex);
    });
  
    $('.next').click(function() {
      slideIndex += 1;
      showSlide(slideIndex);
    });
  
    function showSlide(index) {
      var slides = $('.slide');
      if (index >= slides.length) { slideIndex = 0; }
      if (index < 0) { slideIndex = slides.length - 1; }
      slides.hide();
      slides.eq(slideIndex).show();
    }
  });
  