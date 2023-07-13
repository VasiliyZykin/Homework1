// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i <= numbs.length; i++) {
    if (numbs[i] === 0) break;
    console.log(numbs[i]);
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3

const array = [1, 3, 5, 10, 20];

console.log(array.join(' '));

// Задание 4

const mass = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

console.log(mass);

// Задание 5

const a = [1, 1, 1];
console.log(a.concat(2, 2, 2));

// Задание 6

const arrA = [9, 8, 7, 'a', 6, 5];

arrA.sort();
let wordArr = arrA.pop();
console.log(arrA);

// Задание 7
const userArray = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt('Введите число массива'));

for (let item of userArray) {
    if (userAnswer == item) {
        alert('Угадал!');
        break;
    } else {
        alert('Не угадал');
    }
}

// Задание 8

newFunction();

function newFunction() {
    let wordArray = 'abcdef';
    let WordSplit = wordArray.split('');
    let wordReverse = WordSplit.reverse();
    let wordJoin = wordReverse.join("");
    console.log(wordJoin);
}

// Задание 9

let multArr = [
    [1, 2, 3,],
    [4, 5, 6]
];

let arrTwo = [];
for (let i = 0; i < multArr.length; i++) {
    for (let b = 0; b < multArr[i].length; b++) {
        arrTwo.push(multArr[i][b]);
    }
}

console.log(arrTwo);

// Задание 10

let numbArr = [1, 2, 3, 4, 5, 6, 7];
let res = 0;
for (let a = 0; a < numbArr.length - 1; a++) {
    let sum = numbArr[a] + numbArr[a + 1];
    console.log(sum);
}

// Задание 11

let numbArray = [1, 2, 3, 4, 5];

let squadArray = numbArray.map((d) => d * d);
console.log(squadArray);

// Задание 12

const getLengthWords = source => source.map(str => str.length);

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 13

function filterPositive(array) {
    return array.filter(item => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));