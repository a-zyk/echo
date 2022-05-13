let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let rechogenicity = form.elements.rechogenicity.value;

  let rightAdrenalLength = form.elements.rightAdrenalLength.value;

  let rightAdrenalFrontWidth = form.elements.rightAdrenalFrontWidth.value;

  let rightAdrenalBackWidth = form.elements.rightAdrenalBackWidth.value;

  let rTextArea = form.elements.rTextArea.value;

  let lechogenicity = form.elements.lechogenicity.value;

  let leftAdrenalLength = form.elements.leftAdrenalLength.value;

  let leftAdrenalFrontWidth = form.elements.leftAdrenalFrontWidth.value;

  let leftAdrenalBackWidth = form.elements.leftAdrenalBackWidth.value;

  let lTextArea = form.elements.rTextArea.value;

  let reportText = "";

  if (rechogenicity) {
    reportText += `Dešinio prieinksčio žievė aplinkui esantiems riebalams yra ${rechogenicity}. `;
  }

  if (rightAdrenalLength) {
    reportText += `Dešinio prieinksčio ilgis yra ${rightAdrenalLength} cm. `;
  }

  if (rightAdrenalFrontWidth) {
    reportText += `Priekinio poliaus plotis yra ${rightAdrenalFrontWidth} cm. `;
  }

  if (rightAdrenalBackWidth) {
    reportText += `Galinio poliaus plotis yra ${rightAdrenalBackWidth}`;
  }

  if (rTextArea) {
    reportText += rTextArea;
  }

  if (lechogenicity) {
    reportText += `Kairiojo prieinksčio žievė aplinkui esantiems riebalams yra ${lechogenicity}. `;
  }

  if (leftAdrenalLength) {
    reportText += `Prieinksčio ilgis yra ${leftAdrenalLength} cm. `;
  }

  if (leftAdrenalFrontWidth) {
    reportText += `Priekinio poliaus plotis yra ${leftAdrenalFrontWidth} cm. `;
  }

  if (rightAdrenalBackWidth) {
    reportText += `Galinio poliaus plotis yra ${leftAdrenalBackWidth} cm. `;
  }

  if (lTextArea) {
    reportText += lTextArea;
  }




  text.innerText = reportText;

  sessionStorage.setItem("prieinksciai", reportText);
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});
