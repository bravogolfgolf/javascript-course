$(document).ready(function() {
/*
    $('div.button')
        .on("click", function(event) {

            var id = $(this).attr("id");
            console.log("Value of this:", this);
          
            if (id == "bigger") {
                $("div.box").animate({
                    height: '+=50px',
                    width: '+=50px'
                });
            } else if (id == "smaller") {
                $("div.box").animate({
                    height: '-=50px',
                    width: '-=50px'
                });
            }
        });


    $('div.button')
        .on("click", function(event) {

            setTimeout(function() {
                var id = $(this).attr("id");

                console.log("Value of this:", this);
                
                if (id == "bigger") {
                    $("div.box").animate({
                        height: '+=50px',
                        width: '+=50px'
                    });
                } else if (id == "smaller") {
                    $("div.box").animate({
                        height: '-=50px',
                        width: '-=50px'
                    });
                } else {
                    console.log("Invalid id:", id);
                }
            }, 2000);   
        });


    $('div.button')
        .on("click", function(event) {

            setTimeout(function() {
                var id = $(this).attr("id");

                console.log("Value of this:", this);

                if (id == "bigger") {
                    $("div.box").animate({
                        height: '+=50px',
                        width: '+=50px'
                    });
                } else if (id == "smaller") {
                    $("div.box").animate({
                        height: '-=50px',
                        width: '-=50px'
                    });
                } else {
                    console.log("Invalid id:", id);
                }
            }.bind(this), 2000);
        });    
*/

    $('div.button')
        .on("click", function(event) {

            setTimeout($.proxy(function() {
                var id = $(this).attr("id");

                console.log("Value of this:", this);

                if (id == "bigger") {
                    $("div.box").animate({
                        height: '+=50px',
                        width: '+=50px'
                    });
                } else if (id == "smaller") {
                    $("div.box").animate({
                        height: '-=50px',
                        width: '-=50px'
                    });
                } else {
                    console.log("Invalid id:", id);
                }
            }, this), 2000);
        });    

});






































