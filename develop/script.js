var CurrentDayEl = moment().format('LL');
console.log(CurrentDayEl);
$("#currentDay").text(CurrentDayEl);

$('.container').on('click', '.save', function () {
    var noteTime = $(this).parent().attr('data-id');
    var notesEl = $(this).prev().val();
    localStorage.setItem(noteTime, notesEl);
});

$('.notes').each(function() {
    var noteTime = $(this).parent().attr('data-id');
    var notesEl = localStorage.getItem(noteTime);
    $(this).text(notesEl);
});

//  write function that checks time agains moment() and changes the section colors accordingly