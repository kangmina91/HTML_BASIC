$(function () {


    const model = ['iodiq', 'gasper', 'sonata']

    // 슬라이드 일어났을 때 애니메이션 작동하는 것 
    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');
        // 숫자 나오게 하기 삼항연산자
        $('#main_visual .num').text(c ? c + 1 : 1);
        // 이름 나오게 하기
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);


    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    })



});