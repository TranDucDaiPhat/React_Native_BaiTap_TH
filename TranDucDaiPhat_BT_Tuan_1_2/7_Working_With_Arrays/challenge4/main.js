const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    dog.recommendedFood = (dog.weight ** 0.75 * 28).toFixed();
})

dogs.forEach(dog => {
    dog.owners.forEach(owner => {
        if (owner == 'Sarah') {
            if (dog.curFood > dog.recommendedFood*1.1) {
                console.log("Sarah's dog eating too much");
            } else if (dog.curFood < dog.recommendedFood*0.9) {
                console.log("Sarah's dog eating too little");
            } else {
                console.log("Sarah's dog eating normal");
            }
        }
    })
})

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach(dog => {
    if (dog.curFood > dog.recommendedFood*1.1) {
        ownersEatTooMuch.push(...dog.owners)
    } else if (dog.curFood < dog.recommendedFood*0.9) {
        ownersEatTooLittle.push(...dog.owners)
    }
})

let message = ownersEatTooMuch.reduce(function(init, current) {
    return init + ' and ' + current;
})
console.log(message + "'s dogs eat too much!");

message = ownersEatTooLittle.reduce(function(init, current) {
    return init + ' and ' + current;
})
console.log(message + "'s dogs eat too little!");

console.log(dogs);
