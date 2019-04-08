const BASE = 'http://localhost:3000'

let getCats = function() {
	return fetch(BASE + '/cats')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  //stringify the json for fetch
		headers: {  //sending JSON, expect JSON back; info about the content
			'Content-Type': 'application/json'
		},
		method: "POST"  //correct endpoint invoked on server
	})
		.then((resp) => { //promise
			let json = resp.json()
			return json
		})
}

let deleteCat = function(cat) {
	return fetch(`${BASE}/cats/${cat.id}`, {
		body: JSON.stringify(cat),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "Delete"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	getCats
}

export  {
	createCat
}

export  {
	deleteCat
}
