var CurrentDayEl = moment().format('LL');
$("#currentDay").text(CurrentDayEl);

$('.container').on('click', '.saveBtn', function () {
    var noteTime = $(this).parent().attr('data-id');
    var notesEl = $(this).prev().val();
    localStorage.setItem(noteTime, notesEl);
});

$('.notes').each(function () {
    var noteTime = $(this).parent().attr('data-id');
    var notesEl = localStorage.getItem(noteTime);
    $(this).text(notesEl);
});

// created a function to check against a moment time, then assign new color classes based on that information
function timeCurrent() {
    var timeCheck = moment().hour();
    $('.hour-row').each(function () {
        var scheduleTime = parseInt($(this).attr('data-id'));
        console.log(typeof(scheduleTime));
        console.log(typeof(timeCheck));
        if (scheduleTime < timeCheck) {
            console.log('1');
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (scheduleTime === timeCheck) {
            console.log('2');
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            console.log('3');
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};


timeCurrent();
