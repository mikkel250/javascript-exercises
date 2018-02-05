var snakeCase = function(string) {
  // replace multiple periods
  string = string.replace(/\.\./g, " "); // remove periods ?
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\`~()?]/g, ""); // remove punctuation
  string = string.replace(/\s+/g, " ");

  // find out if there are no spaces (camelCase)
  if (string.indexOf(" ") < 0) {
  	string = string.replace(/([A-Z])/g, " $1");  // replace all (the /g flag) instances of capital letters. I still don't know what the $1 is for despite reading the entire MDN and w3 pages on regular expressions
  }

  return string
  	.trim()	// remove whitespace from both ends of the string
  	.toLowerCase()
  	.replace(/\-/g, " ")
  	.split(" ")	//create an array with each element split on the spaces
  	.join("_"); // join the array elements back into a string using the underscore between each element
};

module.exports = snakeCase

/* from stack overflow. Still don't fully get how this works
str = str.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
Removes everything except alphanumeric characters and whitespace, then collapses multiple adjacent characters to single spaces.

Detailed explanation:

\w is any digit, letter, or underscore.
\s is any whitespace.
[^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
[^\w\s]|_ is the same as #3 except with the underscores added back in.
*/
