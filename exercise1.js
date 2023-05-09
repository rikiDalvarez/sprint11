//nivel 1
//- Exercici 1
function printUser(string) {
	console.log(`this is the username: ${string}`)
}

//nivel 2
//- Exercici 1
function printUserComplete(firstName, secondName) {
	const fullName = `${firstName} + "" + ${secondName} `
	console.log(`this is the user full name ${fullName}`)
}

//nivel 2
//exercici 2
const printHello = (string) => {
	return `hello my name is ${string}`
}

const saludo = printHello("John")

console.log(`${saludo}`)


//nivel 3
//exercise 1

function countTo10() {
	let array = [];

	function count() {
		for (let i = 0; i < 10; i++) {
			console.log(i)
		}
	}
	for (let i = 0; i < 10; i++) {
		array.push(count)
	}

	for (let j = 0; j < array.length; j++) {
		array[j]();
	}
}

countTo10()

//exercise 3
//nivel 2

const logUser = (() => {
	userName = "riki"
	console.log(`this is the username: ${userName}`)
})();
