function telephoneCheck(str) {
    //RegEx that works to pass all but three of the tests
    let regex = /^(1\W*)?\W*?[\d]{3}\W+[\d]{3}\W+[\d]{4}|^([\d]{10})$/g;
    //Position of the first triple digit in string
    let index = /[\d]{3}/.exec(str).index;
    //Check if there are parantheses around the first three digits, if there aren't test the string with regex
    if (str[index - 1] === "(" || str[index + 3] === ")") {
      //If there are, check that the parantheses are at the start and end of the first digits, if there they are test the string with regex, if there are't return false
      if (str[index - 1] === "(" && str[index + 3] === ")") {
        return regex.test(str);
      } else {
        return false;
      }
    } else {
      return regex.test(str);
    }
  }
  
  telephoneCheck("555-555-5555")