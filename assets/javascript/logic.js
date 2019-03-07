// create an array of strings to loop through
// in this case I think I've decided on a theme of popular TV shows
var tvShowArray = ["Dexter", "The Office", "How I Met Your Mother", "Silicon Valley", "Veep", "True Detective", "How I Met Your Mother", "Parks and Rec", "Community", "Family Guy", "Rick and Morty", "American Dad"]

// $("document").ready(function() {

// function to change the HTML to display GIFs on the click
function displayShowGif() {
    // empty out the other gifs
    $("#gif-display").empty();
    var show = $(this).attr("show-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?";

    // ajax call to display the gifs corresponding the show chosen
    $.ajax({
        url: queryURL,
        method: "GET",
        data: {
            q: show,
            limit: 10,
            apikey: "BkapTCENcGY19xtf8Kbd4zEjHi90w6ll"
        }
    }).then(function (response) {
        console.log(response);
        // variable to store the API object information
        var results = response.data;
        // loop to go through and create and append the GIF
        for (var j = 0; j < 10; j++) {
            // assign a variable to the GIF display area
            var gifDiv = $("#gif-display");

            // make a variable to display an image tag
            var gif = $("<img>")
            gif.attr("src", results[j].images.original_still.url)
                .attr("data-still", results[j].images.original_still.url)
                .attr("data-animate", results[j].images.original.url)
                .attr("data-state", "still")
                .attr("class", "gif")
                .addClass("mx-auto")
                .addClass("my-auto")
                .addClass("col-md-4")
            gifDiv.append(gif);
        }
    })
};

function gifAnimation() {
    // grabs the state of the gif that was clicked
    var state = $(this).attr("data-state");
    var still = $(this).attr("data-still");
    var animate = $(this).attr("data-animate");
    console.log(state);
    console.log(still);
    console.log(animate);

    // and then either animates or resets
    if (state === "still") {
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
    } else if (state === "animate") {
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
    }
    

}

// when the submit button is clicked
$("#submit-button").on("click", function (event) {
    event.preventDefault();

    // create a variable for the text in the input box
    var newShow = $("#add-show").val().trim();

    // push the new show into the array
    tvShowArray.push(newShow);

    // and then call our function to display buttons again
    displayButtons();
});

// function to create display all of the buttons in the array
function displayButtons() {
    $("#show-buttons").empty();

    // create buttons, add class and attribute to them and add them to the HTML
    for (var i = 0; i < tvShowArray.length; i++) {
        var $showbutton = $("<button>");
        $showbutton.addClass("show-btn");
        $showbutton.attr("show-name", tvShowArray[i]);
        $showbutton.text(tvShowArray[i]);
        $("#show-buttons").append($showbutton);
    }
};

// initial call to display initial buttons
displayButtons();

// event listener that applies to any click of a button and runs the function to display GIFs
$(document).on("click", ".show-btn", displayShowGif);
$(document).on("click", ".gif", gifAnimation);
// });