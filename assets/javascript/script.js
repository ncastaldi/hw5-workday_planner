$(document).ready(function () {

    /* Declare DOM Variables */
    var dayDisplayEl = $("#currentDay");
    var containerEl = $(".container");

    /* Declare JavaScript Variables */
    var dayDisplay = moment().format("dddd, MMMM Do");
    var workdayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    /* Function Definitions */
    function displayDay() {
        dayDisplayEl.text(dayDisplay);
    }

    function displayTimeBlocks() {
        for (var i = 0; i < workdayHours.length; i++) {

            /* Create row element */
            var rowEl = $("<row>");
            rowEl.addClass("row time-block");

            /* Create column element */
            var hourColEl = $("<div>");
            hourColEl.addClass("col-1 hour");
            hourColEl.text(moment().set('hour', workdayHours[i]).format("hA"));
            rowEl.append(hourColEl);

            /* Create textarea element */
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

            /* Write any stored tasks to hour block */
            if (localStorage.getItem(workdayHours[i]) !== null) {
                var savedAppointment = localStorage.getItem(workdayHours[i]);
                descriptionColEl.text(savedAppointment);
            }

            /* Create save button */
            var buttonColEl = $("<button>");
            buttonColEl.addClass("col-1 saveBtn fas fa-save");
            buttonColEl.data("data-taskTime", workdayHours[i]);
            rowEl.append(buttonColEl);

            /* Add everything to the page */
            containerEl.append(rowEl);
        }
    }

    function saveAppointment(event) {
        event.preventDefault();

        /* Save written task */
        var what = $(this.previousElementSibling).val();
        
        /* Save time of task */
        var when = $(this).data("data-taskTime");

        /* Save when and what to local storage */
        localStorage.setItem(when, what);
    }

    /* Function Calls */
    displayDay();
    displayTimeBlocks();

    /* Define Event Listeners */
    containerEl.on("click", "button", saveAppointment);
})