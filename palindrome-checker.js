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