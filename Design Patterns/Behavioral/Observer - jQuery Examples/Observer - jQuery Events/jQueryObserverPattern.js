$(document).ready(function () {

    function makeRandomString(character) {

        let randomNumber = Math.floor(Math.random() * 100);
        let string = "";

        for (let i = 0; i <= randomNumber; i++) {
            string += character;
        }

        return string;
    }

    $('#asterisk')
        .on("click", function () {
            console.log(makeRandomString("*"));
        });

    $('#dollar')
        .on("click", function () {
            console.log(makeRandomString("$"));
        });

    $('#hash')
        .on("click", function () {
            console.log(makeRandomString("#"));
        });

    $('#ampersand')
        .on("click", function () {
            console.log(makeRandomString("&"));
        });

    $('div.button')
        .on("click", function () {
            console.log("Click on button", $(this).text());
        })

        .on("mousedown", function () {
            $(this).css({'background-color': 'yellow', 'color': 'black'})
        });
});