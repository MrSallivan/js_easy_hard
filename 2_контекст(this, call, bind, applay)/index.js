function hello() {
	console.log('hello' , this) //контекст windows
}

const person = {
	name: 'MAXIM',
	age: 36,
	sayHello: hello, //контекст объект person
	sayHelloWindow: hello.bind(document),
	logInfo: function(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is : ${this.name}`)
		console.log(`Age is : ${this.age}`)
		console.log(`Job is : ${job}`)
		console.log(`Phone is : ${phone}`)
		console.groupEnd()
	}
}
 
const lena = {
	name: 'Lena',
	age: 45
}
const pukFn = person.logInfo.bind(lena, "asd", '454545') //1
pukFn("asd", '454545') // 2

person.logInfo.call(lena, "asd", '454545') //call
person.logInfo.apply(lena, ["asd", '454545']) //applay  в массиве может быть множество параметров

//=============
const array = [1,2,3,4,5,6]

// function multBuy(arr, n) {
// 	return arr.map(function(i) {
// 		return i * n
// 	})
// }
// console.log(multBuy(array, 3))

Array.prototype.multBuy = function(n) {
	return this.map(function(i){
		return i *n
	})
}
console.log(array.multBuy(5))