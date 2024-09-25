const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// tỉ lệ cược: team 1 thắng
var oddTeam1 = game.odds.team1;
// tỉ lệ cược: team 2 thắng
var oddTeam2 = game.odds.team2;
// tỉ lệ cược: hoà 
var draw = game.odds.x;

// in ra màn hình những cầu thủ ghi bàn
game.scored.forEach(
    (player, index) => console.log(`Goal ${index+1}: ${player}`)
);

// in ra tỉ lệ cược trung bình
console.log('Tỷ lệ cược trung bình: ' + ((oddTeam1+oddTeam2+draw)/3).toFixed(2));

// in ra tỉ lệ cược
for (let odd in game.odds) {
    if (odd == 'x') {
        console.log("Odd of draw:", game.odds.x);
    } else {
        console.log(`Odd of victory ${game[odd]}: ${game.odds[odd]}`);
    }
}

// tạo {} gồm các cầu thủ ghi bàn
const scorers = {}

for (let scorer of game.scored) {
    if (!scorers[scorer]) {
        scorers[scorer] = 1;
    } else {
        scorers[scorer] = scorers[scorer]+1;
    }
}
console.log(scorers);
