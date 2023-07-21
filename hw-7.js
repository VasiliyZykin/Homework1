//Задание 1

let word = 'js';

console.log(word.toUpperCase());

//Задание 2

const arrayWords = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let search = prompt('Введите начало слова');

arrayWords.forEach((word) => {
    if (word.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(word);
    } else {
        
    }
});

//Задание 3

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5

function randomNumber(minNumber, maxNumber) {
    return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);

}

console.log(randomNumber(1, 10));

//Задание 6

function getRandomArrNumbers(num) {
    let array = [];
    let arrLen = Math.floor(num / 2);
    for (let i = 0; i < arrLen; i++) {
        array.push(Math.ceil(Math.random(num) * num));
    }
    return array;
}
console.log(getRandomArrNumbers(8));

//Задание 7

function randomNum() {
    let minNum = prompt('Введите первое число');
    let maxNum = prompt('Введите второе число');
    return Math.ceil(Math.random(minNum) * (maxNum - minNum) + minNum);

}

console.log(randomNum());

//Задание 8

let date = new Date();
console.log(date);

//Задание 9

let currentDate = new Date();
let newDate = currentDate.getDate(currentDate.setDate(73));
console.log(newDate);

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + " Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(fullDate);