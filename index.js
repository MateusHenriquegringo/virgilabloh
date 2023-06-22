window.addEventListener("scroll", function () {
  let top = document.getElementById("top");
let responsive = document.getElementById("responsive");
  responsive.classList.toggle("scrolled", window.scrollY > 200)
  top.classList.toggle("scrolled", window.scrollY > 200);
});

//DARK MODE
let body = document.getElementById("body");
let alterarTema = document.getElementById("chk");
const darkModeStorage = localStorage.getItem("gmtDarkMode");

if (darkModeStorage) {
  body.classList.add("dark-mode");
  alterarTema.checked = true;
}
alterarTema.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("gmtDarkMode", true);
    return;
  }
  localStorage.removeItem("gmtDarkMode");
});

let sections = Array.from(document.getElementsByTagName("section")).map(
  (element) => {
    element.classList.add("hidden");
    return element;
  }
);

const observer = new IntersectionObserver(
  (entries) => {
    Array.from(entries).forEach((entry) => {
      if (entry.intersectionRatio >= 0.2) {
        entry.target.classList.add("hidden-off");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((element) => {
  observer.observe(element);
});
let images = Array.from(document.querySelectorAll('main img'))
images.forEach(image => {
  image.setAttribute("draggable", "false")
})
