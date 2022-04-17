let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

let echogenicity = form.elements.echogenicity.value;
console.log(echogenicity)
let ductusWidth = form.elements.ductusWidth.value;

let textArea = form.elements.textArea.value;

let reportText = ""

if (echogenicity) {
reportText += `Kasa aplink esantiems riebalams yra ${echogenicity}. `
};

if (ductusWidth) {
    reportText += `Kasos latako plotis yra ${ductusWidth} cm. `
};

if (textArea) {
    reportText += textArea
};

  text.innerText = reportText;

  sessionStorage.setItem("kasa", reportText);
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});
