// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		
		// // You can make each element inside of that…
		// const itemTitle = document.createElement('h2') // Make an `h2`
		// itemTitle.innerHTML = item.name // Put the JSON title inside
		// listItem.appendChild(itemTitle) // And add it to the `li`!

		// const itemImage = document.createElement('img') // And an image
		// itemImage.src = item.mugImage // Set the `src` attribute from the JSON
		// listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			<div class="mug">
            <img src="${item.mugImage}">
            <div class="info">
			<div class="popup">
			<button class="close">x</button>
			<div class="thumbnail"><img src="${item.mugImage}"/></div>
			<div class="information">
            <h1 id="name">${item.name}</h1>
			<div class="line"><span id="title">where is it from? </span><span id="text">${item.where}</span><br></div>
			<div class="line"><span id="title">How much was it? </span><span id="text">${item.cost}</span><br></div>
            <div class="line"><span id="title">What do you like about it? </span><span id="text">${item.likes}</span><br></div>
            <div class="line"><span id="title">Beverage of choice: </span><span id="text">${item.beverage}</span><br></div>
            </div>
			</div>
			</div>
            </div>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	
		document.addEventListener('click', event => {
			// check if the clicked element is a parent div
			const mug = event.target.closest('.mug');
			if (mug) {
			  // toggle the "visible" class on the child div of the clicked parent div
			  const infoDiv = mug.querySelector('.info');
			  infoDiv.classList.toggle('visible');
			}
		  });

		//   function hide(){
		// 	let body = document.querySelector('body');
		// 	let infoDiv = document.querySelector(".info");
		// 	infoDiv.style.display = "none";
		//   }

		//   body.addEventListener ("click", hide);
		
let mug = document.querySelector(".mug")
		let infoDiv = document.querySelector(".info")
		mug.addEventListener("click",function() { 
	    infoDiv.classList.toggle (".visible") 
		console.log("click")
		})	
	})
		
}


	
		




// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})

	