let display = document.querySelector('.display')
function insert(num) {
    if (display.innerHTML == 'Impossible' || display.innerHTML == 'Infinity') {
        display.innerHTML = '';
    }
    display.innerHTML += num;
}
function clearAll() {
    display.innerHTML = '';
}
function clearOne() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}
function calculate() {
    if (display.innerHTML) {
        display.innerHTML = display.innerHTML = eval(display.innerHTML);
    }
}
function squareRoot() {
    if (display.innerHTML) {
        if (display.innerHTML > 0) display.innerHTML = display.innerHTML = Math.sqrt(display.innerHTML);
        if (display.innerHTML < 0) display.innerHTML = 'Impossible';
    }
}
document.onkeydown = function (e) {
    console.log(e)
    switch (e.keyCode) {
        case 8:
            clearOne()
            break;
        case 13:
            calculate()
            break;
        case 49:
            insert(1)
            break
        case 50:
            insert(2)
            break
        case 51:
            insert(3)
            break
        case 52:
            insert(4)
            break
        case 53:
            insert(5)
            break
        case 54:
            insert(6)
            break
        case 55:
            insert(7)
            break
        case 56:
            if (e.shiftKey && e.keyCode === 56) {
                insert('*')
            }
            else {
                insert(8)
            }
            break
        case 57:
            insert(9)
            break
        case 48:
            insert(0)
            break
        case 187:
            if (e.shiftKey && e.keyCode === 187) {
                insert('+')
            }
            break
        case 81:
            insert('/');
            break
        case 189:
            insert('-')
            break
        case 190: a
            insert('.')
            break
        default:
            break;
    }
};
