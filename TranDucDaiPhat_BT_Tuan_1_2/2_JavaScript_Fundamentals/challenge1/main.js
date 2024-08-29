// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

var Dolphin_Score = [85, 54, 41];
var Koalas_Score = [23, 34, 27];

var calcAverage = (arr) => {
    let result = 0;
    arr.forEach(function(score){
        result += score;
    })
    return result/arr.length;
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins/2 > avgKoalas) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas/2 > avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    }  else {
        console.log("No one win!");
    }
}

checkWinner(calcAverage(Dolphin_Score),calcAverage(Koalas_Score));
