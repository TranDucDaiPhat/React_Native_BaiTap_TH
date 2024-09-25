// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

function checkDogs(dogsJulia, dogsKate) {
    let dogsJuliaCopy = dogsJulia.slice(0);
    dogsJuliaCopy.splice(-2, 2);
    dogsJuliaCopy.shift();

    let bothDogArr = dogsJuliaCopy.concat(dogsKate);
    
    bothDogArr.forEach((age, index) => {
        if (age < 3) {
            console.log(`Dog number ${index+1} is still a puppy`);
        } else {
            console.log(`Dog number ${index+1} is an adult, and is ${age} years old`)
        }
    });
}

// data 1
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
console.log('--------------');

// data 2
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
