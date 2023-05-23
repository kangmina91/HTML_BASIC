$(function () {
    $('.top_banner .btn').on('click', function () {
        // $('.top_banner').addClass('on')
        $('.top_banner').toggleClass('on')
    });

    $('.down_banner .btn').on('click', function () {
        // $('.top_banner').addClass('on')
        $('.down_banner').toggleClass('on')
    });


    $('.right_banner .btn').on('click', function () {
        $('.right_banner').toggleClass('on')
    });

    $('.left_banner .btn').on('click', function () {
        $('.left_banner').toggleClass('on')
    });



});