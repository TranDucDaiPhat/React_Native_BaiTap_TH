// value 1
var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

// value 2
// var markMass = 95;
// var markHeight = 1.88;
// var johnMass = 85;
// var johnHeight = 1.76;

var BMI_Mark = (markMass / markHeight ** 2).toFixed(2);
var BMI_John = (johnMass / johnHeight ** 2).toFixed(2);

markHigherBMI = BMI_Mark > BMI_John ? true : false;

if (markHeight) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// with template literal
if (markHeight) {
    console.log(`Mark's BMI(${BMI_Mark}) is higher than John's!(${BMI_John})`);
} else {
    console.log(`John's BMI(${BMI_John}) is higher than Mark's!(${BMI_Mark})`);
}