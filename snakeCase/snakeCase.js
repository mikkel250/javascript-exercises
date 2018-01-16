var snakeCase = function(str) {
  var replaceWith = / .\-!@#$%^&*/gi;
  var newString = str.toLowerCase();
  var newString = str.replace(replaceWith, `_`);
  return newString;
}

module.exports = snakeCase
