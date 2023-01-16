var saveButton = $(".saveButton");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var currentHour = $(".currentHour");
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
console.log(localStorage);

//prevents code from running until elements are rendered
$(function () { 
  saveButton.on("click", function (){
    console.log($(this).siblings("textarea").val());

    var calendar = JSON.parse(localStorage.getItem("calendar")) || {};

    var hour = $(this).parent().attr("id");
    var textMessage = $(this).siblings("textarea").val();

    calendar[hour] = textMessage;
    localStorage.setItem("calendar", JSON.stringify).val(); 

  })
  //applies current hour elements to each time block based on current hour
  let currentHour = dayjs().hour();
  function checkHour(hour) {
    if (dayjs().isBefore(dayjs('currentHour'))){
      return 'past';
    } else if (dayjs().isSame(dayjs('currentHour'))){
      return 'present';
    } else {
      return 'future';
    }
  }


})
  


//saves calendar inputs to localstorage and makes them persist after browser refresh
function saveFunction(hour){
  var hourtxt = $('#hour' + hour.toString() + 'txt').val();
  localStorage.setItem(hour.toString(), hourtxt);
}

window.onload = function(){
  var hour9text = localStorage.getItem(9);
  document.getElementById('hour9txt').value=hour9text;
  var hour10text = localStorage.getItem(10);
  document.getElementById('hour10txt').value=hour10text;
  var hour11text = localStorage.getItem(11);
  document.getElementById('hour11txt').value=hour11text;
  var hour12text = localStorage.getItem(12);
  document.getElementById('hour12txt').value=hour12text;
  var hour1text = localStorage.getItem(1);
  document.getElementById('hour1txt').value=hour1text;
  var hour2text = localStorage.getItem(2);
  document.getElementById('hour2txt').value=hour2text;
  var hour3text = localStorage.getItem(3);
  document.getElementById('hour3txt').value=hour3text;
  var hour4text = localStorage.getItem(4);
  document.getElementById('hour4txt').value=hour4text;
  var hour5text = localStorage.getItem(5);
  document.getElementById('hour5txt').value=hour5text;
}

