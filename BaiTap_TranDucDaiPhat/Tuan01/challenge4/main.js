// Data 1: Test for bill values 275, 40 and 430

var bill = 275;

var tip = (bill >= 50 && bill <= 300) ? (15 / 100 * bill) : (20 / 100 * bill);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);