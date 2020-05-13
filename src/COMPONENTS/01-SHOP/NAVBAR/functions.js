export const initialBtn = () => {
  document.querySelector(".about-div").classList.add("nav-active-div");
  document.querySelector(".about-btn").classList.add("btn-active");
};

export const productsBtn = () => {
  // first Remove
  document.querySelector(".nav-active-div").classList.remove("nav-active-div");
  document.querySelector(".btn-active").classList.remove("btn-active");
  // Then add
  document.querySelector(".products-div").classList.add("nav-active-div");
  document.querySelector(".products-btn").classList.add("btn-active");
};
