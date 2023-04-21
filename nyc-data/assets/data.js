// Your data URL
const url = 'https://data.cityofnewyork.us/resource/3q43-55fe.json'
const graph = document.querySelector('#graph') // Get out graph element (`const`, does not change)
const dropdown = document.querySelector('#shift') // Get the dropdown menu

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
		if (rat.borough == 'Brooklyn') brooklynCount = brooklynCount + 1 // Increment the counter
		// if (rat.borough == 'brooklyn') brooklynCount++ // Shorthand for incrementing
        else if (rat.borough == 'Manhattan') manhattanCount = manhattanCount + 1
		else if (rat.borough == 'Bronx') bronxCount = bronxCount + 1
		else if (rat.borough == 'Queens') queensCount = queensCount + 1
        else if (rat.borough == 'Statenisland') statenislandCount = statenislandCount + 1
		else if (rat.borough == 'Unspecified') unspecifiedCount = unspecifiedCount + 1
        else if (rat.borough == 'novalue') novalueCount = novalueCount + 1
	})

	// Some telemetry!
	console.log('Brooklyn: ' + brooklynCount)
    console.log('Manhattan: ' + manhattanCount)
	console.log('Bronx: ' + bronxCount)
	console.log('Queens: ' + queensCount)
    console.log('Statenisland: ' + statenislandCount)
	console.log('Unspecified: ' + unspecifiedCount)
    console.log('novalue: ' + novalueCount)

	// Add CSS variables (custom properties) on the graph, with the counts
	graph.style.setProperty('--Brooklyn', brooklynCount)
    graph.style.setProperty('--Manhattan', manhattanCount)
	graph.style.setProperty('--Bronx', bronxCount)
	graph.style.setProperty('--Queens', queensCount)
    graph.style.setProperty('--Statenisland', statenislandCount)
    graph.style.setProperty('--Unspecified', unspecifiedCount)
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


// Go get the data!
fetch(url + '?$limit=250000') // Appends a higher limit; the default is only 1000
	.then(response => response.json())
	.then(data => {
			localData = data // Save the data to our local variable, so we don’t have to re-request
			parseData(localData) // And parse it!
		})