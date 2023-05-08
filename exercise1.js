function printUser(string) {
	console.log(`this is the username: ${string}`)
}

function printUserComplete(firstName, secondName) {
	const fullName = `${firstName} + "" + ${secondName} `
	console.log(`this is the user full name ${fullName}`)
}

function countTo10() {
	let n = 0;
	while (n < 10) {
		console.log(n)
		n++;
	}
}

const logUser = (userName) => {
	console.log(`this is the username: ${userName}`)
}
countTo10()