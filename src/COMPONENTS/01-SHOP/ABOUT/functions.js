export const scrollPosition = () => {
  const actualEvent = (event) => {
    const el = document.querySelector(".about-section-div2");
    if (
      window.scrollY > 270 &&
      el.classList.contains("about-section-div2-active") === false
    ) {
      el.classList.add("about-section-div2-active");
      window.removeEventListener("scroll", actualEvent);
    }
  };
  window.addEventListener("scroll", actualEvent);
};

export const sectionIn = () => {
  document.querySelector("#About").classList.add("section-in");
};
