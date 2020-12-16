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

    function displayTimeBlocks() {
        for(var i=0; i < workdayHours.length; i++){
            var rowEl = $("<row>");
            rowEl.addClass("row time-block");

            var hourColEl = $("<div>");
            hourColEl.addClass("col-1 hour");
            hourColEl.text(moment().set('hour', workdayHours[i]).format("hA"));
            rowEl.append(hourColEl);

            var descriptionColEl = $("<textarea>");
            descriptionColEl.addClass("col-10 past");
            if (moment().hour() > workdayHours[i]) {
                descriptionColEl.addClass("past");
            } else if (moment().hour() < workdayHours[i]) {
                descriptionColEl.addClass("future");
            } else if (moment().hour() === workdayHours[i]) {
                descriptionColEl.addClass("present");
            }

            rowEl.append(descriptionColEl);

            var buttonColEl = $("<button>");
            buttonColEl.addClass("col-1 saveBtn fas fa-save");
            rowEl.append(buttonColEl);

            containerEl.append(rowEl);
        }
    }

    /* Function Calls */
    displayDay();
    displayTimeBlocks();

    /* Define Event Listeners */
})