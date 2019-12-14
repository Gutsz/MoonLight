jQuery(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1000
    })
});

jQuery(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container__quote', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});

let show = () => {
    if($('.menu').hasClass('active'))  {
        $('.menu').removeClass('active');
    } else {
        $('.menu').addClass('active');
    }
}

jQuery(document).ready(function () {
    $('.navigation').on('click', '.menu-icon', function () {
    show();
});
})