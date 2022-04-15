let form = document.querySelector(".form");

let btn = document.querySelector(".btnSubmit");

let text = document.querySelector(".text");

btn.addEventListener("click", function (e) {
  e.preventDefault();



  text.innerText = reportText;

  localStorage.setItem("zarnynas", reportText);
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function (e) {
  e.preventDefault();
  text.innerText = "";
});
