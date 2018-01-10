var removeFromArray = function() {
	// check arguments to see if they include an array. 
	// Another approach would be to assume that only argument[0] is an array
	let array = arguments[0];
	// if the arguments are not an array, then use those arguments and unshift from argument 1

	// going to probably want to loop backwards through the arguments.
	for (i = arguments.length; i > arguments[0]; i--) {
		// if an item is not found within the array, keep looping. TODO
		if (arguments[i] != array[0...array.length -1]) {
			continue;
		}
	}
}

module.exports = removeFromArray
