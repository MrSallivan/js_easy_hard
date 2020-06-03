console.log('Request data...')

// setTimeout(()=>{
// 	console.log('Preparing data...')

// 	const backendData = {
// 		server: 'aws',
// 		port: 2000,
// 		status: 'working'
// 	}

// 	setTimeout(()=>{
// 		backendData.modified = true 
// 		console.log('Data recieved', backendData)
// 	}, 2000)

// }, 2000)
//Промисы должны решать данную задачу

const p = new Promise(function(resolve, reject) {
	setTimeout(()=>{
		console.log('Preparing data...')

		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backendData)
	}, 2000)
	
}) 

// p.then((backendData) => {
// 	console.log('Promise resolve', backendData)
// })

// p.then((data) =>{
// 	const p2 = new Promise( (resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true
// 			resolve(data)
// 			// console.log('Data recieved', data)
// 		}, 2000)
// 	})
// 	p2.then( clientData => {
// 		console.log('data recieve', clientData)
// 	})
// })
//можно записать иначе 
p
	.then( data => {
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				data.modified = true
				resolve(data)
			}, 2000)

		})
	})
	.then( clientData => {
		console.log('data resieve', clientData)
	})