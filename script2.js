// alert("ass1");
$('button:nth-child(1)').on("click", function(){
  $('.wrapper').css("transform", "");
});
$('button:nth-child(2)').on("click", function(){
  $('.wrapper').css("transform", "rotateY(-90deg)");
});
$('button:nth-child(3)').on("click", function(){
  $('.wrapper').css("transform", "rotateY(90deg)");
});
$('button:nth-child(6)').on("click", function(){
  $('.wrapper').css("transform", "rotateY(180deg)");
});

// var now = new Date();
// alert( now );
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var weekNumber = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
// alert(result);
// weekNumber = 14;
// alert(weekNumber);

switch (weekNumber % 4) {
  case 0:
    // alert(1);
    $('.wrapper').css("transform", "");
    break;
  case 1:
    // alert(2);
    $('.wrapper').css("transform", "rotateY(-90deg)");
    break;
  case 2:
    // alert(3);
    $('.wrapper').css("transform", "rotateY(90deg)");
    break;
  case 3:
    // alert(4);
    $('.wrapper').css("transform", "rotateY(180deg)");
    break;
}
