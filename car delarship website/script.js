$(document).ready(function() {

    $('#datesForm').submit(function(event) {
        event.preventDefault();
    });


    $('#datesForm').on('submit', function() {
        var selectedDates = [];

        $('input[name="date"]:checked').each(function() {
            selectedDates.push($(this).val());
        });


        
        $('input[name="date"]:checked').each(function() {
            selectedDates.push($(this).val());
        });
    

        $('#selectedDates').empty();
        if (selectedDates.length > 0) {
            $('#selectedDates').append('Date Selected');
            selectedDates.forEach(function(date) {
                $('#selectedDates').append('<p>' + date - '</p>');
            });
        } else {
            $('#selectedDates').append('<p>No dates selected.</p>');
        }
    });


});


$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
