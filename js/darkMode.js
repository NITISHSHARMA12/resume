//Dark Mode
function myFunction() {
  var element = document.getElementById("darkmode");
  $("div").toggleClass("darkmode");
  $("li").toggleClass("darkmodeList");
  $(".card-title").toggleClass("card-title-dark");
  $(".year").toggleClass("year-dark");
  console.log(element);
}

// Calculate Experience
function getCurrentExperience(startDate, endDate) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var joiningDate = new Date(startDate);
  var curDate;
  if (endDate) {
    curDate = new Date(endDate);
  } else {
    curDate = new Date();
  }
  var totalExp = diff_months(joiningDate, curDate);

  var result = `${
    monthNames[joiningDate.getMonth()] + " " + joiningDate.getFullYear()
  }  - ${
    endDate
      ? monthNames[curDate.getMonth()] + " " + curDate.getFullYear()
      : "Present"
  } , ${roundValue(totalExp / 12)} yr `;
  return result;
}

// calculate difference b/w startDate and EndDate
function diff_months(joiningDate, curDate) {
  //   console.log(joiningDate, curDate);
  var diff = (joiningDate.getTime() - curDate.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  return Math.abs(Math.round(diff));
}

//round value like 0.2 year
function roundValue(value) {
  var result;
  if ((value) => 0.5) {
    // console.log("===", Math.ceil(value));
    result = Math.ceil(value * 10) / 10;
  } else {
    result = value;
  }
  return result;
}
