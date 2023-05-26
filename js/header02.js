$(function () {


    // 모바일에서 메뉴 클릭 시 서브 메뉴 등장
    $('#header .gnb>ul>li').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        }



    });

    // 모바일 메뉴 아이콘 클릭 시 메뉴 열고 닫기
    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });

    // 리사이즈
    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
    })

});