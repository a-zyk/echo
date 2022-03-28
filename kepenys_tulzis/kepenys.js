let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let liverParenchyma = form.elements.liverParenchyma.value;

  let liverSpleen = form.elements.liverSpleen.value;

  let liverTips = form.elements.liverTips.value;

  let liverVasc = form.elements.liverVasc.value;

  let liverTextArea = form.elements.liverTextArea.value;

  let reportText = "";

  if (liverParenchyma) {
    reportText += `Kepenų parenchima yra ${liverParenchyma},`;
  }

  if (liverSpleen) {
    reportText += ` ${liverSpleen} lyginant su blužnimi. `;
  }

  if (liverTips) {
    reportText += ` Kepenų skilčių kraštai ${liverTips}.`;
  }

  if (liverVasc) {
    reportText += ` Kraujagyslės ${liverVasc}.`;
  }

  if (liverTextArea) {
    reportText += liverTextArea;
  }

  // tulzis start
  let wall = form.elements.wall.value;

  let ductus = form.elements.ductus.value;

  let gallDuctusWallWidth = form.elements.gallDuctusWallWidth.value;

  let gTextArea = form.elements.gTextArea.value;

  if (wall) {
    reportText += `Tulžies pūslės sienelė ${wall}. `;
  }

  if (ductus && gallDuctusWallWidth) {
    reportText += ` Bendrasis tulžies latakas yra ${ductus}, skersmuo ${gallDuctusWallWidth} cm.`;
  } else if (ductus) {
    reportText += ` Bendrasis tulžies latakas yra ${ductus}.`;
  } else if (gallDuctusWallWidth) {
    reportText += ` Bendrojo tulžies latako skersmuo ${gallDuctusWallWidth}.`;
  }

  if(gTextArea) {
      reportText += gTextArea;
  }
  // tulzis end

  text.innerText = reportText;
  localStorage.setItem('kepenys', reportText)
});


