$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })
    // 밑에 내려갔을 때 버튼 누르면 스크롤 올라가는 기능

    $(function () {

        $('.pro_slide').on('init afterChange', function () {
            const current = $('.pro_slide .slick-current');
            current.addClass('on').siblings().removeClass('on');
            console.log(current);
        })

        $('.pro_slide').slick({
            arrows: false,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: 0,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
        })
    })



})