function add (a, b) {
	let result = a + b;
	return result;
}

function subtract (a, b) {
	let result = a - b;
	return result;
}

function sum (array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result = result + array[i];
	}
	return result;
}

function multiply () {
	var result = 1;
	for (let i = 0; i < arguments.length; i++) {
		
		result = result * arguments[i];
		}
		return result;
}

function power(a, b) {
	let result = a ** b;
	return result;
}

function factorial(n) {
	if (n < 0) {
		return -1;
	} 	else if (n == 0) {
			return 1;
			} else {
				return (n * factorial(n - 1));	
				}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}