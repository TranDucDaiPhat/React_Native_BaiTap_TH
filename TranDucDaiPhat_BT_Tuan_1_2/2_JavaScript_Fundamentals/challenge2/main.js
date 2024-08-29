// Test data: 125, 555 and 44

var bills = [125, 555, 44];

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


