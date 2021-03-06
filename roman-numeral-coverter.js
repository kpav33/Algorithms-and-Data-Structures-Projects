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