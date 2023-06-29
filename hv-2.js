// Задание 1

let a = 10

alert(a);

a = 20

alert(a);

// Задание 2

const iphoneBirth = 2007

alert(iphoneBirth);

// Задание 3

const creatorJs = 'Брендан Эйх'

alert(creatorJs);

// Задание 4

let numA = 10

let numB = 2

alert(numA + numB);
alert(numA - numB);
alert(numA * numB);
alert(numA / numB);

// Задание 5

let result = 2 ** 5

alert(result);

// Задание 6

let c = 9

let b = 2

alert(c % b);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8

let age = Number(prompt("Сколько вам лет?"));
alert(age);

// Задание 9.0

let user = {
    name: 'Vasiliy',
    age: 28,
    isAdmin: true,
}

// Задание 9.1

user["city of residence"] = 'Gus-Hrustalniy';

// Задание 9.2

user.age = 18;

// Задание 9.3

delete user["city of residence"];

// Задание 9.4

let info = prompt('Какую информацию хотите узнать о пользователе?');

console.log(user[info]);

alert(user);

// Задание 10

let userName = prompt("Ваше имя");

alert("Привет " + userName + "!");
