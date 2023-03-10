let garden = document.querySelector("#garden")
let flower = [
    {name: "Dahlia", amount:345},
    {name: "Poppy", amount:320},
    {name: "Rose", amount:234},
    {name: "Daisy", amount:500},
    {name: "Lavendar", amount:50},
    {name: "Tulip", amount:1000}
]
let i = 0;
function displayFlowers(flower){
    let newItem = document.createElement("div")
    let flowerDiv = garden.appendChild(newItem)
i++
newItem.classList.add("flower")
newItem.classList.add("flower" + [i])
flowerDiv.innerHTML =  flower.name + "-" + flower.amount
flowerDiv.style.height = flower.amount + "px";
}

displayFlowers.forEach(displayFlowers)