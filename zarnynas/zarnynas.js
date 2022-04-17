let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let duodenumWallWidth = form.elements.duodenumWallWidth.value;

  let duodenumTextArea = form.elements.duodenumTextArea.value;

  let jejunumWallWidth = form.elements.jejunumWallWidth.value;

  let jejunumTextArea = form.elements.jejunumTextArea.value;

  let ileumWallWidth = form.elements.ileumWallWidth.value;

  let ileumTextArea = form.elements.ileumTextArea.value;

  let cecumWallWidth = form.elements.cecumWallWidth.value;

  let cecumTextArea = form.elements.cecumTextArea.value;

  let reportText = "";

  if (duodenumWallWidth) {
    reportText += `Dvylikapirštės žarnos sienelės storis yra ${duodenumWallWidth} cm.`;
  }

  if (duodenumTextArea) {
    reportText += duodenumTextArea;
  }

  if (jejunumWallWidth) {
    reportText += `Tusčiosios žarnos sienelės storis yra ${jejunumWallWidth} cm. `;
  }

  if (jejunumTextArea) {
    reportText += jejunumTextArea;
  }

  if (ileumWallWidth) {
    reportText += `Aklosios žarnos sienelės storis ties ileocekaline jungtimi yra ${ileumWallWidth} cm. `;
  }

  if (ileumTextArea) {
    reportText += ileumTextArea;
  }

  if (cecumWallWidth) {
    reportText += `Storosios žarnos sienelės storis yra ${cecumWallWidth} cm. `;
  }

  if (cecumTextArea) {
    reportText += cecumTextArea;
  }

  text.innerText = reportText;

  sessionStorage.setItem("zarnynas", reportText);
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});
