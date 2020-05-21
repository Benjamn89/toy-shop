export const activeSpan = (state, side = null) => {
  try {
    const wrapEl = document.querySelector(".wrap-products-items-div");
    const inRight = document.querySelector(".wrap-products-in-right");
    if (side === "right") {
      wrapEl.classList.add("wrap-products-in-right");
    } else {
      if (inRight) {
        inRight.classList.remove("wrap-products-in-right");
      }
      wrapEl.classList.add("wrap-procuts-in-left");
    }
    document
      .querySelectorAll(".products-span-for-active")
      [state].classList.add("products-span-active");
  } catch {
    console.log("err activeSpan");
  }
};

export const removeActiceSpan = () => {
  const el = document.querySelector(".products-span-active");
  if (el) {
    document
      .querySelector(".products-span-active")
      .classList.remove("products-span-active");
  }
};

export const itemBoxOut = (side = null) => {
  const wrapEl = document.querySelector(".wrap-products-items-div");
  if (side === "right") {
    wrapEl.classList.add("wrap-products-out-right");
  } else {
    wrapEl.classList.add("wrap-products-out-left");
  }
};

export const itemBoxIn = (side = null) => {
  if (side === "right") {
    document
      .querySelector(".wrap-products-out-right")
      .classList.remove("wrap-products-out-right");
  } else {
    document
      .querySelector(".wrap-products-out-left")
      .classList.remove("wrap-products-out-left");
  }
};
