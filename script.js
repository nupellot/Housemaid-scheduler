currentdate = new Date();

// alert(getYearWeek(currentdate));
weekNumber = getYearWeek(currentdate);
switch (22 % 4) {
  case 0:
    $('.wrapper').css("transform", "");  // Dima N
    break;
  case 1:
    $('.wrapper').css("transform", "rotateY(-90deg)");  // Stassik
    break;
  case 2:
    $('.wrapper').css("transform", "rotateY(90deg)");  // Dima K
    break;
  case 3:
    $('.wrapper').css("transform", "rotateY(180deg)");  // Ivan
    break;
}

function getYearWeek(date){
	var date2=new Date(date.getFullYear(), 0, 1);
	var day1=date.getDay();
	if(day1==0) day1=7;
	var day2=date2.getDay();
	if(day2==0) day2=7;
	d = Math.round((date.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);
	return Math.ceil(d /7)+1;
}
