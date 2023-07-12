// Задание 1

let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

function calc(a, b) {

    if (a < b) {

        return a;

    } else {
        return b;
    }

}

let result = calc(a, b);

console.log(result);

// Задание 2

let userNumber = prompt('Введите число');

function evenNumber(userNumber) {
    return userNumber % 2 == 0;
}

let evenResult = evenNumber(userNumber);

if (evenResult) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}

// Задание 3

let recNumber = prompt('Введите число');

function rectangle(recNumber) {
    return recNumber * recNumber;
}

console.log(rectangle(recNumber));

// Задание 4

let userAge = prompt('Сколько вам лет?');

function helloUser(userAge) {
    if (userAge < 0) {
        let message = 'Вы ввели неправильное значение';
        return message;
    } else if (userAge >= 0 && userAge <= 12) {
        let message = 'Привет, друг!';
        return message;
    } else {
        let message = 'Добро пожаловать!';
        return message;
    }

}

alert(helloUser(userAge));

// Задание 5

let c = prompt('Введите корректное число');
let d = prompt('Введите корректное число');

function correctNumber(c, d) {
    if (isNaN(c && d)) {
        let noNumber = 'Одно или оба значения не являются числом';
        return noNumber;
    } else {
        let mult = c * d;
        return mult;
    }
}

console.log(correctNumber(c, d));

// Задание 6

let userNum = prompt('Введите точно корректное число');

function correctCube(userNum) {
    if (isNaN(userNum)) {
        let uncorrect = 'Переданный параметр не является числом';
        return uncorrect;
    } else {
        let correctNum = userNum * userNum * userNum;
        return correctNum
    }
}

console.log(userNum + ' в кубе равняется ' + correctCube(userNum));

// Задание 7

let circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};
let circle2 = {
    radius: 8,
    getArea: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};


console.log("Площадь круга 1: " + circle1.getArea());
console.log("Периметр окружности 1: " + circle1.getPerimeter());
console.log("Площадь круга 2: " + circle2.getArea());
console.log("Периметр окружности 2: " + circle2.getPerimeter());
