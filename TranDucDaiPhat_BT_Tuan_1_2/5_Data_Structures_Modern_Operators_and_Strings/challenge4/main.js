// input:
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.onclick = function() {
    let names = textArea.value.split('\n');
    names.forEach((name, index) => {
        names[index] = name.trim().split('_');

        first = names[index][0].toLowerCase();
        second = names[index][1].toLowerCase();

        second = second.split('');
        second[0] = second[0].toUpperCase();
        second = second.join('');
        
        console.log(first + second);
    })
}
