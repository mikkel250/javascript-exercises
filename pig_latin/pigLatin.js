const vowels = "aeiouAEIOU";
const twoCharConsonantClusters = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", 'st', "sw", "th", 'tr', 'tw', "wh", "wr"];
const threeCharConsonantClusters = ["sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];
// set flags to check against - for single words
var vowelCheck = false;
var multiWord = false;
var twoChar = false;
var threeChar = false;
var finalString = [];

function translate(userInput) {	
	if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}

	runChecks(userInput); // set the flags
	if (multiWord === true) {
		var splitInput = userInput.split(" ");		
		for (let s = 0; s < splitInput.length; s++) {
			let thisWord = splitInput[s];
			runChecks(thisWord);
			flagCheckAndTransform(thisWord);			
		}	
		let stringToReturn = finalString.join(" "); // hold the result in a variable to allow the array to be reset
		console.log(stringToReturn);
		//finalString.length = 0;  // reset the array for the next translation
		console.log(finalString);
		return stringToReturn;		// return the result after the loop is finished
		
	} else {		
		flagCheckAndTransform(userInput);
		let stringToReturn = finalString.toString();
		console.log(stringToReturn);
		finalString.length = 0;
		console.log(finalString);
		return stringToReturn;
	}
} // end of translate

function runChecks(input) {	
	checkMultiWord(input);
	if (multiWord === false) {
	vowelPresent(input);
	} else if (vowelCheck === false) {
		threeCharPresent(input);
	} else {
	twoCharPresent(input);	
	}
}

function vowelPresent(userInput) {
	for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
				vowelCheck = true;
			}
	}
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

function vowelTransform(userInput) {
	for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
			finalString.push(userInput + "ay");
			}
	}
}


function twoCharTransform (userInput) {
		var firstTwo = userInput.slice(0, 2);
		console.log(firstTwo);
		for (let j = 0; j < twoCharConsonantClusters.length; j++) {
			let theseTwo = twoCharConsonantClusters[j];
			if (firstTwo == theseTwo) {
				let twoCharTransformResult = userInput.slice(2) + firstTwo + "ay";
				finalString.push(twoCharTransformResult);
				console.log(finalString);
			}
		}
	}

	function threeCharTransform(userInput)	 {
		var firstThree = userInput.slice(0, 3);
		console.log(firstThree);
		for (let k = 0; k < threeCharConsonantClusters.length; k++) {
			let theseThree = threeCharConsonantClusters[k];
			if (firstThree == theseThree) {
				let threeCharTransformResult = userInput.slice(3) + firstThree + "ay";
				finalString.push(threeCharTransformResult);
				console.log(finalString);
			}
		}
	}

function consonant(userInput) {
	let changed = userInput.slice(1) + userInput[0] + "ay";
	console.log(changed)
	finalString.push(changed);
	console.log(finalString);
}


function checkMultiWord(userInput) {
	if (userInput.indexOf(" ") !== -1) {   //check for spaces. returns true if they are present.
	multiWord = true;	
	}
}

function flagCheckAndTransform(userInput) {
	
	if (multiWord === false) {
		console.log("multiWord is False");
		if (vowelCheck === true) {	
			vowelTransform(userInput);
		} else if (threeChar === true) {
			threeCharTransform(userInput);
		} else if (twoChar === true) {
			twoCharTransform(userInput);	
		} else {
			consonant(userInput);
		}
	}
}

module.exports = {
	translate
}

// need to figure out how to reset the finalString before running each transform
// better yet, create a variable to hold the final string and then reset the array at the end of each loop
// it almost seems like I need to create a new array for each instance....