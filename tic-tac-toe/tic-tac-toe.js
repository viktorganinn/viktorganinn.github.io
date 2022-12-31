function start() {
    document.getElementById('cross').disabled = true;
    document.getElementById('zero').disabled = true;
}
function play(n) {
    if (document.getElementById('cross').checked) {
        let square = 'cross_' + n;
        document.getElementById(square).className = 'played';
    }
    if (document.getElementById('zero').checked) {
        let square = 'zero_' + n;
        document.getElementById(square).className = 'played';
    }
}

let lastPlay = 0;
function ready() {
let k = 0;
for (let i=1; i<=9; ++i) {
    if (document.getElementById('cross').checked) {
        let square = 'cross_' + i;
        if (document.getElementById(square).className == 'played') {
            ++k;
            lastPlay = i;

        }
    }
    if (document.getElementById('zero').checked) {
        let square = 'zero_' + i;
        if (document.getElementById(square).className == 'played') {
            ++k;
            lastPlay = i;
        }
    }
}
if (k == 1) first_round();
if (k > 1) go_on();
}

function first_round() {
    let robot, symbol, robotAnswer;
    if (document.getElementById('cross').checked) {
        symbol = 'zero_';
    } else {
        symbol = 'cross_';
    }
            if (lastPlay == 1) {
            robot = randomizeThree(2,4,5);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 2) {
            robot = randomizeThree(1,3,5);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 3) {
            robot = randomizeThree(2,5,6);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 4) {
            robot = randomizeThree(1,5,7);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 5) {
            robot = randomizeEight();
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 6) {
            robot = randomizeThree(3,5,9);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 7) {
            robot = randomizeThree(4,5,8);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 8) {
            robot = randomizeThree(5,7,9);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
        if (lastPlay == 9) {
            robot = randomizeThree(5,6,8);
            robotAnswer = symbol + robot;
            document.getElementById(robotAnswer).className = 'played';
        }
}

function randomizeThree(a,b,c) {
    let d = Math.floor(Math.random() * 10);
    if (Math.abs(d - a) <= Math.abs(d - b)) {
        if (Math.abs(d - b) <= Math.abs(d - c)) return a; 
    }
    if (Math.abs(d - a) <= Math.abs(d - c)) {
        if (Math.abs(d - c) <= Math.abs(d - b)) return a; 
    }
    if (Math.abs(d - b) <= Math.abs(d - a)) {
        if (Math.abs(d - a) <= Math.abs(d - c)) return b; 
    }
    if (Math.abs(d - b) <= Math.abs(d - c)) {
        if (Math.abs(d - c) <= Math.abs(d - a)) return b; 
    }
    if (Math.abs(d - c) <= Math.abs(d - b)) {
        if (Math.abs(d - b) <= Math.abs(d - a)) return c; 
    }
    if (Math.abs(d - c) <= Math.abs(d - a)) {
        if (Math.abs(d - a) <= Math.abs(d - b)) return c; 
    }
}
function randomizeEight() {
    let sqnumber;
    while (true) {
        sqnumber = Math.floor(Math.random() * 10);
        if ((sqnumber != 5)&&(sqnumber != 0)&&(sqnumber != 10)) break;
    }
    return sqnumber;
}
function go_on() {
    let sym;
    let comb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    
    for (let i=1; i<=9; ++i) {
        if (document.getElementById('cross').checked) { //если игрок играет за крестик


            let square = 'cross_' + i;
            if (document.getElementById(square).className == 'played') { //если в данной ячейке стоит его символ
                for (let key in comb) {
                    for (let j = 0; j <= 2; ++j) {
                        if (comb[key][j] == i) comb[key][j] = 'x'; //замени номер в списке комбинаций на крестик
                    }
                }
            }
            square = 'zero_' + i;
            if (document.getElementById(square).className == 'played') { //если в данной ячейке стоит нолик (символ противника)
                for (let key in comb) {
                    for (let j = 0; j <= 2; ++j) {
                        if (comb[key][j] == i) comb[key][j] = 'o'; //замени номер в списке комбинаций на нолик
                    }
                }
            }

        }
        if (document.getElementById('zero').checked) { //аналогично, если игрок выбрал нолик


            let square = 'zero_' + i;
            if (document.getElementById(square).className == 'played') {
                for (let key in comb) {
                    for (let j = 0; j <= 2; ++j) {
                        if (comb[key][j] == i) comb[key][j] = 'o';
                    }
                }
            }
            square = 'cross_' + i;
            if (document.getElementById(square).className == 'played') {
                for (let key in comb) {
                    for (let j = 0; j <= 2; ++j) {
                        if (comb[key][j] == i) comb[key][j] = 'x';
                    }
                }
            }
        
        }
    }
    let playerSym;
    if (document.getElementById('cross').checked) {
        sym = 'o';
        playerSym = 'x';
    } else {
        sym = 'x';
        playerSym = 'o';
    }
    let newSym;
    let counter = 0;
    for (key in comb) { 
        if ((comb[key][0] == comb[key][1])&&(comb[key][0] == sym)) { //если в комбинации есть два одинаковых символа противника
            if (typeof(comb[key][2]) != 'number') continue; //если оставшаяся ячейка пуста (содержит свой номер, а не символ)
            newSym = comb[key][2]; //запиши номер этой ячейки
            comb[key][2] = sym; //поставь символ противника в эту ячейку
            ++counter;
            break;
        }
        if ((comb[key][0] == comb[key][2])&&(comb[key][0] == sym)) {
            if (typeof(comb[key][1]) != 'number') continue;  
            newSym = comb[key][1];
            comb[key][1] = sym;
            ++counter;
            break;
        }
        if ((comb[key][1] == comb[key][2])&&(comb[key][1] == sym)) {
            if (typeof(comb[key][0]) != 'number') continue;  
            newSym = comb[key][0];
            comb[key][0] = sym;
            ++counter;
            break;
        }
    }
    newSquare = '';
    if (counter != 0) {
    if (document.getElementById('cross').checked) {
        newSquare = 'zero_' + newSym;
        document.getElementById(newSquare).className = 'played';
    } 
    if (document.getElementById('zero').checked) {
        newSquare = 'cross_' + newSym;
        document.getElementById(newSquare).className = 'played';
    }
} else {
//если не нашлось своей комбинации , проверь комбинации соперника
newSym = 0;
for (key in comb) { 
    if ((comb[key][0] == comb[key][1])&&(comb[key][0] == playerSym)) { //если в комбинации есть два символа игрока
        if (typeof(comb[key][2]) != 'number') continue; //если оставшаяся ячейка пуста (содержит свой номер, а не символ)
        newSym = comb[key][2]; //запиши номер этой ячейки
        comb[key][2] = sym; //поставь символ противника в эту ячейку
        ++counter;
        break;
    }
    if ((comb[key][0] == comb[key][2])&&(comb[key][0] == playerSym)) {
        if (typeof(comb[key][1]) != 'number') continue;  
        newSym = comb[key][1];
        comb[key][1] = sym;
        ++counter;
        break;
    }
    if ((comb[key][1] == comb[key][2])&&(comb[key][1] == playerSym)) {
        if (typeof(comb[key][0]) != 'number') continue;  
        newSym = comb[key][0];
        comb[key][0] = sym;
        ++counter;
        break;
    }
}
if (counter != 0 ) {
    let newSquare;
    if (document.getElementById('cross').checked) {
        newSquare = 'zero_' + newSym;
        document.getElementById(newSquare).className = 'played';
        //если срабатывает эта часть, следующая не должна
    } else {
        newSquare = 'cross_' + newSym;
        document.getElementById(newSquare).className = 'played';
    }
    }
}
let leftouts = [];
if (counter == 0) {
for (key in comb) {
    for (j = 0; j <= 2; ++j) {
        if (typeof(comb[key][j]) == 'number') {
            leftouts.push(comb[key][j]);
        }
    }
}
let left = leftouts[Math.floor(Math.random()*leftouts.length)];
newSquare = '';
if (document.getElementById('cross').checked) {
    newSquare = 'zero_' + left;
    if (newSquare != 'zero_undefined') document.getElementById(newSquare).className = 'played'
} else {
    newSquare = 'cross_' + left;
    if (newSquare != 'cross_undefined') document.getElementById(newSquare).className = 'played'
}
}
for (key in comb) {
        if ((comb[key][0] == comb[key][1])&&(comb[key][1] == comb[key][2])&&(comb[key][2] == 'x')) {
            alert('Победили крестики!');
            startAgain();
        }
        if ((comb[key][0] == comb[key][1])&&(comb[key][1] == comb[key][2])&&(comb[key][2] == 'o')) {
            alert('Победили нолики!');
            startAgain();
        }
}
counter = 0;
let squareCheck;
for (let i = 1; i<= 9; ++i) {
    squareCheck = 'cross_' + i;
    if (document.getElementById(squareCheck).className == 'played') ++counter;
    squareCheck = 'zero_' + i;
    if (document.getElementById(squareCheck).className == 'played') ++counter;
}
if (counter == 9) {
    alert('Ничья!');
    startAgain();
}
}
function startAgain() {
    let squareCh;
    for (let i = 1; i <= 9; ++i) {
        squareCh = 'cross_' + i;
        if (document.getElementById(squareCh).className == 'played') {document.getElementById(squareCh).className = 'notplayed'}
        squareCh = 'zero_' + i;
        if (document.getElementById(squareCh).className == 'played') {document.getElementById(squareCh).className = 'notplayed'}
    }
    document.getElementById('cross').disabled = false;
    document.getElementById('zero').disabled = false;
}