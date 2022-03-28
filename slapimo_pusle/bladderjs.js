let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {

        e.preventDefault();
    
    let bladderWall = form.elements.bladderWall.value;
    
    let bladderWallThickness = form.elements.bladderWallThickness.value;

    let textArea = form.elements.textArea.value;

    let reportText = "";

    if (bladderWall) {
        reportText += ` Šlapimo pūslės sienelė yra ${bladderWall}.`
    };

    if (bladderWallThickness) {
        reportText += ` Sienelės storis yra ${bladderWallThickness} cm. `
    };

    if (textArea) {

reportText += textArea;

text.innerText = reportText;
    }


    
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});


