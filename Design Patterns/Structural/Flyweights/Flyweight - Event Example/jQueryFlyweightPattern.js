$(document).ready(function () {

    $('#button-container')
        .on("click", function (event) {
            var originalTarget = $(event.target);

            var className = originalTarget.attr("class");

            if (className == "button") {
                alert("You clicked on this button: " + event.target.id +
                    " The greeting is: " + originalTarget.attr("message"));
            }
        });

    $('#button-container')
        .on("mouseover", function (event) {
            var originalTarget = $(event.target);

            var className = originalTarget.attr("class");

            if (className == "button") {
                console.log("Mouse over on button", originalTarget.text());
            }
        });

    $('#button-container')
        .on("mouseout", function (event) {
            var originalTarget = $(event.target);

            var className = originalTarget.attr("class");

            if (className == "button") {
                console.log("Mouse out on button", originalTarget.text());
            }
        });

    $('#button-container')
        .on("mousedown", function (event) {
            var originalTarget = $(event.target);

            var className = originalTarget.attr("class");

            if (className == "button") {
                originalTarget.css({'background-color': 'yellow'})
            }
        });
});