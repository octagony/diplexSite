$(document).ready(function () {
  $(".roadmap__slider").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".partners__list").slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  });
});
