$(document).ready(function() {

    $('<p>')
        .text("Hello World!")
        .appendTo("#root");

    $('<p>')
        .html("<b><i>Hello World!</i></b>")
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id"})
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .css({"background-color": "yellow"})
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .css({"background-color": "yellow"})
        .addClass("stylish-paragraph")
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .css({"background-color": "yellow"})
        .addClass("stylish-paragraph")
        .width("250px")
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .css({"background-color": "yellow"})
        .addClass("stylish-paragraph")
        .width("250px")
        .height("200px")
        .appendTo("#root");

    $('<p>')
        .text("Hello World!")
        .attr({"id": "paragraph-id", "style": "color: red"})
        .css({"background-color": "yellow"})
        .addClass("stylish-paragraph")
        .width("250px")
        .height("200px")
        .click(function(event) {
            alert("You clicked on this paragraph");
        })
        .appendTo("#root");

});