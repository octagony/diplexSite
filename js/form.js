const form = () => {
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
};

form();
