//current date to display under the header
var rows = $(".row");
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);
//hour format taken from the display tab in docs
var Hour = moment().format('H');
//save information on click to local storage on button click
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".textarea").val();
    var time = $(this).parent().attr("hour");
    localStorage.setItem(time, text);
});
//function for initializing the rows based on the time
function initialize() {
    rows.each(function () {
        var row = $(this);
        //convert hour string into hour number
        var rowhour = parseInt(row.attr("hour"));
        //sets hour block to future (green)
        if (rowhour == Hour) {
            row.addClass("present").removeClass("past future");
        }
        //sets hour block to present (red)
        if (rowhour < Hour) {
            row.addClass("past").removeClass("present future");
        }
        //sets hour block to past (gray)
        if (rowhour > Hour) {
            row.addClass("future").removeClass("past present");
        }
        //grab the todo from localstorage
        row.children(".textarea").val(localStorage.getItem(rowhour));
    });
}
initialize();