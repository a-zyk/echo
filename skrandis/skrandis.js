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

let peristalsis = form.elements.persitalsis.value;

let stomachTextArea = form.elements.stomachTextArea.value;

if (stomachSize) 

    text.innerText = reportText;

    localStorage.setItem("skrandis", reportText)
 });
 
 let clear = document.querySelector(".clear");
 
 clear.addEventListener("click", function (e) {
   e.preventDefault();
   text.innerText = "";
 });