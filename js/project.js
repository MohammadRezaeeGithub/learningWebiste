$(document).ready(function () {

    $("#example-1").eocjsNewsticker({
        speed: 25,
        timeout: 0.5
    });

    $.simpleTicker($("#demo"),{
        speed : 1000,
        delay : 3000,
        easing : 'swing',
        effectType : 'fade'
    });

    $(".btn-toggle").click(function () {
        $('.sm-device-menu').toggleClass("test");
    })
});