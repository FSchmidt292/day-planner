
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A")); 

//get the hour from moment so we can compare it to the hours on our HTML.

var now = moment();
var nowInt = now.hour();
var nowHour = "hour"+JSON.stringify(now.hour());
console.log(nowHour);
console.log(nowInt);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".task").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, text)
});

$("#hour8 .task").val(localStorage.getItem("hour8"));
$("#hour9 .task").val(localStorage.getItem("hour9"));
$("#hour10 .task").val(localStorage.getItem("hour10"));
$("#hour11 .task").val(localStorage.getItem("hour11"));
$("#hour12 .task").val(localStorage.getItem("hour12"));
$("#hour13 .task").val(localStorage.getItem("hour13"));
$("#hour14 .task").val(localStorage.getItem("hour14"));
$("#hour15 .task").val(localStorage.getItem("hour15"));
$("#hour16 .task").val(localStorage.getItem("hour16"));
$("#hour17 .task").val(localStorage.getItem("hour17"));


//loop through the hours on our HTML to assign the color coding for past, present, and future.

for (i = 0; i < 23; i++) {
    if (i < nowInt) {
        $("#hour"+i).addClass("past");
    }else if (i > nowInt) {
        $("#hour"+i).addClass("future");
    }else{
        console.log(nowHour);
        $("#"+nowHour).addClass("present");
    }

};