const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer(value) {
        let answer = Number(prompt(`What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)`
        ));
        
        if (Number.isInteger(answer) && !isNaN(answer) && answer >= 0 && answer <= 3) {
            this.answers[answer] += 1;
        }
        
        poll.displayResults();
    },

    displayResults(type) {
        if (Array.isArray(type)) {
            type.forEach((num) => {
                if (Number.isInteger(num) && !isNaN(num) && num >= 0 && num <= 3) {
                        this.answers[num] += 1;
                }
            })
            console.log(this.answers.toString());
        } else {
            console.log(`Poll results are ${this.answers.toString()}`)
        }
    },
};

const button = document.querySelector('button');

button.onclick = function() {
    poll.registerNewAnswer();
}

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
poll.displayResults([5, 2, 3]);