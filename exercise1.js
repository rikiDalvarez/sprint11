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
function printUser(string) {
	let name = `${string}`
	return name;
}

//nivel 3
//exercise 1
function countTo10() {
	let funcArray = [
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
		() => {
			for (let i = 0; i < 10; i++) {
				console.log(i)
			}
		},
	];

	for (let j = 0; j < funcArray.length; j++) {
		funcArray[j]();
	}
}

//exercise 3
//nivel 2

const logUser = ((userName) => {
	console.log(`this is the username: ${userName}`)
})();

countTo10()