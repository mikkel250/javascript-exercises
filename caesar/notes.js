// The entire solution:

const caesar = function(string, shift) {
  return string
    .split("")
    // split on each letter

    .map(char => shiftChar(char, shift))
    // iterate through each letter, run the shiftChar function and pass in the shift variable

    .join("");
    // rejoin the the array into a string
};

const codeSet = code => (code < 97 ? 65 : 97);
// this basically determines if it's a lowercase or uppercase letter, and sets the 'base' number as either 97 (lower) or 65 (upper)

const mod = (n, m) => (n % m + m) % m;
// the way this is actually used is it sets n to (code + shift - "the base number of the codeset"). 
// E.g. if n is the letter z it would look like:
n = (122 + 3 - 97) = 28
m = 26
(28 % 26 + 26) % 26
(2 + 26) % 26
28 % 26 = 2

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();
  // get the character code 

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;

-------------------------------------------------------------------------------




function mod (n, m) {
	(n % m + m) % m;
}

written with numbers as its used would be, for example, the letter a with code 65 shifted by 1
(65 + 1 - 65, 26) + 65
					^--this is because the codeSet returns 65 if run on 65
So it breaks down to: 
mod(1, 26)
(1 % 26 +26) % 26
(27) % 26
=
1;
Then you add the codeSet(code) to it again:
1 + 65;
= 
66

Hmmm....

So lets try it with the end of the alphabet to see if it makes sense:
Start wit Z, which would be code 122, and shift it by 3, should end up with letter "c", code 99
( (122 + 3 - 97), 26) + 97
start with the inner parentheses (my addition):
125 - 97 = 28
So you get 
mod(28, 26)
(28 % 26 + 26) % 26
26 goes into 28 once, with 2 left over, so you get 
2 + 26 = 28
(28) % 26 = 2
then back to the original expression, which now breaks down to:
2 + 97 = 99
99 = "c"

So mod is a way to wrap around the alphabet. 



// remember that the modulo will give you what's left over after the number being divided has had the divisor go in an even number of times.
E.g. 10 % 5 = 0 	 the 5 goes in exactly twice
		 11 % 5 = 1    the 5 goes in twice, with one left over
		 11.5 % 5 = 1.5 			the 5 goes in twice, with 1.5 left over
		 29 % 5 = 4		the 5 goes in 5 times, with 4 left over
		 4 % 5 = 4 		because 5 wont go into 4 at all, so the entire number is left over. 
		 3 % 5 = 3    etc. 

// Deconstructing this statement:
const codeSet = code => (code < 97 ? 65 : 97);

// Same as:
const codeSet = function (code) {
	if (code < 97) {
	return 65;
	} else {
	return 97;
	}
}
// So, essentially, this statement is just a check to see if it's upper or lower case. 


/* 
remember arrow functions allow you to just enter the arguments before the arrow:
let func = (arg1, arg2, ...argN) => expression

In other words, it’s roughly the same as:
let func = function(arg1, arg2, ...argN) {
  return expression;
}

When there is only one parameter, the opening parentheses are optional (I think this is what trips me up a lot):
parameters => { statements }
*/

// Deconstructing this statement: 
const mod = (n, m) => (n % m + m) % m;

/* Same as:
const mod = function (n, m) {
	(n % m + m) % m;
}

But the way it's used in the code is like this:

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

		if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    	return String.fromCharCode(
      	mod(code + shift - codeSet(code), 26) + codeSet(code)
    	);
  	}
  	return char;
};

*/
So what's going on there is: 
String.fromCharCode returns the entered digits as a string. 
E.g. String.fromCharCode(65, 66, 67);  // returns "ABC"
So you're saying, return the string from the modified number:





An explanation of looping around:
https://stackoverflow.com/questions/20246049/how-would-i-loop-around-the-alphabet
	
The key is modulus division:

char c;
c = (char)((c - 'a' + 5) % 26 + 'a');
c - 'a' gives you the number of the letter 0-25, which is then shifted up by 5 and the remainder after dividing by 26 is then added to 'a' to give up back the character for the letter.

So....
in the Odin answer what's happening is that you are entering the code for the letter, adding the shift, then subtracting down to the letter 'a'
Then you're taking that and getting the remainder after dividing by 26 and adding the number that would correspond to 'a' back to it
e.g. shift by 3, assume there's a 'z' in the string
code for z is 122
so you go 122 + 3 - 97 = 28
Then you run mod on that number to get the new code. You use 26 as the second variable because that's the number of letters in alphabet
(28, 26)
28 % 26 + 26 = 28 % 26 = 2
Which means you would count 2 up FROM letter 'a' (this may have been part what was confusing me)
then add 97 back to it to get the code for the final letter
2 + 97 = 99
99 = 'c'

Further clarification, say the letter is 'z' and add 1 to get letter 'a', you would want to end up with 0 at the end of the math
122 + 1 - 97 = 26
then 26 % 26 + 26 = 26 % 26 = 0;
then add 97 to it to start counting from the bottom of the alphabet again
0 + 97 = 97
97 = 'a'

So then the map function iterates through the whole array, creates a new one after running shiftChar on each element.
the shiftChar function will return the character given it 



Just to clarify more, I'm going to write it out as it would be run by the computer:
function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

function("xyz", 3) {
  return "xyz"
    .split("");
    		---> [x, y, z]
    .map(function("x") {
    	shiftChar("x", 3)
    		const code = "x".charCodeAt(); = 120
    			---> meets if loop criteria, so
    			return the corresponding number ( String.fromCharCode() ) for this
    			mod(120 + 3 - 97, 26) + 97 

    			= (0) + 97 


    } 
    		--->
    .join("");
};