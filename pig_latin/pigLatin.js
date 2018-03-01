const vowels = "aeiouAEIOU"
const twoCharConsonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr"]
const threeCharConsonantClusters = ["sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];
// set flags to check against - for single words
var vowelCheck = false;
var multiWord = false;
var twoChar = false;
var threeChar = false;

function translate(userInput) {
	
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}
	// run checks for multiple words
	runChecks(userInput);
	if (multiWord === true) {
		var splitInput = userInput.split(" ");
		var finalString = [];
		for (let s = 0; s < splitInput.length; s++) {
			let thisWord = splitInput[s];
			checkThree(thisWord);
			checkTwo(thisWord);
			checkVowel(thisWord);
			consonant(thisWord);
			//return finalString.join(" ");
		}	
	
	// check for consonant clusters
	} else if (multiWord === false && threeCharPresent === true) {
			checkThree(userInput);
	} else if (multiWord === false && twoCharPresent === true) {
			checkTwo(userInput);
	// check for vowel
	} else if (multiWord === false && vowelPresent === true) {
			checkVowel(userInput);
	// just run consonant	 
	} else {
		return userInput.slice(1) + userInput[0] + "ay";
			}
return finalString.join(" ");		// return the result after the loop is finished
} // end of translate()

function runChecks(input) {	
	vowelPresent(input);
	checkMultiWord(input);
	twoCharPresent(input);
	threeCharPresent(input);
}

function vowelPresent(userInput) {
for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
			vowelCheck = true;
}

function twoCharPresent(userInput) {
	var firstTwo = userInput.slice(0, 2);
		for (let j = 0; j < twoCharConsonantClusters.length; j++) {
			let theseTwo = twoCharConsonantClusters[j];
			if (firstTwo == theseTwo) {
				twoChar = true;
			}
		}
}

function threeCharPresent(userInput) {
	var firstThree = userInput.slice(0, 3);
		for (let k = 0; k < threeCharConsonantClusters.length; k++) {
			let theseThree = threeCharConsonantClusters[k];
			if (firstThree == theseThree) {
				threeChar = true;
			}
		}
}

function checkVowel(userInput) {
	for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
			finalString.push(userInput + "ay");
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
	if (userInput.indexOf(" ") !== -1) {   //check for spaces. returns true if they are present.
	multiWord = true; 
	}
}

module.exports = {
	translate
}



// going to need to run checks first, right after translate, then run the if loops based on the flags. 
// probably will be easiest and work better if I run all of the checks and use a bunch of elseif loops based on the flags rather than running 3 checks for the consonants, as that would cause the word to morph 3 times
// maybe write a function to check the flags and run the appropriate function based on the result? Or write it into the runChecks?

