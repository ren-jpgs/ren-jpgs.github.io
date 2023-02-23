var element = document.querySelector(".door");
element.addEventListener("mouseover", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}