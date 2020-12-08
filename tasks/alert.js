
'use strict';

// "" + 1 + 0 10
// "" - 1 + 0 NaN !!!
// true + false 1
// 6 / "3" 2
// "2" * "3" 6
// 4 + 5 + "px" 45px !!!
// "$" + 4 + 5 $45
// "4" - 2 2
// "4px" - 2 NaN
// 7 / 0 Infinity
// "  -9  " + 5 -9  5 !!!
// "  -9  " - 5 -14
// null + 1 1
// undefined + 1 undefined !!!
// " \t \n" - 2 undefined !!!

/* let nameUser = prompt('Введите Ваше имя', '');

alert(`Приветствую, ${nameUser}!`); // 



let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK */


/* let age = prompt('Сколько вам лет?', '');
let accessAllowed = age > 18; //let accessAllowed = age > 18 ? true : false;

alert(accessAllowed);
 */
/* 
let result = prompt('Whats the "официальное название" JavaScript?', '');

if (result == 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('You dont know? ECMAScript!');
} */

/* let age = prompt('Введите число', '');

if (!(age >= 14 && age <= 90)) {
    alert('perfect');
} else {
    alert('excuse');
}  */

// let result = (a + b < 4) ? 'Мало': 'Много';

/* let login = prompt('Whats the ', '');

let message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина':
    '';

alert(message);
 */

/* let login = prompt('Кто там?', '');

if (login == 'Админ') {
    let key = prompt('Пароль?', '');
    if (key == 'Я Главный') { 
        alert('Здравствуйте!');
    } else if (key == '' || key == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == '' || login == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
 */

/* for (let i = 1; i < 10; i++) {
    if ((i % 2) == 0) {
        alert(i);
    }
}

let i = 0
while (i < 3) {
    alert(`number ${i}!`);
    i++;
} */


/* let num;

do {
num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

 */

/* let num;
num = prompt("Введите интервал", 0);

nextPrime:
for (let i = 2; i <= num; i++) { 
    for (let j = 2; j < i; j++) {
        if ((i % j) == 0) continue nextPrime;
    }
    alert(i);
}



let browser

if ( browser == 'Edge') {
    alert('Youve got the Edge!');
} else if ( browser == 'Chrome'|| browser =='Firefox'|| browser =='Safari'||browser =='Opera') {
    alert('Okay we support these browsers too');
} else {
    alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2 :
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}


function checkAge(age) {
    return (age > 18) ? "true" : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
} */

/* function min(a, b) {
    a = prompt("Введите первое число", 0);
    b = prompt("Введите второе число", 0);
    return (a > b) ? b : (b > a) ? a : alert('Числа равны');
}
alert(min())

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}
 */

/* function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`); */

/* function randomInteger(min, max) {
    let num = min + Math.random() * (max - min);
    return num.toFixed(0);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
alert(random(1, 5));
  
function sum(a, b) {
    return a + b;
  }
  
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
  
 */

/* let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); 
alert("\u00A9");
alert("\u{1F60D}");

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
} */

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}


function extractCurrencyValue(str) {
    return +str.slice(1);
}


Function.prototype.defer = function defer(ms) {
    setTimeout(this, ms);
}

setTimeout();

