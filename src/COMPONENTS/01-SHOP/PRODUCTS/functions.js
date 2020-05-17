import Batman from "../../../media/batman.jpg";
import Buz from "../../../media/buz.jpg";
import CaptainA from "../../../media/captain-america.jpg";
import Hulk from "../../../media/hulk.jpg";
import Ironman from "../../../media/ironman.jpg";
import Spiderman from "../../../media/spiderman.jpg";
import Superman from "../../../media/superman.jpg";
import Thanos from "../../../media/thanos.jpg";
import Thor from "../../../media/thor.jpg";
import Turtle from "../../../media/turtle.jpg";
import Woody from "../../../media/woody.jpg";

function Toy(img, title, desc, price) {
  this.title = title;
  this.img = img;
  this.desc = desc;
  this.price = price;
}

export const toys = [
  new Toy(Buz, "Buz(Toy Story)", "Product details will be displayed here", 6),
  new Toy(
    CaptainA,
    "Captain America",
    "Product details will be displayed here",
    10
  ),
  new Toy(Hulk, "Hulk", "Product details will be displayed here", 5),
  new Toy(Ironman, "Ironman", "Product details will be displayed here", 10),
  new Toy(Spiderman, "Spiderman", "Product details will be displayed here", 4),
  new Toy(Batman, "Batman", "Product details will be displayed here", 4),
  new Toy(Superman, "Superman", "Product details will be displayed here", 4),
  new Toy(Thanos, "Thanos", "Product details will be displayed here", 10),
  new Toy(Thor, "Thor", "Product details will be displayed here", 7),
  new Toy(Turtle, "Turtle", "Product details will be displayed here", 5),
  new Toy(
    Woody,
    "Woody(Toy Story",
    "Product details will be displayed here",
    5
  ),
];

export const pages = () => {
  var arr = [];
  for (var i = 1; i <= Math.round(toys.length / 4); i++) {
    arr.push(i);
  }
  return arr;
};

export const activeSpan = (state, side = null) => {
  if (side === "right") {
    document
      .querySelector(".wrap-products-items-div")
      .classList.add("wrap-products-in-right");
  } else {
    document
      .querySelector(".wrap-products-items-div")
      .classList.add("wrap-procuts-in-left");
  }
  document
    .querySelectorAll(".products-span-for-active")
    [state].classList.add("products-span-active");
};

export const removeActiceSpan = () => {
  document
    .querySelector(".products-span-active")
    .classList.remove("products-span-active");
};

export const retriveProducts = (state) => {
  var arr = [];
  for (var i = (state - 1) * 4; i < state * 4; i++) {
    if (i >= toys.length) {
      return arr;
    }
    arr.push(toys[i]);
  }
  return arr;
};

export const itemBoxOut = (side = null) => {
  if (side === "right") {
    document
      .querySelector(".wrap-products-items-div")
      .classList.add("wrap-products-out-right");
  } else {
    document
      .querySelector(".wrap-products-items-div")
      .classList.add("wrap-products-out-left");
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
