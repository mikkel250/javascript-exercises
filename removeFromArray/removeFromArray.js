var removeFromArray = function() {
	// check arguments to see if they include an array. 
	// Another approach would be to assume that only arguments[0] is an array
	//let array = arguments[0];
	//let argsToRemoveFromArray = Array.prototype.slice.call(arguments, 0);
	
	// going to probably want to loop backwards through the arguments.
	for (i = arguments.length; i > arguments[0]; i--) {
		// pull the value out of the array, and pull the arugument, compare values
		let array = arguments[0];
		let argsToRemoveFromArray = Array.prototype.slice.call(arguments, 0);
		if (array[i] == argsToRemoveFromArray[i]) {
			array.splice(i, 1);

		}
	}
	return array;
}

module.exports = removeFromArray
