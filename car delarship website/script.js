$(document).ready(function() {

    $('#datesForm').submit(function(event) {
        event.preventDefault();
    });


    $('#datesForm').on('submit', function() {
        var selectedDates = [];
        
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
