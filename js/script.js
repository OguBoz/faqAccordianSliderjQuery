$(document).ready(function() {
    $(".q").click(function(){
        $(this).next().slideToggle(500)
                        .siblings('li.a')
                          .slideUp();

        $("img").not($(this).children("img")).removeClass("rotate");
        $(this).children("img").toggleClass("rotate");
    });
});