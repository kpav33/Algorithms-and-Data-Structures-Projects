// IMPORTANT
// This solution works and passes all the tests, but it still needs a lot of improving, refactoring and just generally cleaning up code.


function checkCashRegister(price, cash, cid) {
    let statusValue, changeArray;
    let inRegister = [];
    let amount = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let currency = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
    for (let i = 0; i < cid.length; i++) {
      inRegister.unshift(Math.ceil(cid[i][1] * 100));
    }
    let value = inRegister.reduce((a, b) => {
      return a + b;
    }, 0);
    //console.log(inRegister);
    //console.log(value);
    let difference = (cash - price) * 100;
    //console.log(difference);
  
    let changeArr = [];
    let amountArr = [];
    let endArr = [];
    let finalArr = [];
  
    for (let i = 0; i < inRegister.length; i++) {
      let count = 0;
      while (amount[i] <= difference && difference !== 0 && inRegister[i] !== 0) {
        difference = difference - amount[i];
        //console.log(difference);
        inRegister[i] = inRegister[i] - amount[i];
        changeArr.push(inRegister[i]);
        amountArr.push(amount[i] / 100);
        if (endArr.indexOf(currency[i]) === -1) {
          endArr.push(currency[i]);
        }
        count++;
        //console.log(count)
  
        //console.log(difference);
        //console.log(difference - amount[i]);
        //console.log(amount[i]);
      }
      //console.log(count * amount[i] / 100);
      finalArr.push(count);
      if (count === 0) {
        let newCount = i - 100
        amountArr.push(newCount);
      }
  
    }
    let duplicates = [...new Set(amountArr)];
  
    //console.log(duplicates)
    let lastArr = [];
    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] > 0) {
        //console.log("NOT ZERO");
        lastArr.push([currency[i], duplicates[i] * finalArr[i]]);
      }
    }
    //console.log(lastArr);
    //console.log(finalArr);
    //console.log(inRegister);
    //console.log(changeArr);
    //console.log(amountArr);
    //console.log(endArr)
    //console.log(0.01 * 4)
    let enoughChange = changeArr.reduce((a, b) => {
      return a + b;
    });
    let emptyRegister = inRegister.reduce((a, b) => {
      return a + b;
    });
    //console.log(emptyRegister);
    let reallyLastArr = [];
    if (enoughChange === 0) {
      statusValue = "INSUFFICIENT_FUNDS";
    } else if (emptyRegister === 0) {
      statusValue = "CLOSED";
      reallyLastArr = cid;
    } else {
      statusValue = "OPEN";
      reallyLastArr = lastArr;
    }
  
    let obj = {
      status: statusValue,
      change: reallyLastArr
    };
    //return change;
    //console.log(obj);
    //console.log(difference)
    //console.log(changeArr.includes(0));
    return obj;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);