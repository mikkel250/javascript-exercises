var fibonacci = function(number) {
// formula to approximate if n > 0.
// F(n) = round(Phi^n / math.sqrt(5))
var phi = (Math.sqrt(5) + 1) / 2;
	if (number > 0) {
		return Math.round(phi ** number / Math.sqrt(5));    // the ** is exponent
	} else {
		return "OOPS"
	}
}

module.exports = fibonacci
