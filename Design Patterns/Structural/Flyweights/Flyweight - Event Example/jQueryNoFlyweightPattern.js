$(document).ready(function() {

    $('div.button')
        .on("click", function(event) {
            alert("You clicked on this button: " + event.target.id +
                " The greeting is: " + $(this).attr("message"));
        });

    $('div.button')
        .on("mouseover", function(event) {
            console.log("Mouse over on button", $(this).text());
        });

    $('div.button')
        .on("mouseout", function(event) {
            console.log("Mouse out on button", $(this).text());
        });

    $('div.button')
        .on("mousedown", function(event) {
            $(this).css({'background-color': 'yellow'})
        });
});















