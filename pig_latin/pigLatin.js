const vowels = "aeiouAEIOU"
const twoCharConsonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr"]
const threeCharConsonantClusters = ["sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

function translate(userInput) {
	var firstTwo = userInput.slice(0, 3);
	var firstThree = userInput.slice(0, 4);
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}

	// run 2 checks (one for vowels, then one for consonant clusters)
	// then 2 loops depending on match: one for the vowels against the string, one for consonant clusters against the string?
	// maybe use array.match()  ?
	

	

		for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
			return userInput + "ay";
			}
		}
		
		for (let j = 0; j < twoCharConsonantClusters.length; j++) {
			let theseTwo = twoCharConsonantClusters[j];
			if (firstTwo == theseTwo) {
				return userInput.slice(2) + firstTwo + "ay";
			}
		}
		
		for (let k = 0; k < threeCharConsonantClusters.length; k++) {
			let theseThree = threeCharConsonantClusters[k];
			if (firstThree == theseThree) {
				return userInput.slice(3) + firstThree + "ay";
			}
		}
}


module.exports = {
	translate
}

