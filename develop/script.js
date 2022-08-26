var CurrentDayEl = moment().format('LL');
$("#currentDay").text(CurrentDayEl);

$('.container').on('click', '.saveBtn', function () {
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
// for (i = 9; i <= 17, i++) {
    
    var timeCheck = moment().hour();
console.log(timecheck);

// $('.container').each(function() {
//     var timeCheck = moment().hour();
//     for (var i = 9; i <= 17, i++) {
//     if (i < timeCheck) {
//         $(this).children.addclass(.past)
//     }
//     if (i > timecheck) {
//         $(this).children.addclass(.future)
//     }
//     else {
//         $(this).children.addclass(.present)
//     }
// }});
