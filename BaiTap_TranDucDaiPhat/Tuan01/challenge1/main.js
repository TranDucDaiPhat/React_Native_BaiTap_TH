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

var BMI_Mark = markMass / markHeight ** 2;
var BMI_John = johnMass / johnHeight ** 2;

markHigherBMI = BMI_Mark > BMI_John ? true : false;

console.log(markHigherBMI);