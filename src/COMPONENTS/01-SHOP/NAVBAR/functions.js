export const initialBtn = () => {
  document.querySelector(".about-div").classList.add("nav-active-div");
  document.querySelector(".about-div-btn").classList.add("btn-active");
};

export const productsBtn = (classN) => {
  // first Remove
  document.querySelector(".nav-active-div").classList.remove("nav-active-div");
  document.querySelector(".btn-active").classList.remove("btn-active");
  // Then add
  document.querySelector(`.${classN}`).classList.add("nav-active-div");
  document.querySelector(`.${classN}-btn`).classList.add("btn-active");
};
