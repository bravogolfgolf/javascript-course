$(document).ready(function () {

    class LegacyBox {

        draw() {
            $('<p>')
                .text("This is a LegacyBox")
                .addClass("box")
                .addClass("box-legacy")
                .appendTo("#root");
        }

    }

    class OrangeBox {

        render() {
            $('<p>')
                .text("This is an OrangeBox")
                .addClass("box")
                .addClass("box-orange")
                .appendTo("#root");
        }

    }

    class YellowBox {

        render() {
            $('<p>')
                .text("This is an YellowBox")
                .addClass("box")
                .addClass("box-yellow")
                .appendTo("#root");
        }

    }

    class BlueBox {

        render() {
            $('<p>')
                .text("This is an BlueBox")
                .addClass("box")
                .addClass("box-blue")
                .appendTo("#root");
        }

    }

    var boxRenderers = {
        "legacy": new LegacyBox(),
        "orange": new OrangeBox(),
        "yellow": new YellowBox(),
        "blue": new BlueBox
    }


    $('div.button')
        .on("click", function (event) {

            var boxType = $(this).attr("box-type");

            if (boxType == "legacy") {
                boxRenderers[boxType].draw();
            } else {
                boxRenderers[boxType].render();
            }
        });
});




































