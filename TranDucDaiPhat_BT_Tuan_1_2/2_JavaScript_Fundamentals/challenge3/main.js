// Test data: 
// Marks weights 78 kg and is 1.69 m tall. 
// John weights 92 kg and is 1.95 m tall.

var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
}

var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
}

mark.BMI = mark.calcBMI().toFixed(2);
john.BMI = john.calcBMI().toFixed(2);

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!
    `);
} else if (mark.BMI < john.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!
    `);
} else {
    console.log("Same BMI");
}