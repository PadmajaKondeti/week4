 
$(document).ready(function() {
        $("#move").click(function() {
                $(".post").each(function() {
                        var image = $(this).children("img");
                        image.remove();
                        $("#photoholder").append(image);
                });
        });                               
});