var caesar = function(string, shift) {
	return string
								.split("")
								.map(char => shiftCharacter(char, shift) )
								.join("");	
}

// Check the case of the letter
function upperOrLowerCase (char) {
	if (char.charCodeAt() < 97) {
		return 65;
	} else {
		return 97;
	}
}

// Get the character code
function getCharCode (char) {
	return char.charCodeAt();
}

// Shift the character 
function shiftCharacter (char, shift) {
	let code = getCharCode(char);  // get the ascii code for the character
	let charCase = upperOrLowerCase(char); 	// determine upper or lower case, and set 'a' or 'A' as the starting point for the shift
	if ( (code > 64 && code < 91) || (code > 96 && code < 123) ) {    // if A-Z or a-z
	let shiftedChar = (code + shift - charCase) % 26 + charCase;  // wrap around alphabet if necessary (the % gets the amount of shift, starting from the letter 'a', and charCase starts the count from 'a'). If the shift is past the last letter, it starts the count from 'a'. If it doesn't wrap around, you're getting the same number you would get if you added the charCode and shift together anyway. 
	return String.fromCharCode(shiftedChar);	// return the string corresponding to the number code
	} else {
		return char; 	// otherwise, just return the character without modifying it
	}

}


module.exports = caesar


