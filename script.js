// alert(getYearWeek(currentdate));
// weekNumber = getYearWeek3();
switch (getYearWeek4() % 4) {
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

function getYearWeek() {
  currentdate = new Date(2022, 04, 14);
  var oneJan = new Date(currentdate.getFullYear(), 0, 1);
  // alert(oneJan);
  // Прибавляем 1, поскольку разность на 1 меньше, чем номер сегодняшнего дня.
  var numberOfDays = Math.ceil((currentdate - oneJan) / (24 * 60 * 60 * 1000)) + 1;
  // alert(numberOfDays);
  var result = Math.ceil((numberOfDays - currentdate.getDay()) / 7);
  alert(`The week number of the current date (${currentdate}) is ${result}.`);
  return result;
	// var date2=new Date(date.getFullYear(), 0, 1);
	// var day1=date.getDay();
	// if(day1==0) day1=7;
	// var day2=date2.getDay();
	// if(day2==0) day2=7;
	// d = Math.round((date.getTime() - date2.getTime()+(day2-day1)*(24*60*60*1000)) / 86400000);
	// return Math.ceil(d /7)+1;
}

function getYearWeek2() {
  currentDate = new Date(2022, 04, 11);
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) /
      (24 * 60 * 60 * 1000));

  var weekNumber = Math.ceil(
      (currentDate.getDay() + 1 + days) / 7);

  // Display the calculated result
  alert("Week number of " + currentDate +
      " is :   " + weekNumber);
}

function getYearWeek3() {
    // Copy date so don't modify original
    // var d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d = new Date(2022, 04, 10);
    alert(d);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    alert(weekNo);
    // Return array of year and week number
    return weekNo;
}

function getYearWeek4() {
    var today = new Date();
    today.setDate(today.getDate() - 1);
    // d.setDate(d.getDate() + 2);
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    var result = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    // alert(result);
    return result;
}
