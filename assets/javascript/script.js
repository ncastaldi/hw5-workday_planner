$(document).ready(function () {

    /* Declare DOM Variables */
    var dayDisplayEl = $("#currentDay");
    var containerEl = $(".container");

    /* Declare JS Variables */
    var dayDisplay = moment().format("dddd, MMMM Do");
    var workdayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    /* Function Definitions */
    function displayDay() {
        dayDisplayEl.text(dayDisplay);
    }

    /* Function Calls */
    displayDay();

    /* Event Listeners */
})