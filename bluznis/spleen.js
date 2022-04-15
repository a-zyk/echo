let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    let spleen = form.elements.spleen.value;

    let spleenToLiver = form.elements.spleentoliver.value;

    let spleenCorner = form.elements.spleenCorner.value;

    let textArea = form.elements.textArea.value;

    let reportText = "";

    if (spleen) {
reportText += `Blužnies parenchima yra ${spleen}. `
    };

    if (spleenToLiver) {
        reportText += `Blužnies parenchima lyginant su kepenimis yra ${spleenToLiver}. `
    };

    if (spleenCorner) {
        reportText += `Kraštai ${spleenCorner}. `
    };

    if (textArea) {
        reportText += textArea;
    }

    text.innerText = reportText;

    localStorage.setItem("bluznis", reportText)
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});


