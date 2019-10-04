module.exports = function zeros(expression) {
  let count = 0;
  let multiplicants = expression.split('*');

  for (let i = 0; i < multiplicants.length; i++) {

    if (isDefaultFactorial( multiplicants[i]) ) {
      number = getNumberFromString(multiplicants[i]);
      count = count + getZerosFromDefaultFactorial(number);
    } else {
      number = getNumberFromString(multiplicants[i]);
      count = count + getZerosFromNotDefaultFactorail(number);
    }
  }

  function isDefaultFactorial(element) {
    let array = element.split('!');
    if (array.length == 2) {
      return true;
    } else {
      return false;
    }
  }
  
  function getNumberFromString(string) {
    return Number( string.split('!')[0] );
  }

  function getZerosFromDefaultFactorial(number) {
    return Math.trunc(number/5); 
  }
  
  function getZerosFromNotDefaultFactorail(number) {
    if (number % 2 == 0 ) {
      return Math.trunc(number/10);
    } else {
      return 0;
    }
  }

  return count;
}
