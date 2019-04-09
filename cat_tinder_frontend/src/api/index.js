const BASE = 'http://localhost:3000'

let getCats = () => {
	return fetch(BASE + '/cats')
	.then((resp) => { //promise
		if (resp.status === 200 ) {
			return resp.json()
		} else {
			throw 'unable to view. try again'
		}
	})
	.catch(e=> alert(e))
}

let createCat = (cat) => {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  //stringify the json for fetch
		headers: {  //sending JSON, expect JSON back; info about the content
			'Content-Type': 'application/json'
		},
		method: "POST"  //correct endpoint invoked on server
	})
		.then((resp) => { //promise
			if (resp.status === 200 ) {
				return resp.json()
			} else {
				throw 'unable to create. try again'
			}
		})
		.catch(e=> alert(e))
}

let deleteCat = (id) => {
	return fetch(`${BASE}/cats/${id}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "DELETE"
	})
	.then((resp) => { //promise
		if (resp.status === 200 ) {
			return resp.json()
		} else {
			throw 'unable to delete. try again'
		}
	})
	.catch(e=> alert(e))
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
