// slapimo pusle
let bladder = document.querySelector(".bladder");

let bladderText = sessionStorage.getItem("slapimop");

bladder.innerHTML = bladderText;
// slapimo pusle

// Inkstai
let kidneys = document.querySelector(".kidneys");

let kidneysText = sessionStorage.getItem("inkstai");

kidneys.innerHTML = kidneysText;
// Inkstai

// Bluznis
let spleen = document.querySelector(".spleen");

let spleenText = sessionStorage.getItem("bluznis");

spleen.innerHTML = spleenText;
// Bluznis

// Kepenys
let liver = document.querySelector(".liver");

let liverText = sessionStorage.getItem("kepenys");

liver.innerHTML = liverText;
// Kepenys

// Skrandis

let stomach = document.querySelector(".stomach");

let stomachText = sessionStorage.getItem("skrandis");

stomach.innerHTML = stomachText;

// Skrandis

//  zarnynas
let intestines = document.querySelector(".intestines");

let intestinesText = sessionStorage.getItem("zarnynas");

intestines.innerHTML = intestinesText;
// zarnynas

// prieinksciai
let adrenals = document.querySelector(".adrenals");

let adrenalsText = sessionStorage.getItem("prieinksciai");

adrenals.innerHTML = adrenalsText;
// prieinksciai

// kasa

let pancreas = document.querySelector(".pancreas");

let pancreasText = sessionStorage.getItem("kasa");

pancreas.innerHTML = pancreasText;