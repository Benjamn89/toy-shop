export const initialBtn = () => {
  document.querySelector(".about-div").classList.add("nav-active-div");
  document.querySelector(".about-div-btn").classList.add("btn-active");
  document.querySelector(".expand-p-about").classList.add("expand-p-active");
};

export const productsBtn = (classN) => {
  try {
    // first Remove
    document
      .querySelector(".nav-active-div")
      .classList.remove("nav-active-div");
    document.querySelector(".btn-active").classList.remove("btn-active");
    document
      .querySelector(".expand-p-active")
      .classList.remove("expand-p-active");
    if (document.querySelector(".expand-div-click-on")) {
      document
        .querySelector(".expand-div-click-on")
        .classList.remove("expand-div-click-on");
    }
  } catch {
    console.log("productsBtn rmv err");
  }
  try {
    // Then add
    document.querySelector(`.${classN}-div`).classList.add("nav-active-div");
    document.querySelector(`.${classN}-div-btn`).classList.add("btn-active");
    document
      .querySelector(`.expand-p-${classN}`)
      .classList.add("expand-p-active");
  } catch {
    console.log("productsBtm rmv err");
  }
};

export const onlyRemoveDom = () => {
  try {
    // first Remove
    document
      .querySelector(".nav-active-div")
      .classList.remove("nav-active-div");
    document.querySelector(".btn-active").classList.remove("btn-active");
    document
      .querySelector(".expand-p-active")
      .classList.remove("expand-p-active");
    if (document.querySelector(".expand-div-click-on")) {
      document
        .querySelector(".expand-div-click-on")
        .classList.remove("expand-div-click-on");
    }
  } catch {
    console.log("onlyRemove err");
  }
};

export const retriveSection = (nextSection, currentSection) => {
  try {
    document.querySelector(`#${currentSection}`).classList.add("section-out");
    document.querySelector(`#${currentSection}`).classList.remove("section-in");

    if (document.querySelector(".expand-div-click-on")) {
      document
        .querySelector(".expand-div-click")
        .classList.toggle("expand-div-click-on");
      document
        .querySelector(".circle-line-div1")
        .classList.toggle("circle-line-div1-flip");
      document
        .querySelector(".circle-line-div3")
        .classList.toggle("circle-line-div3-flip");
    }
  } catch {
    console.log("retriveSection err");
  }
  if (nextSection === "products") {
    return "Products";
  }
  if (nextSection === "cart") {
    return "Cart";
  }
  if (nextSection === "about") {
    return "About";
  }
};

export const circleDomMani = () => {
  document
    .querySelector(".expand-div-click")
    .classList.toggle("expand-div-click-on");
  document
    .querySelector(".circle-line-div1")
    .classList.toggle("circle-line-div1-flip");
  document
    .querySelector(".circle-line-div3")
    .classList.toggle("circle-line-div3-flip");
};

export const sectionArr = [
  {
    name: "Cart",
    squeezeClass: "expand-p-cart",
    regularClass: "cart-div",
    clickEvent: (value) => value,
    methodName: "moveToSection",
    additionalEl: true,
  },
  {
    name: "Products",
    squeezeClass: "expand-p-products",
    regularClass: "products-div",
    clickEvent: (value) => value,
    methodName: "moveToSection",
  },
  {
    name: "About",
    squeezeClass: "expand-p-about",
    regularClass: "about-div",
    clickEvent: (value) => value,
    methodName: "moveToSection",
  },
  {
    name: "LogOut",
    squeezeClass: "expand-p-logout",
    regularClass: "logout-div",
    clickEvent: (value) => value,
  },
];

export const productSectionOut = () => {
  document
    .querySelector(".product-single-div")
    .classList.add("product-single-div-out");
};

export const disableBtns = () => {
  document.querySelector(".cart-div").classList.toggle("navbar-div-disable");
  document.querySelector(".about-div").classList.toggle("navbar-div-disable");
  document
    .querySelector(".products-div")
    .classList.toggle("navbar-div-disable");
};
