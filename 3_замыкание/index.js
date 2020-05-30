// function createCalcFunction(n) {
// 	return function() {
// 		console.log(1000 *n)
// 	}
// }
// const calc = createCalcFunction(42)
// console.log(calc())

// function createIncrementor(n) {
// 	return function(num) {
// 		return n * num
// 	}
// }

// const incTen = createIncrementor(10)
// console.log(incTen(12))

//==================================

function bind(context, fn) {
	return function(...args) {
		fn.apply(context, args )
	}
}
function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: 'Mihail', age: 23, job: 'loh'}
const person2 = { name: 'Masha', age: 43, job: 'SMM' }

bind(person1, logPerson)()
bind(person2, logPerson)()