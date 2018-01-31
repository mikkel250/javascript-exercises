var snakeCase = function(str) {
  let newString = str.toLowerCase();
  	newString.match(/[^_\W]+/g).join(`_`);
  //var replaceWith = / .\-!@#$%^&*/gi;
  //var newString = str.toLowerCase();
  //var newString = str.replace(replaceWith, `_`);
  return newString;
}

module.exports = snakeCase
