function palindrome(str) {
    //Remove all non-alphanumeric characters and turn the resulting array into a lower cased string
    let regex = /[A-Za-z0-9]/gi;
    let arr = str.match(regex).join("").toLowerCase();
    //Create two arrays, one original one reversed
    let reversedArr = arr.split("").reverse();
    let originalStringArr = arr.split("");
    //Check for palindromes
    let count = 0;
    for (let i = 0; i < originalStringArr.length; i++) {
      if (reversedArr[i] === originalStringArr[i]) {
        count++;
      }
    }
    if (originalStringArr.length === count) {
      return true;
    } else {
      return false;
    }
  }
  
palindrome("2A3*3a2");


function convertToRoman(num) {
  //Create two arrays for roman numbers and their decimal equivalent and one array for solution
  let romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = [];
  //Translate decimal value into roman numbers by looping through the decimal array and adding the roman number to the result, as long as decimal value at index, is greater than the provided number
  for (let i = 0; i < decimalNum.length; i++) {
      while (decimalNum[i] <= num) {
          num -= decimalNum[i];
          roman.push(romanNum[i]);
      }
  }
  //Return result array as string
  return roman.join("");
 }
 
 convertToRoman(36);