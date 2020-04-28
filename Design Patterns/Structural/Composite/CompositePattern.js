$(document).ready(function () {

    $('#bird')
        .on("click", function () {
            $('#bird-img').slideToggle();
        });

    $('#dogs')
        .on("click", function () {
            $('.dog').slideToggle();
        });

    $('#nature')
        .on("click", function () {
            $('.nature').slideToggle();
        });

    $('#all')
        .on("click", function () {
            $('img').slideToggle();
        });
});
