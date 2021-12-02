$(document).ready(function () {
  $(".cooperation__slider").slick({
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1772,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

  $(".partners__list").slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
