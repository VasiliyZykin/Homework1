// Задание 1

let password = prompt('Введите пароль');

let message;

if (password === 'qwerty') {
    message = 'Пароль введен верно'
} else {
    message = 'Пароль введен неправильно'
}

alert(message);

// Задание 2

let c = Number(prompt('Введите число'));

if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let d = Number(prompt('Введите цифру больше 100'));
let e = Number(prompt('Введите цифру больше 100'));

if (d >= 100 || e >= 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5

let monthNumber = Number(prompt('Введите число месяца'));

switch (monthNumber) {
    case monthNumber = 1:
        console.log('Январь');
        break;
    case monthNumber = 2:
        console.log('Февраль');
        break;
    case monthNumber = 3:
        console.log('Март');
        break;
    case monthNumber = 4:
        console.log('Апрель');
        break;
    case monthNumber = 5:
        console.log('Май');
        break;
    case monthNumber = 6:
        console.log('Июнь');
        break;
    case monthNumber = 7:
        console.log('Июль');
        break;
    case monthNumber = 8:
        console.log('Август');
        break;
    case monthNumber = 9:
        console.log('Сентябрь');
        break;
    case monthNumber = 10:
        console.log('Октябрь');
        break;
    case monthNumber = 11:
        console.log('Ноябрь');
        break;
    case monthNumber = 12:
        console.log('Декабрь');
        break;
    default:
        console.log('Нету таких месяцев');
        break;
}