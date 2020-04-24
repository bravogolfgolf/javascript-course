$(document).ready(function() {

    function display(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#root");
    }
/*
    $.ajax({
        type: "GET",  
        url: "https://jsonplaceholder.typicode.com/posts/2",
        async: true,
    }).done(display);


    $.ajax({
        type: "GET",  
        url: "https://jsonplaceholder.typicode.com/posts/20",
        async: true,
        dataType: "json",
    }).done(display);
*/
    var new_post = {
        "userId": 1234,
        "title": "some title",
        "body": "some text"
    }
/*
    $.ajax({
        type: "POST",  
        url: "https://jsonplaceholder.typicode.com/posts",
        async: true,
        dataType: "json",
        data: new_post
    }).done(display);
*/

    //$.get("https://jsonplaceholder.typicode.com/posts/2", "json", display);
    //$.get("https://jsonplaceholder.typicode.com/posts/4", "json", display);
    //$.getJSON("https://jsonplaceholder.typicode.com/posts/8", display)
    $.post("https://jsonplaceholder.typicode.com/posts", new_post, display);

});




