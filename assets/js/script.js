//This section is for the Momentum, I mean Moment.js 

var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

//This section is for the hour variables in the schedule

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");


var hour = moment().hours();
var userInput;
var hourSpan;