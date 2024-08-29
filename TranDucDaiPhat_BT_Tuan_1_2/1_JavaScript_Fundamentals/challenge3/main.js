// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

var Dolphin_Score = [96, 108, 89];
var Koalas_Score = [88, 91, 110];

// Tinh diem trung binh
var average_Dolphin_Score = Dolphin_Score.reduce(function(init, current) {
    return init + current;
}) / 3;

var average_Koalas_Score = Koalas_Score.reduce(function(init, current) {
    return init + current;
}) / 3;

// In ket qua
if (average_Dolphin_Score > average_Koalas_Score && average_Dolphin_Score >= 100) {
    console.log("Dolphin is winner");
} else if (average_Koalas_Score > average_Dolphin_Score && average_Koalas_Score >= 100) {
    console.log("Koalas is winner");
} else if (average_Koalas_Score == average_Dolphin_Score && average_Koalas_Score >= 100) {
    console.log("Draw!");
} else {
    console.log("no team wins the trophy");
}