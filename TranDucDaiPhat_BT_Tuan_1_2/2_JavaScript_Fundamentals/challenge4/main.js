// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? (15 / 100 * bill) : (20 / 100 * bill);
}

function calcTotal(bills, tips) {
    let len = bills.length;
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr[i] = bills[i] + tips[i];
    }
    return arr;
}

var tips = bills.map(calcTip);

var totals = calcTotal(bills, tips);
console.log(totals);


