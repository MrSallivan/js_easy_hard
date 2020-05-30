// const person = {
// 	name: 'MAXIM',
// 	age: 36,
// 	greet() {
// 		console.log("Greet")
// 	}
// }
const person = new Object({
	name: 'MAXIM',
	age: 36,
	greet() {
		console.log("Greet")
	}
})
Object.prototype.sayHello = function () {
	console.log('hello')
}
const lena = Object.create(person)
lena.name = 'Elena'

const str = 'string'
