function translate(userInput) {
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}
	const vowels = "aeiouAEIOU"
	const consonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"]
	// run 2 checks (one for vowels, then one for consonant clusters)
	// then 2 loops depending on match: one for the vowels against the string, one for consonant clusters against the string?
	// maybe use array.match()  ?
	
	if (userInput[0] == vowels)
}


module.exports = {
	translate
}

