// create an array of strings to loop through
// in this case I think I've decided on a theme of popular TV shows
var tvShowArray = ["Dexter", "The Office", "How I Met Your Mother", "Silicon Valley", "Veep", "True Detective", "How I Met Your Mother", "Parks and Rec", "Community", "Family Guy", "Rick and Morty", "American Dad"]

$("document").ready(function() {

    function displayShowGif () {

    };

    // when the submit button is clicked
    $("#submit-button").on("click", function(event) {
        event.preventDefault();

        // create a variable for the text in the input box
        var newShow = $("#add-show").val().trim();

        // push the new show into the array
        tvShowArray.push(newShow);

        // and then call our display buttons function again
        displayButtons();
    });

    // function to create display all of the buttons in the array
    function displayButtons() {
        $("#show-buttons").empty();

        // create buttons, add class and attribute to them and add them to the HTML
        for(var i = 0; i < tvShowArray.length; i++) {
            var $showbutton = $("<button>");
            $showbutton.addClass("show-btn");
            $showbutton.attr("show-name", tvShowArray[i]);
            $showbutton.text(tvShowArray[i]);
            $("#show-buttons").append($showbutton);
        }
    };

    // initial call to display initial buttons
    displayButtons();
});