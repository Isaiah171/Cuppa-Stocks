function mainFunction() {

    var today = document.getElementById("current-day");
    var whatsTodayDay = dayjs().format('dddd');
    var whatsTodayDate = dayjs().format('MMMM DD, YYYY');
    // var myEventInput = document.getElementById('myInput');
  
    today.textContent = whatsTodayDay + ", " + whatsTodayDate;
   /* today.setAttribute("style", "font-family: "); */
}

window.onload = function () {
	mainFunction();
}