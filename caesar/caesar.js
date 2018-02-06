var caesar = function() {

}

module.exports = caesar


/* Initial thoughts:
Create an object with each letter of the alphabet tied to a number

Split the user input by character, then loop through that array character by character
Check that character against the object, get the index, and then push that index number 
	+/- user input number into a new array. Use findIndex() for this (array cardio day2)

Will have to use some sort of logic to tell the program that if the index is less than 0, start counting
	backwards from the end of the object and vice versa with the last number in the object. (e.g. -4 starts
	at index -1, +27 starts at index 0). 


Things to definitely use:
Ascii character codes  http://www.asciitable.com/

http://www.seth-dehaan.com/2016/01/21/freecodecamp-caesar-s-cipher/

Remember to split the alphabet in 2, so first half would be + the number and second half would be - the number
You'll also have to write one loop for upper and one for lower case. 


Things to consider using
Map function?

Sort the array?


