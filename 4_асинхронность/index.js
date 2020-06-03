console.log('One')

console.log('Two')


window.setTimeout(function (){
	console.log('Out after 5second')
}, 5000)



setTimeout(out2s, 2000)

console.log('END')

function out2s() {
	console.log('out after 2000ms')
}