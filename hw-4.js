//while(true) {
//const text = String(prompt('Введите текст'));
//if (text === 'continue') {
//    continue;
//}
//console.log(text);
//if (text === 'break') {
//    break;
//}

//}


// Задание 1

let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

// Задание 2

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

// Задание 3

let b = 7;

while (b <= 22) {
    console.log(b);
    b++;
}

// Задание 4

let obj = {
    'Коля': "200",
    'Вася': "300",
    'Петя': "400"
}

for (let zp in obj) {
    console.log(zp + ' - зарплата ' + obj[zp] + ' долларов ');
}

// Задание 5

for (let i = 1000, num = 0; i > 50; i /= 2, num++) {
    i /= 2, num++;
    console.log(i);
    console.log(num);

}

// Задание 5

for (let fri = 3; fri <= 31; fri += 7) {
    console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
}