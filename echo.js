
let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Right kidney
  let rechogenicity = form.elements.rechogenicity.value;

  let rLength = form.elements.rKidneyLength.value;
 
  let rWidth = form.elements.rWidth.value;

  let rTextArea = form.elements.rTextArea.value;

  let rPelvis = form.elements.rPelvis.value;

  let rPelvisWidth = form.elements.rPelvisWidth.value;

  let reportText = "";

  if (rechogenicity) {
    reportText += ` Dešinio inksto žievė kepenims yra ${rechogenicity}.`;
  }

  if (rLength && rWidth) {
    reportText += ` Inksto dydis ${rLength} x ${rWidth} cm.`;
  } else if (rLength && !rWidth) {
    reportText += ` Inksto ilgis ${rLength} cm.`;
  } else if (!rLength && rWidth) {
    reportText += ` Inksto plotis ${rWidth} cm.`;
  }

if (rPelvis ) {
    reportText += ` Inksto geldelė yra ${rPelvis}.`
}

if (rPelvisWidth) {
    reportText += ` Geldelės plotis skersiniame pjūvyje yra ${rPelvisWidth} cm.`
}


  if (rTextArea) {
      reportText+= rTextArea
  }

// Right kidney end

// Left kidney
let echogenicity = form.elements.echogenicity.value;

let length = form.elements.kidneyLength.value;

let width = form.elements.width.value;

let textArea = form.elements.textArea.value;

let pelvis = form.elements.pelvis.value;

let pelvisWidth = form.elements.pelvisWidth.value;


if (rechogenicity) {
  reportText += ` Kairio inksto žievė blužniai yra ${rechogenicity}.`;
}

if (length && width) {
  reportText += ` Inksto dydis ${length} x ${width} cm.`;
} else if (length && !width) {
  reportText += ` Inksto ilgis ${length}`;
} else if (!length && width) {
  reportText += ` Inksto plotis ${width}`;
}

if (pelvis ) {
  reportText += ` Inksto geldelė yra ${pelvis}.`
}

if (pelvisWidth) {
  reportText += ` Geldelės plotis skersiniame pjūvyje yra ${pelvisWidth} cm.`
}


if (textArea) {
    reportText+= textArea
}


// Left kidney end

   text.innerText = reportText;

   sessionStorage.setItem("inkstai", reportText)
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});

