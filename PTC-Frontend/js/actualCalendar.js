//("JavaScript Date" s.d.) - obtained information about the Date references.

// -------------- //
// @author: Oliver Langkjær Michelsen
// Inspiration for calendar - it is important to know that the calendar is made with inspiration from the following youtube video.
// The calendar represented in the video is a calendar and not a date picker. The code beyond the functions regarding 'date' methods, is purely created by the developers and not found in this video. (inspiration goes up till line #118)
// (Iltechs, 2019)

var dt = new Date();
// To start of with we create a variable name 'dt' which use the javascript method 'new Date' which is used for creating an object constructor function. This variable will now be used in creating the calendar. the variable is because of the () declared to as a function
// ("What is the 'new' keyword in JavaScript" 2009)

function renderDate() {
    // The class name "content" does not have any relevance for our js file, and is only used for creating overview of the div section.

    dt.setDate(1);
// set.Date is a javascript function we use so the date is equal to the weekday. We use the parameter (1) because (0) is equal to the first day of the last month, and we want to get the first day of this month.
// ("JavaScript setDate" s.d)
    var day = dt.getDay();

    // this is consoled log, so we can see how many dates from last month we have.
    console.log(dt.getDay());

    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth()+1,0
    ).getDate();

    // Test, where we should get the last day of the month. That happens because we in getMonth use +1 besides the parameter, and furthermore use 0 which represents the last day of the last month.
    // This object constructor will also be relevant in a later for loop.
    console.log(endDate);

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),0).getDate();
// This variable refers to the HTML arrow symbol and the function executes with an onClick. We use date:0; because that is the last month
    var today = new Date();
    console.log(today);
    // This console log consoles the date of today via a javascript method
    // We declare this variable because we want to use it in or for loop, that via HTML should print all the dates of the month.
    console.log(prevDate);
    // Here we test that the prevDate we just created is the last day of the last month.

// But firstly an array of all the months.
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"];

// We here use a object constructor function, which prints the date to our paragraph in html.
// ""JaveScript | date.toDateString" s.d)/
    document.getElementById("date_str").innerHTML = 1 + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

    //document.getElementById("date_str").innerHTML = this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

// We use our dt variable new date to get the month.
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    /* for(var d = 1; d <= endDate; d++) {
         if (d <= 31) console.log(d);
     }
 */

    cells = "";

    for(x = day; x > 0; x--){
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

// This for loop connects with our div class "'prev_date" it starts out by saying our previous date, which is the last day of the last month=30. Then it says - x = the days that is represented from last month. It then plus with 1 so we get 29, and the loop repeats.

// This for loop is for all the days of the relevant month. We again use a for loop, ad break out of the loop when i is less than our equal to the last day of the month

    for (i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()){
            //var newDate = "day" + i;
            cells += "<div class='day' id ='" + i + "'  value ='" + i + "'>" + i  + "</div>";

        } else{

            cells += "<div class='day' id ='" + i + "' value ='" + i + "'>" + i + "</div>";

// If the date is not equal to today's date, we use the conditional else statement, until we hit todays date. Then the if statement will be used. The break happens at the endDate

        }
    }

// Here we use innerHTML to print the cells we have declared above, in the user interface.
    document.getElementsByClassName("days")[0].innerHTML = cells;
    addDateChecker();
}

// -------------- //
// @author: Oliver Langkjær Michelsen

// This is the function that executes when the onclick prev or next is clicked on. We either multiply or substract one month COMMENT PARA!!!!!
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
        renderDate();
    } else {
        (para == 'next')
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
    // We use the renderDate function in here, because the moveDate function needs to have this reference because the other attributed from the calendar is declared inside this function. And eventhough the tuborg klamme had continued, we have not declared an onclick function in the prevDate and nextDate object constructor.
};

function addDateChecker() {

        $('.day').click(function () {

            var dateOfBooking = document.getElementById("date_str").innerHTML = this.id + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

            console.log(dateOfBooking)

            $.ajax({
                url: "http://localhost:3000/user/date",
                method: 'POST',
                datatype: "json",
                data: ({date: dateOfBooking}),
                success: function (response) {
                    console.log(response)
                        localStorage.setItem("date", dateOfBooking);
                },
            })

        });
}