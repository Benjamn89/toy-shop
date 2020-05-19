export const showFilterBox = () => {
  document.querySelector(".filter-div").classList.toggle("filter-div-click");
  document
    .querySelector(".filter-arrow-wrap")
    .classList.toggle("filter-arrow-wrap-close");
};

export const inputLabels = ["Marvel", "Toy Story", "Max 6$", "Min 6$"];

export const filtersObj = {
  marvel: false,
  toyStory: false,
  max6: false,
  min6: false,
};
