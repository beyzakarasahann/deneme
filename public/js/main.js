const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(246, 243, 238, 0.9)";
    header.style.backdropFilter = "blur(8px)";
    header.style.borderBottom = "1px solid var(--border)";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
    header.style.borderBottom = "none";
  }
});
