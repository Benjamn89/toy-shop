import jump from "jump.js";

export const scrollPosition = () => {
  const actualEvent = (event) => {
    const el = document.querySelector(".about-section-div2");
    try {
      if (
        window.scrollY > 270 &&
        el.classList.contains("about-section-div2-active") === false
      ) {
        el.classList.add("about-section-div2-active");
        window.removeEventListener("scroll", actualEvent);
      }
    } catch {
      console.log("err");
      window.removeEventListener("scroll", actualEvent);
    }
  };
  window.addEventListener("scroll", actualEvent);
};

export const sectionIn = () => {
  document.querySelector("#About").classList.add("section-in");
};

export const scrollToBottom = () => {
  setTimeout(() => {
    try {
      jump(".toy-logo-img2", {
        duration: 1500,
      });
    } catch {
      console.log("err");
    }
  }, 800);
};
