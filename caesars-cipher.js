function rot13(str) {
    //Declare variable for decoded string and variable for characters UTF-16 code
    let decoded = "";
    let utfInt;
    //Loop through string
    for (let i = 0; i < str.length; i++) {
      //Decode character into correct UTF-16 code, ignore non-alphabetic characters
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        utfInt = str.charCodeAt(i);
      } else {
        utfInt = str.charCodeAt(i) - 13;
        if (utfInt < 65) {
          let number = 65 - utfInt;
          utfInt = 91 - number;
        }
      }
      //Get alphabetic characters from UTF-16 code and add them to the decoded string
      let decodedChar = String.fromCharCode(utfInt);
      decoded += decodedChar;
    }
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");