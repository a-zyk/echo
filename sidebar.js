let sectionNames = document.querySelectorAll(".section-name");

sectionNames.forEach(function (sectionName) {
  sectionName.addEventListener("click", function () {
    const content = sectionName.parentElement.querySelector(".section-text");
    content.classList.toggle("section-textshow");
  });
});

let subsections = document.querySelectorAll(".subsection-name");

subsections.forEach(function (subsection) {
  subsection.addEventListener("click", function (e) {
    const subcontent =
      subsection.parentElement.querySelector(".subsection-text");
    subcontent.classList.toggle("subsection-textshow");
  });
});
