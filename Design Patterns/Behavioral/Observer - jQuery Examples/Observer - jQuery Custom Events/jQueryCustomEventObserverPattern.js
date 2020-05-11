$(document).ready(function() {

    function getRandomMessage() {
        let randomMessages = ["Big sale on",
            "New items available",
            "Clearance sale",
            "Running out soon",
            "Back in stock"];
        let randomMessageIndex = Math.floor(Math.random() * 5);

        return randomMessages[randomMessageIndex];
    }

    function observer_alice(event, message) {
        console.log("**Received by Alice:", event.type, message);
        console.log(event);
    }

    function observer_bob(event, message) {
        console.log("**Received by Bob:", event.type, message);
        console.log(event);
    }

    function observer_irene(event, message) {
        console.log("**Received by Irene:", event.type, message);
        console.log(event);
    }

    function observer_julia(event, message) {
        console.log("**Received by Julia:", event.type, message);
        console.log(event);
    }

    $(document).on("mobile-phones", observer_alice)
    $(document).on("mobile-phones", observer_julia)

    $(document).on("household-items", observer_bob)
    $(document).on("household-items", observer_julia)

    $(document).on("books", observer_irene)
    $(document).on("books", observer_alice)
    $(document).on("books", observer_bob)

    $(document).on("fashion", observer_irene)
/*
    $('#mobile-phones')
        .on("click", function(event) {
            $(document).trigger("mobile-phones", getRandomMessage());
        });

    $('#books')
        .on("click", function(event) {
            $(document).trigger("books", getRandomMessage());
        });

    $('#household-items')
        .on("click", function(event) {
            $(document).trigger("household-items", getRandomMessage());
        });

    $('#fashion')
        .on("click", function(event) {
            $(document).trigger("fashion", getRandomMessage());
        }); 
*/

    $('div.button')
        .on("click", function() {
            $(document).trigger($(this).attr("id"), getRandomMessage());
        });

    $(document).off("mobile-phones", observer_alice)
    
    $(document).off("books", observer_irene)
    
    $(document).off("books", observer_alice)
    
    $(document).off("household-items", observer_bob)
           
});