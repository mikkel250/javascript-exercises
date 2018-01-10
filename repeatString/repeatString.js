var repeatString = function(string, multiple) {
	let stringArray = [];
	if (multiple < 0) {
		return "ERROR";
	}
	for (let i = 0; i < multiple; i++) {
		stringArray.push(string);
	}
	return stringArray.join("");
}

module.exports = repeatString
