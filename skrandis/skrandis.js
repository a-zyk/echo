let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
    e.preventDefault();

let stomachSize = form.elements.stomachSize.value;

let wallWidth = form.elements.stomachWallWidth.value;

let stomachWall = form.elements.stomachWall.value;

let pylorusWidth = form.elements.pylorusWidth.value;

let pylorusWallWidth = form.elements.pylorusWallWidth.value;

let peristalsis = form.elements.peristalsis.value;

let stomachTextArea = form.elements.stomachTextArea.value;

let reportText = "";

if (stomachSize) {
    reportText += `Skrandis yra ${stomachSize}. `
};

if (wallWidth) {
    reportText += `Skrandžio sienelės storis yra ${wallWidth} cm. `
};

if (stomachWall) {
    reportText += `Skrandžio sienelės sluoksniai ${stomachWall}.  `
};

if (pylorusWidth) {
    reportText += `Skrandžio sienelė pylorus srityje ${pylorusWidth}. `
};

if (pylorusWallWidth) {
    reportText += `Sienelės storis pylorus srityje yra ${pylorusWallWidth} cm. `
}

if (peristalsis) {
    reportText += `Skrandžio peristaltika pylorys srityje yra ${peristalsis} k/min. `
};

if (stomachTextArea) {
    reportText += stomachTextArea
};


    text.innerText = reportText;

    sessionStorage.setItem("skrandis", reportText)
 });
 
 let clear = document.querySelector(".clear");
 
 clear.addEventListener("click", function (e) {
   e.preventDefault();
   text.innerText = "";
 });