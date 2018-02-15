const vowels = "aeiouAEIOU"
const twoCharConsonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr"]
const threeCharConsonantClusters = ["sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

function translate(userInput) {
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}

	// run 2 checks (one for vowels, then one for consonant clusters)
	// then 2 loops depending on match: one for the vowels against the string, one for consonant clusters against the string?
	// maybe use array.match()  ?
	
	if (userInput[0] == vowels) {
		return userInput.slice[1] + userInput[0].toLowerCase() + "ay";
	}
}


module.exports = {
	translate
}

