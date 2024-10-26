const convertToCelsius = function(ftemp) {
  let ctemp = (ftemp - 32) * 5 / 9;
  return parseFloat(ctemp.toFixed(1));
};

const convertToFahrenheit = function(ctemp) {
  let ftemp = ctemp * 9 / 5 + 32;
  return parseFloat(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
