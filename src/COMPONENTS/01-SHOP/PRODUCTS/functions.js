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
  for (var i = 1; i <= Math.ceil(products / 4); i++) {
    arr.push(i);
  }
  return arr;
};

export const pureRetriveProducts = () => {
  var copyToys = JSON.parse(JSON.stringify(toys));
  var endArr = JSON.parse(JSON.stringify(toys));

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

  return endArr;
};

export const retriveProducts = (state) => {
  var resArr = pureRetriveProducts();
  var arr = [];
  for (var i = (state - 1) * 4; i < state * 4; i++) {
    if (i >= resArr.length) {
      return arr;
    }
    arr.push(resArr[i]);
  }
  return arr;
};

export const searchToy = (val) => {
  let resArr = pureRetriveProducts();
  let arr = [];
  if (val.length > 1) {
    const valLower = val.toLowerCase();
    resArr.map((el) => {
      if (el.title.toLowerCase().indexOf(valLower) > -1) {
        arr.push(el);
      }
      return null;
    });
    return arr;
  }
};

export const changePage = (eTarget, pageState, productsState) => {
  var nextPage;
  if (eTarget === "&lt;") {
    nextPage = pageState - 1;
  } else if (eTarget === "&gt;") {
    nextPage = pageState + 1;
  } else {
    nextPage = parseInt(eTarget);
  }

  if (nextPage > Math.ceil(productsState / 4)) {
    nextPage = 1;
  }
  if (nextPage < 1) {
    nextPage = Math.ceil(productsState / 4);
  }
  var side = null;
  if (nextPage < pageState) {
    side = "right";
  }
  if (nextPage === pageState) {
    return null;
  }
  return {
    nextPage,
    side,
  };
};
