// Data 1: [5, 2, 4, 1, 15, 8, 3]
// Data 2: [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(dogAges) {
    let humanAges = dogAges.map(dogAge => {
        return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    });

    let humanAgeAdult = humanAges.filter(age => age >= 18);

    let avr = humanAgeAdult.reduce(function(init, current) {
        return init + current;
    })/humanAgeAdult.length;

    console.log("Tuổi trung bình:", avr.toFixed());
}

// data 1
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

// data 2
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
