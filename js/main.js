jQuery(document).ready(function () {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top - 200;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1000
    );
    return false;
  });
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $(".header__inner").addClass("sticky slide-in-top");
        $(".lang__pick__items").css("top", "67%");
      } else {
        $(".header__inner").removeClass("sticky");
        $(".lang__pick__items").css("top", "66%");
      }
    });
  });
});

const listItem = document.getElementsByClassName("list__item");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("mouseenter", showPick, false);
  listItem[i].addEventListener("mouseleave", hidePick, false);
}

function showPick(e) {
  if (this.children.length > 1) {
    this.children[1].style.height = "auto";
    this.children[1].style.overflow = "visible";
    this.children[1].style.opacity = "1";
  } else {
    return false;
  }
}

function hidePick(e) {
  if (this.children.length > 1) {
    this.children[1].style.height = "0px";
    this.children[1].style.overflow = "hidden";
    this.children[1].style.opacity = "0";
  } else {
    return false;
  }
}
