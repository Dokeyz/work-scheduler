//current date to display under the header
var $colorBlocks = $(".row");
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);
//hour format taken from the display tab in docs
var Hour = moment().format('H');
//save information on click to local storage
$(".saveBtn").on("click"), function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
}
//function for assigning colors based on the time
function Colors(){
    $colorBlocks.each(function(){
      var $colorBlock = $(this);
      //convert hour string into hour number
      var rowcolor = parseInt($colorBlock.attr("data-hour"));

      if (rowcolor == Hour) {
        $colorBlock.addClass("present").removeClass("past future");
      }
      if (rowcolor < Hour) {
        $colorBlock.addClass("past").removeClass("present future");
      }
      if (rowcolor > Hour) {
        $colorBlock.addClass("future").removeClass("past present");
      }
    });
}

Colors();
