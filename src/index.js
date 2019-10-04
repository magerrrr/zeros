module.exports = function zeros(expression) {
  let count = 0;
  let array = expression.split('*');
  let arrayLength = array.length;

  for (let index = 0; index < array.length; index++) {
    if (array[index].length == 2) {
      let number = Number(array[0]);
      count = count + defaultFactorail (number);
    } else if (array[index].length == 3) {
      let number = Number(array[0]);
      count = count + notDefaultFactorail (number);
    } else {
      
    }
  }

  function defaultFactorail(number) {
     return Math.trunc(number/5);
  }
  
  function notDefaultFactorail(number) {
    if (number % 2 == 0 ) {
      return Math.trunc(number/10);
    } else {
      return 0;
    }
  }
  return count;
}
