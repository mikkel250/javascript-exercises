var ftoc = function(tempInF) {
  let result =(tempInF - 32) * 5 / 9;
  return Math.round(10 * result)/10;
}

var ctof = function(tempInC) {
  let result = (tempInC * 9 / 5) + 32;
  return Math.round(10 * result)/10;
}

module.exports = {
  ftoc,
  ctof
}
