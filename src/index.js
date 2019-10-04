module.exports = function zeros(expression) {
  let count = 0;
  let factorial = expression.split('*');
  let summaryArrayOf2And5 = [];

  for (let i = 0; i < factorial.length; i++) {
    let multiplicants;
    let number = getNumberFromString(factorial[i]);

    if (isDefaultFactorial( factorial[i]) ) {
      multiplicants = divideClassicFactorialByMultiplicants(number);
    } else {
      if (number % 2 == 0) {
        multiplicants = divideEvenByMultiplicants(number);
      } else {
        multiplicants = divideOddByMultiplicants(number);
      }
    }
    let arrayOf2And5 = transform(multiplicants);
    summaryArrayOf2And5 = summaryArrayOf2And5.concat(arrayOf2And5);
  }

  let countTwo = getCountOfNumber(summaryArrayOf2And5, 2);
  let countFive = getCountOfNumber(summaryArrayOf2And5, 5);

  count = count + Math.min(countTwo, countFive);

  return count;

  function getCountOfNumber(arr, num) {
    let c = 0

    for(let i = 0; i< arr.length; i++) {
      if (arr[i] === num) {
        c++;
      }
    }
    return c;
  }

  function divideClassicFactorialByMultiplicants(number) {
    let array = [];
    for(let i = 1;i <= number; i++) {
      array.push(i);
    }
    return array;
  }

  function divideEvenByMultiplicants(number) {
    let array = [];
    for(let i = 2;i <= number; i+=2) {
      array.push(i);
    }
    return array;
  }

  function divideOddByMultiplicants(number) {
    let array = [];
    for(let i = 1;i <= number; i+=2) {
      array.push(i);
    }
    return array;
  }

  function transform(arr) {
    let array = [];
    for (let i = 0;i < arr.length; i++) {
      let element = arr[i];
      while (element%2===0) {
        element = element/2;
        array.push(2);
      }
      while (element%5===0) {
        element = element/5;
        array.push(5);
      }
    }
    return array;
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
    return new Number( string.split('!')[0] );
  }
}
