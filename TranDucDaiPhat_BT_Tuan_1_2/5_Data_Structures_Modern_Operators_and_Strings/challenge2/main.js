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

var players1 = game.players[0];
var players2 = game.players[1];

// goalkeeper - thủ môn
var gk = players1[0];

// 10 players còn lại
var fieldPlayers1 = players1.slice(1);

// tất cả 22 players
var allPlayers = players1.concat(players2);

// team 1 + 3 player dự bị
var players1Final = players1.slice(0);
players1Final.push('Thiago', 'Coutinho', 'Perisic');

// tỉ lệ cược
// team 1 thắng
var oddTeam1 = game.odds.team1;
// team 2 thắng
var oddTeam2 = game.odds.team2;
// hoà 
var draw = game.odds.x; 

// ==============================
game.scored.forEach(
    (player, index) => console.log(`Goal ${index+1}: ${player}`)
);

console.log('Tỷ lệ cược trung bình: ' + ((oddTeam1+oddTeam2+draw)/3).toFixed(2));

