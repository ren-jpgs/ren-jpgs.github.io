let eng = document.querySelector(".eng");
let sen1jap = document.querySelector("#sen1jap");
let eng2 = document.querySelector(".eng2");
let sen2jap = document.querySelector("#sen2jap");
let eng3 = document.querySelector(".eng3");
let sen3jap = document.querySelector("#sen3jap");


function hover1(){
	eng.style.opacity ="1";
}

function hover2(){
	eng2.style.opacity ="1";
}

function hover3(){
	eng3.style.opacity ="1";
}


sen3jap.addEventListener("mouseover", hover3);
sen2jap.addEventListener("mouseover", hover2);
sen1jap.addEventListener("mouseover", hover1);

