// Your data URL
const url = 'https://data.cityofnewyork.us/resource/3q43-55fe.json'
const graph = document.querySelector('#graph') // Get out graph element (`const`, does not change)
const dropdown = document.querySelector('#shift') // Get the dropdown menu
const brooklyndiv = document.querySelector(".brooklyn")
const manhattandiv = document.querySelector(".manhattan")

let localData = [] // Set up an empty object for our local data (`let` because it will change)

// Do something with the data!
const parseData = (data) => { 
	// Set up variables for the counts
	let brooklynCount = 0 // These are `let` because they will change
	let manhattanCount = 0
	let bronxCount = 0
	let queensCount = 0
    let statenislandCount = 0
    let unspecifiedCount = 0
    let novalueCount = 0

	// Go through each item in the object
	data.forEach(rat => {
		if (rat.borough == 'BROOKLYN') brooklynCount = brooklynCount + 1 // Increment the counter
		// if (rat.borough == 'brooklyn') brooklynCount++ // Shorthand for incrementing
        else if (rat.borough == 'MANHATTAN') manhattanCount = manhattanCount + 1
		else if (rat.borough == 'BRONX') bronxCount = bronxCount + 1
		else if (rat.borough == 'QUEENS') queensCount = queensCount + 1
        else if (rat.borough == 'STATEN ISLAND') statenislandCount = statenislandCount + 1
		else if (rat.borough == 'Unspecified') unspecifiedCount = unspecifiedCount + 1
        else novalueCount = novalueCount + 1
	})

	// Some telemetry!
	console.log('Brooklyn: ' + brooklynCount)
    console.log('Manhattan: ' + manhattanCount)
	console.log('Bronx: ' + bronxCount)
	console.log('Queens: ' + queensCount)
    console.log('Staten Island: ' + statenislandCount)
	console.log('Unspecified: ' + unspecifiedCount)
    console.log('Novalue: ' + novalueCount)

const boroughCounts = [
	{ borough: 'Brooklyn', count: brooklynCount },
	{ borough: 'Manhattan', count: manhattanCount },
	{ borough: 'Bronx', count: bronxCount },
	{ borough: 'Queens', count: queensCount },
	{ borough: 'Staten Island', count: statenislandCount }
  ];
  const dividedBoroughCounts = boroughCounts.map(item => ({
	borough: item.borough,
	count: item.count / 10000
  }));
  console.log(dividedBoroughCounts)

	// Add CSS variables (custom properties) on the graph, with the counts
	brooklyndiv.style.setProperty('--brooklyn', brooklynCount)
    manhattandiv.style.setProperty('--manhattan', manhattanCount)
	graph.style.setProperty('--bronx', bronxCount)
	graph.style.setProperty('--queens', queensCount)
    graph.style.setProperty('--statenisland', statenislandCount)
    graph.style.setProperty('--unspecified', unspecifiedCount)
	graph.style.setProperty('--novalue', novalueCount)
}

	

// Watch for any change on the dropdown
// dropdown.oninput = () => {
// 	// Filter the locally-copied data
// 	const localDataAm = localData.filter(rat => squirrel.shift == 'AM')
// 	const localDataPm = localData.filter(squirrel => squirrel.shift == 'PM')

// 	// Parse either set depending on the dropdown value
// 	if (dropdown.value == 'Morning') parseData(localDataAm)
// 	else if (dropdown.value == 'Afternoon') parseData(localDataPm)
// 	else parseData(localData) // Send the whole, unfiltered dataset
// }


// // Go get the data!
// fetch(url + '?$limit=250000') // Appends a higher limit; the default is only 1000
// 	.then(response => response.json())
// 	.then(data => {
// 		localData = data // Save the data to our local variable, so we don’t have to re-request
// 		parseData(localData) // And parse it!
		
// 		console.log(dividedBoroughCounts) // Display dividedBoroughCounts here

// 	})



// This got pretty complicated, but it should make the API less annoying! 🤞
caches.open('cachedData') // Set up a cache for our data
	.then(cache => {
		// See if there is already a cached response for our dataset
		cache.match(url)
			.then(response => response.json())
			.then(data => {
				console.log('Loading data from cache…')
				localData = data // Save the data out to our local, global variable
				parseData(localData) // And parse it!
			})
			// If there is not a cache, let’s get and make one
			.catch(error => {
				fetch(url + '?$select=count(*)') // First, go get the total number of rows (entries)
					.then(response => response.json())
					.then(data => {
						let rowCount = data[0].count // Get the count out of this response
						// Use the count as the limit for the API request, to get the full dataset
						fetch(url + '?$limit=' + rowCount)
							.then(response => {
								cache.put(url, response.clone()) // Cache a copy for next time
								return response.json()
							})
							.then(data => {
								console.log('Loading data from API…')
								localData = data // Same as above!
								parseData(localData)
							})
					})
			})
	})

	brooklyndiv.setAttribute('data-count', brooklynCount);
	manhattandiv.setAttribute('data-count', manhattanCount);
	bronxdiv.setAttribute('data-count', bronxCount);
	queensdiv.setAttribute('data-count', queensCount);
	statenislanddiv.setAttribute('data-count', statenislandCount);
	unspecifieddiv.setAttribute('data-count', unspecifiedCount);
	novaluediv.setAttribute('data-count', novalueCount);

	
	