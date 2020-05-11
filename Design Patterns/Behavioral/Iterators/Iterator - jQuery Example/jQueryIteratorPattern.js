$(document).ready(function () {

    $.each(["Melbourne", "Sydney", "Perth"], function (index, city) {
        setTimeout(function () {
            $("<li>")
                .text(city)
                .attr({"country": "Australia"})
                .appendTo("ul");
        }, 4000);
    });

    $("li").each(function () {
        setTimeout(function () {
            let country = $(this).attr("country");
            let currentText = $(this).text();

            $(this).text(currentText + "-" + country);
        }.bind(this), 5000);
    });

    $("li.ind").each(function () {
        setTimeout(function () {
            $(this).addClass("highlight");
        }.bind(this), 10000);
    });
});
