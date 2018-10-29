$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
/*
var nextGameNight = function() {
  //get today's date
  var d = new Date();

  //add in all the game nights
  var week1 = new Date(2018, 2, 6);
  var week2 = new Date(2018, 2, 22);
  var week3 = new Date(2018, 3, 3);
  var week4 = new Date(2018, 3, 19);
  var week5 = new Date(2018, 4, 1);
  var week6 = new Date(2018, 4, 17);
  var week7 = new Date(2018, 5, 29);

  //turn them into readable strings
  var week1str = week1.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week2str = week2.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week3str = week3.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week4str = week4.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week5str = week5.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week6str = week6.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  var week7str = week7.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  //compare current day to schedule and display next game night
  if (d > week7) {
    document.getElementById("date").innerHTML =
      "Check back soon for an updated schedule!";
  } else if (d <= week1) {
    document.getElementById("date").innerHTML =
      week1str + " at The Magician (7:30pm)";
  } else if (d <= week2) {
    document.getElementById("date").innerHTML =
      week2str + " at The Magician (7:30pm)";
  } else if (d <= week3) {
    document.getElementById("date").innerHTML =
      week3str + " at The Magician (7:30pm)";
  } else if (d <= week4) {
    document.getElementById("date").innerHTML =
      week4str + " at The Magician (7:30pm)";
  } else if (d <= week5) {
    document.getElementById("date").innerHTML =
      week5str + " at The Magician (7:30pm)";
  } else if (d <= week6) {
    document.getElementById("date").innerHTML =
      week6str + " at The Magician (7:30pm)";
  } else if (d <= week7) {
    document.getElementById("date").innerHTML =
      week7str + " at The Magician (7:30pm)";
  }
};

nextGameNight();
*/
