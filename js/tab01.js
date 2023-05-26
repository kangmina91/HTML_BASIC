$(function () {

    $('.tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        // $('.tab_content .con').removeClass('on');
        // ('.tab_content .con').eq(iqx).addClass('on');

        // const con = document.querySelectorAll('.tab_content .con');
        // con.forEach(it => it.addEventListener('click', function () {
        //     it.classList.remove('on');
        //     event.currentTarget.classList.add('on')
        // }))


        // 내가 클릭한 거에 on 클래스명 붙이면서 다른 놈들에게서 on 클래스명은 삭제해라 
        $('.tab_content .con').eq(idx).addClass('on').siblings().removeClass('on');


        console.log(event, event.target, event.currentTarget, $(this), $(this).index());





    });

    $('.tab_map_link li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index(); // 0,1,2
        $('.tab_map_location li').eq(idx).addClass('on').siblings().removeClass('on');
    });



});