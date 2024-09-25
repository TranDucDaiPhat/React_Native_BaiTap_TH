// key: thời gian xảy ra sự kiện, value: sự kiện trong trận đá bóng
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);


// Tạo biến event chứa các sự kiện trong game (không trùng lặp)
var events = [];

gameEvents.forEach((event) => {
    if (!events.includes(event)) {
        events.push(event);
    }
});

console.log(events);

// Xoá sự kiện ở phút 64
gameEvents.delete(64);

console.log(gameEvents);

// Tính thời gian trung bình xảy ra các sự kiện
console.log(`An event happened, on average, every ${(90/gameEvents.size).toFixed()} minutes`);


gameEvents.forEach((event, minute) => {
    console.log(`${minute < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${minute}: ${event}`);
});