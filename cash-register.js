function checkCashRegister(price, cash, cid) {
  let statusMessage;
  let inRegister = [];
  let amount = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let currency = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  // Create an array of how much money is in the register in different coins and banknotes
  // Multiply the value with 100 to avoid problems with decimal values
  for (let i = 0; i < cid.length; i++) {
    inRegister.unshift(Math.ceil(cid[i][1] * 100));
  }
  // How much change do you need to return
  let changeToReturn = (cash - price) * 100;

  let changeArr = [];
  let amountArr = [];
  let countArr = [];
  // Loop through the array with how much money you have in register
  for (let i = 0; i < inRegister.length; i++) {
    let count = 0;
    // Return change by giving back the most valuable banknotes or coins that you have available in the register
    while (amount[i] <= changeToReturn && changeToReturn !== 0 && inRegister[i] !== 0) {
      // Subtract the returned money from the total value to return
      changeToReturn = changeToReturn - amount[i];
      // Subtract the amount of available money in the register by the amount that you returned
      inRegister[i] = inRegister[i] - amount[i];
      // Add to array changes to the available money you have in the register
      changeArr.push(inRegister[i]);
      // Add to array how many banknotes and coin of each type you need to return
      amountArr.push(amount[i] / 100);
      count++;
    }
    // Add the count value to the countArr array
    countArr.push(count);
    // If a banknote or coin value is bigger than the change to return, the while loop doesn't execute and the count remains at value zero
    // If the count is zero subtract 100 from it to get a negative value
    // This code is used to make sure the code for removing duplicates works the way I need it to
    if (count === 0) {
      let newCount = i - 100
      amountArr.push(newCount);
    }

  }

  // Remove duplicates from amountArr
  let duplicates = [...new Set(amountArr)];
  // Create an array of the final value to return in banknotes and coins
  let changeToReturnArr = [];
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] > 0) {
      changeToReturnArr.push([currency[i], duplicates[i] * countArr[i]]);
    }
  }
  // Check if there is change available to return right amount of money
  let enoughChange = changeArr.reduce((a, b) => {
    return a + b;
  });
  // Check if there is any money in the register
  let emptyRegister = inRegister.reduce((a, b) => {
    return a + b;
  });
  // Check whether there is not enough funds to give back right amount of change or if the register is empty
  if (enoughChange === 0) {
    statusMessage = "INSUFFICIENT_FUNDS";
    changeToReturnArr = [];
  } else if (emptyRegister === 0) {
    statusMessage = "CLOSED";
    changeToReturnArr = cid;
  } else {
    statusMessage = "OPEN";
  }

  let obj = {
    status: statusMessage,
    change: changeToReturnArr
  };
  return obj;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);