$(function () {

    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        // 이미지 수가 하나 더 많아야 돌아감
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')

    });

    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext')
    });

});



// 반응형일 때 한개씩 나오게 하기, 숫자 변경한만큼 나오게함