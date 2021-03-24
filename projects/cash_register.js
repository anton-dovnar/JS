function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    }

    let change = cash * 100 - price * 100;
    let changeSumCheck = change;
    let result = {
        status: "OPEN",
        change: [],
    }
    let filteredCid = cid.filter(obj => obj[1]).reverse();
    let cidSum = 0;

    filteredCid.forEach(obj => {
        let curr = obj[0];
        let value = obj[1] * 100;
        let total = 0;

        cidSum += value;
        while (change >= currencyUnit[curr] && value > 0) {
            change -= currencyUnit[curr];
            value -= currencyUnit[curr];
            total += currencyUnit[curr];
        }

        if (total) {
            result.change.push([curr, total / 100]);
        }
    });

    if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (!change && changeSumCheck == cidSum) {
        result.status = "CLOSED";
        result.change = cid;
    }

    return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
