$(document).ready(function(){

    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if(top>=10){
            $("header").css("background-color", "darkcyan");
            $("header").css("transition", "0.3s");
        }
        if(top == 0){
            $("header").css("background-color", "transparent");
        }
    })

})