console.log("new git");

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

const selectSingle = document.querySelector(".form__select");
const selectSingleTitle = selectSingle.querySelector(".select__title");
const selectSingleLabels = selectSingle.querySelectorAll(".select__label");
const selectContent = selectSingle.querySelector(".select__content");

selectContent.style.display = "none";

selectSingleTitle.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", " ");
    selectContent.style.display = "none";
  } else {
    selectSingle.setAttribute("data-state", "active");
    selectContent.style.display = "flex";
  }
});

for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener("click", (evt) => {
    selectSingleTitle.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", " ");
    selectContent.style.display = "none";
  });
}

jQuery(document).ready(function () {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top - 150;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1000
    );
    return false;
  });
});
