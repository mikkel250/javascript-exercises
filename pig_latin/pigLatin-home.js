function translate(string) {
	const vowels = "aeiouAEIOU";
	let translatedString = [];
	var splitString = string.split("");
	for (let i = 0; i < splitString.length; i++) {
		if (vowels.indexOf(splitString[i] !== -1)) { // if the string index does match the list of vowels
			translatedString = [...string,"ay"];
			return translatedString.join("");
		} else {
			splitString[0]
		}
	}
}


module.exports = {
	translate
}

