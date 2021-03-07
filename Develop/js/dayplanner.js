// define moment varibles used to show time
function displayTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#clock') .html(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime()
}); 

// onclick event to save user input to local storage
$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

// Getting individual childern and setting to parent
$("#9am").childern("input").val(localStorage.getItem("9am"));

$("#10am").childern("input").val(localStorage.getItem("10am"));

$("#11am").childern("input").val(localStorage.getItem("11am"));

$("#12pm").childern("input").val(localStorage.getItem("12pm"));

$("#1pm").childern("input").val(localStorage.getItem("1pm"));

$("#2pm").childern("input").val(localStorage.getItem("2pm"));

$("#3pm").childern("input").val(localStorage.getItem("3pm"));

$("#4pm").childern("input").val(localStorage.getItem("4pm"));

$("#5pm").childern("input").val(localStorage.getItem("5pm"));




