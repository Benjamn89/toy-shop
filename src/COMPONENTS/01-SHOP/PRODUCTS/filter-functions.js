const onlyTurnArrow = () => {
  document.querySelector(".filter-div").classList.toggle("filter-div-click");
  document
    .querySelector(".filter-arrow-wrap")
    .classList.toggle("filter-arrow-wrap-turn");
};

export const showFilterBox = () => {
  if (document.querySelector(".filter-arrow-wrap-close")) {
    return onlyTurnArrow();
  }
  document.querySelector(".filter-div").classList.toggle("filter-div-click");
  document
    .querySelector(".filter-arrow-wrap")
    .classList.toggle("filter-arrow-wrap-close");
  setTimeout(() => {
    document
      .querySelector(".filter-arrow-wrap")
      .classList.toggle("filter-arrow-wrap-turn");
  }, 50);
};

export const inputLabels = ["Marvel", "Toy Story", "Max 6$", "Min 6$"];

export const filtersObj = {
  marvel: false,
  toyStory: false,
  max6: false,
  min6: false,
};
