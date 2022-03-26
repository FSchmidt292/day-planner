
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm A")); 

//get the hour from moment so we can compare it to the hours on our HTML.

var now = moment();
var nowInt = now.hour();
var nowHour = "hour"+JSON.stringify(now.hour());
console.log(nowHour);
console.log(nowInt);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    //save to localStorage
    localStorage.setItem(timeBlock, text)
});
//if ()

//loop through the hours on our HTML to assign the color coding for past, present, and future.

for (i = 8; i < 17; i++) {
    if (i < nowInt) {
        $(".hour"+JSON.stringify(i)).addClass("past")
    }else if (i > nowInt) {
        $(".hour"+JSON.stringify(i)).addClass("future")
    }else{
        $(nowHour).addClass("present")
    }

};