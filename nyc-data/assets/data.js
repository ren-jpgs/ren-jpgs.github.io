const dataUrl='https://data.cityofnewyork.us/resource/3q43-55fe.json'


const parseData = (data) => {
	let colorGray = 0

	// console.log(data)
}

fetch(dataUrl + '?$limit=5000&city=')
	.then(response => response.json())
	.then(data =>{
		 parseData(data)
})

rats.forEach(rat => {
	if (rat.primary_fur_color)
})