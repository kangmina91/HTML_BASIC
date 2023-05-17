// DOM이 로드된 뒤 적용
$(function () {
    $('.mainSlide').slick({
        //arrows: false,
        dots: true,
        // 숫자 도트 버튼 만들어주기
        autoplay: true,
        //   autoplay: true 슬라이드 자동으로 넘어가게 하기
        autoplaySpeed: 1500,
        //   autoplaySpedd: 1500 슬라이드 넘어가는 속도 기본 3000인가봄
        pauseOnHover: false,
        //  pauseOnHover: false 마우스 놔두면 멈춰 있는 거 없앰
    });
})