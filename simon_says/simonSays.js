function echo(str) {
	return str;
}


function shout(str) {
	return str.toUpperCase();
}


function repeat(str, multiple) {
	if (multiple < 0) {
		return "ERROR";
	} else if (multiple == null) {
		return str + " " + str;
	}

	let strArray = [];
	for (let i = 0; i < multiple; i++) {
		strArray.push(str);
	}
	return strArray.join(" ");
}


function pieceOfWord(str, numberOfLetters) {
	let strArray = [];
	for (let i = 0; i < numberOfLetters; i++) {
		strArray.push(str[i]);
	}
	return strArray.join("");
}

function firstWord(str) {
	let strArray = str.split(" ");
	return strArray[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}


function titleCreator(str) {
	// first split up the string on the spaces
	var words = str.split(" ");
	// create empty array for the new string
	var titleArray = [];
	// iterate through the split string
	for (let i = 0; i < words.length; i++) {
		var thisWord = words[i];
		// capitalize each word
		let caplitalizedWord = capitalize(thisWord);
		// push the capitalized words into the new array
		titleArray.push(caplitalizedWord);

		
	}
		let firstElement = titleArray[0];
		// create a new array to push to and start it with the element at index 0 for next step
		var finalTitleArray = [firstElement];
	//if the length of the array is less than 3 words, just return the array as a string with spaces between each word
		if (titleArray.length < 3) {  
			return titleArray.join(" ");
		} else {
					// otherwise, iterate through the new array, but start on the second word
					for (let i = 1; i < titleArray.length; i++) {
						var titleArrayWord = titleArray[i];
												
						
						// if the word is more than 3 characters long
						if (titleArrayWord.length > 3 && titleArrayWord.toLowerCase() !== "over") { 					
							// push to the final array
							finalTitleArray.push(titleArrayWord);
							
							// otherwise, lowercase the word and push
						} else {
								// convert back to lower case
							let lowerCased = titleArrayWord.toLowerCase();
							// push lowercased word to final array
							finalTitleArray.push(lowerCased);
							
							}
						
					}
					
			}
			return finalTitleArray.join(" ");
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}