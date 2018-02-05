var palindromes = function(str) {
	// this strips any non characters or digits from the string. and converts to lower case for easier comparison
	var newString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	var reversed = newString.toLowerCase().split("").reverse().join("");
	return newString == reversed ? true: false;
}

module.exports = palindromes
