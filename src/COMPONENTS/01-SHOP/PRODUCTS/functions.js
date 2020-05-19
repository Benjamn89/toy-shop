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

import { filtersObj } from "./filter-functions";

function Toy(img, title, desc, price, relation) {
  this.title = title;
  this.img = img;
  this.desc = desc;
  this.price = price;
  this.relation = relation;
}

export const toys = [
  new Toy(
    Buz,
    "Buz(Toy Story)",
    "Product details will be displayed here",
    6,
    "toy story"
  ),
  new Toy(
    CaptainA,
    "Captain America",
    "Product details will be displayed here",
    10,
    "marvel"
  ),
  new Toy(Hulk, "Hulk", "Product details will be displayed here", 5, "marvel"),
  new Toy(
    Ironman,
    "Ironman",
    "Product details will be displayed here",
    10,
    "marvel"
  ),
  new Toy(
    Spiderman,
    "Spiderman",
    "Product details will be displayed here",
    4,
    "none"
  ),
  new Toy(
    Batman,
    "Batman",
    "Product details will be displayed here",
    4,
    "none"
  ),
  new Toy(
    Superman,
    "Superman",
    "Product details will be displayed here",
    4,
    "none"
  ),
  new Toy(
    Thanos,
    "Thanos",
    "Product details will be displayed here",
    10,
    "marvel"
  ),
  new Toy(Thor, "Thor", "Product details will be displayed here", 7, "marvel"),
  new Toy(
    Turtle,
    "Turtle",
    "Product details will be displayed here",
    5,
    "none"
  ),
  new Toy(
    Woody,
    "Woody(Toy Story",
    "Product details will be displayed here",
    5,
    "toy story"
  ),
];

export const pages = (products = toys.length) => {
  var arr = [];
  for (var i = 1; i <= Math.round(products / 4); i++) {
    arr.push(i);
  }
  return arr;
};

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

export const retriveProducts = (state) => {
  var copyToys = JSON.parse(JSON.stringify(toys));
  var endArr = JSON.parse(JSON.stringify(toys));
  var arr = [];
  if (filtersObj.marvel) {
    if (endArr.length === copyToys.length) {
      endArr = endArr.filter((el) => {
        return el.relation === "marvel";
      });
    } else {
      endArr.push(
        ...copyToys.filter((el) => {
          return el.relation === "marvel";
        })
      );
    }
  }
  if (filtersObj.toyStory) {
    if (endArr.length === copyToys.length) {
      endArr = endArr.filter((el) => {
        return el.relation === "toy story";
      });
    } else {
      endArr.push(
        ...copyToys.filter((el) => {
          return el.relation === "toy story";
        })
      );
    }
  }
  if (filtersObj.max6) {
    endArr = endArr.filter((el) => {
      return el.price <= 6;
    });
  }
  if (filtersObj.min6) {
    endArr = endArr.filter((el) => {
      return el.price >= 6;
    });
  }
  for (var i = (state - 1) * 4; i < state * 4; i++) {
    if (i >= endArr.length) {
      return arr;
    }
    arr.push(endArr[i]);
  }
  return arr;
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

export const searchToy = (val) => {
  let arr = [];
  if (val.length > 1) {
    const valLower = val.toLowerCase();
    toys.map((el) => {
      if (el.title.toLowerCase().indexOf(valLower) > -1) {
        arr.push(el);
      }
      return null;
    });
    return arr;
  }
};
