function monthNumberGame() {
    let monthNumber = String(prompt('Введите номер месяца'));

    switch (monthNumber) {
        case '12':
        case '1':
        case '2':
            alert('зима');
            break;
        case '3':
        case '4':
        case '5':
            alert('весна');
            break;
        case '6':
        case '7':
        case '8':
            alert('лето');
            break;
        case '9':
        case '10':
        case '11':
            alert('осень');
            break;

        default:
            alert('такого месяца не бывает')
            break;
    }
}

function zapomniSlovaGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    for (i of words) {
        words = words.sort(() => Math.random() - 0.5);
        alert(words);
        let userAnswer = prompt('Чему равнялся первый элемент массива?');
        let userAnswer2 = prompt('Чему равнялся последний элемент массива?');
        if (userAnswer === words[0] && userAnswer2 === words[6]) {
            alert('Поздравляю, вы прошли игру!');
            break;
        } else if (userAnswer === words[0] || userAnswer2 === words[6]) {
            alert('Вы были близки к победе!');
            break;
        } else {
            alert('Неправильно');
            break;
        }
        break;
    }

}