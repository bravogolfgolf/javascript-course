$(document).ready(function() {

    class PostDataProxy {

        constructor() {
            this.postData = {};
        }
        
        displayPost(id) {
            if (!this.postData[id]) {
                console.log("Making server request for ", id);

                this.loadPost(id);

            } else {
                console.log("Cached data already available for ", id);

                this.display(this.postData[id])
            }
        }

        loadPost(id) {
            $.ajax({
                type: "GET",  
                url: "https://jsonplaceholder.typicode.com/posts/" + id,
                async: true
            }).done(this.cachePostData.bind(this));
        }

        cachePostData(response) {
            this.postData[response.id] = response;

            this.display(response);
        }

        display(post) {
            $('#root')
                .text(JSON.stringify(post))
                .addClass("box")

        }
    }

    var dataProxy = new PostDataProxy();

    $('div.button')
        .on("click", function(event) {

            var postId = $(this).attr("post-id");
        
            dataProxy.displayPost(postId);
        });

});






























