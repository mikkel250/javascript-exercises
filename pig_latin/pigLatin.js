const vowels = "aeiouAEIOU"
const twoCharConsonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr"]
const threeCharConsonantClusters = ["sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

function translate(userInput) {
	
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}
	if (checkMultiWord(userInput) = true) {
		var splitInput = userInput.split(" ");
		var finalString = [];
		for (let s = 0; s < splitInput.length; s++) {
			let thisWord = splitInput[s];
			checkThree(thisWord);
			checkTwo(thisWord);
			checkVowel(thisWord);
			consonant(thisWord);
		}		
	} else if (userInput ) {
		 
	} else {
		return userInput.slice(1) + userInput[0] + "ay";
			}
} // end of translate()

function runChecks(input) {
	checkThree(input);
	checkTwo(input);
	checkVowel(input);
	consonant(input);
}


function checkVowel(userInput) {
	for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
			return userInput + "ay";
			}
	}
}


function checkTwo(userInput) {
		var firstTwo = userInput.slice(0, 2);
		for (let j = 0; j < twoCharConsonantClusters.length; j++) {
			let theseTwo = twoCharConsonantClusters[j];
			if (firstTwo == theseTwo) {
				let checkTwoResult = userInput.slice(2) + firstTwo + "ay";
				finalString.push(checkTwoResult);
			}
		}
	}

	function checkThree(userInput)	 {
		var firstThree = userInput.slice(0, 3);
		for (let k = 0; k < threeCharConsonantClusters.length; k++) {
			let theseThree = threeCharConsonantClusters[k];
			if (firstThree == theseThree) {
				let checkThreeResult = userInput.slice(3) + firstThree + "ay";
				finalString.push(checkThreeResult);
			}
		}
	}


function consonant(userInput) {
	let changed = userInput.slice(1) + userInput[0] + "ay";
	finalString.push(changed);
}


function checkMultiWord(userInput) {
	userInput.indexOf(" ") !== -1; //check for spaces. returns true if they are present.
}

module.exports = {
	translate
}

