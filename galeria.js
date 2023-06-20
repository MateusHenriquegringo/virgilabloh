const moreImagesList = document.querySelectorAll(".more-images");

moreImagesList.forEach((moreImages) => {
  moreImages.addEventListener("click", () => {
    const hideDiv = moreImages.nextElementSibling;
    const isVisible = hideDiv.classList.contains("show");

    hideDiv.classList.toggle("show");
    moreImages.textContent = isVisible ? "Mais Imagens" : "Menos Imagens";
  });
});

let spans = Array.from(document.querySelectorAll("#conteiner span"));
let contents = spans.map((element) => element.getAttribute("id") + "-content");

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    contents.forEach((contentId) => {
      document.getElementById(contentId).classList.add("hide");
    });
    document.getElementById(contents[index]).classList.remove("hide");
  });
});
