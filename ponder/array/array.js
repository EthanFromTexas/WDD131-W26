let pets = ['goldfish','dog','rhino'];

console.log(pets.length);

pets[0] = 'bunny';

console.log(pets);

pets.push('lizard');

console.log(pets);

const steps = ['one','two','three'];

steps.forEach(showSteps);

function showSteps(step) {
    console.log(step);
}

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`
}

myList.innerHTML = stepsHtml.join('');

//.map

let grades = ['A','B','D'];

let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);
console.log(grades);

//.reduce - reduce down to a single value

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}

console.log(totalPoints);
let gpaAverage = totalPoints/gpaPoints.length;

console.log(gpaAverage);

//.filter make a new array but only items that pass conditions

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length <= 6;
})

console.log(shortWords);