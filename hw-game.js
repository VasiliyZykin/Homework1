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