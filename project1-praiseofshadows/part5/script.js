let eng = document.querySelector(".eng");
let sen1jap = document.querySelector("#sen1jap");
let eng2 = document.querySelector(".eng2");
let sen2jap = document.querySelector("#sen2jap");
let eng3 = document.querySelector(".eng3");
let sen3jap = document.querySelector("#sen3jap");
let eng4 = document.querySelector(".eng4");
let sen4jap = document.querySelector("#sen4jap");

function hover1(){
	eng.style.opacity ="1";
}

function hover2(){
	eng2.style.opacity ="1";
}

function hover3(){
	eng3.style.opacity ="1";
}

function hover4(){
	eng4.style.opacity ="1";
}
sen4jap.addEventListener("mouseover", hover4);
sen3jap.addEventListener("mouseover", hover3);
sen2jap.addEventListener("mouseover", hover2);
sen1jap.addEventListener("mouseover", hover1);

var element = document.querySelector(".door");
element.addEventListener("mouseover", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

