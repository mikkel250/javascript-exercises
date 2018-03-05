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
	runChecks(userInput); // set the flags
	// if(typeof userInput !== 'string') {return "Invalid Input. Please input a string."}

	
	if (multiWord === true) {
		console.log("Multiword True");
		var splitInput = userInput.split(" ");
		console.log("splitInput");
		for (let s = 0; s < splitInput.length; s++) {
			let thisWord = splitInput[s];
			console.log(thisWord);
			runChecks(thisWord);
			flagCheckAndTransform(thisWord);
			resetFlags();
		}	
		let stringToReturn = finalString.join(" "); // hold the result in a variable to allow the array to be reset
		console.log(stringToReturn);
		//finalString.length = 0;  // reset the array for the next translation
		console.log(finalString);
		finalString.length = 0;
		resetFlags();
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
	vowelPresent(input);
	threeCharPresent(input);
	// if (vowelCheck === false && threeCharPresent === false){
	twoCharPresent(input);	
	//}
}

function vowelPresent(userInput) {
	for (let i = 0; i < vowels.length; i++) {
			let thisLetter = vowels[i];
			if (userInput[0] == thisLetter) {
				vowelCheck = true;
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

function twoCharPresent(userInput) {
	var firstTwo = userInput.slice(0, 2);
	console.log(firstTwo);
		for (let j = 0; j < twoCharConsonantClusters.length; j++) {
			let theseTwo = twoCharConsonantClusters[j];
			if (firstTwo == theseTwo) {
				twoChar = true;
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

function threeCharPresent(userInput) {
	var firstThree = userInput.slice(0, 3);
		for (let k = 0; k < threeCharConsonantClusters.length; k++) {
			let theseThree = threeCharConsonantClusters[k];
			if (firstThree == theseThree) {
				threeChar = true;
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
		if (vowelCheck === true) {	
			vowelTransform(userInput);
		} else if (vowelCheck === false && threeChar === true) {
			threeCharTransform(userInput);
		} else if (vowelCheck === false && threeChar === false && twoChar === true) {
			twoCharTransform(userInput);	
		} else if (vowelCheck === false && threeChar === false && twoChar === false) {
			consonant(userInput);
		}
	
}

function resetFlags() {
	vowelCheck = false;
	multiWord = false;
  twoChar = false;
  threeChar = false;  
}

module.exports = {
	translate
}

// need to figure out how to reset the finalString before running each transform
// better yet, create a variable to hold the final string and then reset the array at the end of each loop
// it almost seems like I need to create a new array for each instance....

/* not working on the following:
the (skipping, nothing returned)
quick (seeing q but not seeing qu)
brown (seeing b but not seing br)
quiet (nothing returned)
cherry (nothing returned)
banana (nothing returned)
*/ 