// Test data:
//  Data 1: [17, 21, 23]
//  Data 2: [12, 5, -5, 0, 4]

var arr = [17, 21, 23];

function printForecast(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}ºC in ${i} days...`);
        
    }
}

printForecast(arr);

