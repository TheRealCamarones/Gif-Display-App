// create an array of strings to loop through
// in this case I think I've decided on a theme of popular TV shows
var tvShowArray = ["Dexter", "The Office", "How I Met Your Mother", "Silicon Valley", "Veep", "True Detective", "How I Met Your Mother", "Parks and Rec", "Community", "Family Guy", "Rick and Morty", "American Dad"]

$("document").ready(function() {

    function displayButtons() {
        $("#show-buttons").empty();

        for(var i = 0; i < tvShowArray.length; i++) {
            var $showbutton = $("<button>");
            $showbutton.text(tvShowArray[i]);
            $("#show-buttons").append($showbutton);
        }
    }
    displayButtons();
});