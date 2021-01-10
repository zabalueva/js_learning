
// Верно ли, что null == undefined?

/*
Какие из этих вызовов синтаксически верно сгенерируют исключение?

throw "Ошибка"
throw new Error("Ошибка")
throw { message: "Ошибка" }
throw Error("Ошибка")
Ни один.
*/


/*
Что выведет код?

function User() { }
User.prototype = { admin: false };

let user = new User();
console.log(user.admin);
*/


/*
Какие вызовы parseInt возвратят число?

parseInt("1px")
parseInt("-1.2")
parseInt("0 минут")
parseInt("$1.2")
*/



/*
Выберите правильные варианты объявления массива, 
то есть такие, в результате которых мы получаем массив из двух чисел 1 и 2.

new Array.prototype.constructor(1, 2)
new Array(1, 2)
Array(1, 2)
[1, 2]
1..2
Все варианты правильные.
*/

/* 
Что выведет этот код?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

let a = (1,5 - 1) * 2;

console.log(a);

0.999999999
1
0.5
8
-0.5
4
*/

/* 
Есть ли разница в выражениях?

!!( a && b )
(a && b)

*/


/* 

Что выведет console.log?

console.log(str); // ?
var str = "Hello";
Hello
undefined
Будет ошибка.

*/


/* 

Что выведет этот код?

  let obj = {
    "0": 1,
    0: 2
  };

console.log( obj["0"] + obj[0] );
2
3
4
12
В коде ошибка.

*/


/* 

Что получится, если сложить true + false?

"truefalse"
0
1
NaN

*/


/* 

Сработает ли вызов функции до объявления в этом коде:

sayHi();

function sayHi() {
  alert("Hello");
}
Да, сработает.
Нет, вызов должен стоять после объявления.

*/


/* 

Переменные apple и Apple (с большой буквы) – это одна и та же или разные?

Одна и та же.
Разные.
С большой буквы переменные называть нельзя.
Слово «apple» является зарезервированным, нельзя использовать.

*/


/*

Чему равно 2 && 1 && null && 0 && undefined ?

2
1
null
0
undefined
false 

*/


/*

Что выведет этот код?

const f = function g() { return 23; };

console.log( typeof g() );
number
undefined
function
ошибка. 

*/


/* 

Что выведет этот код?

if (function f(){}) {
  console.log(typeof f);
}
undefined
function
null
object
В коде ошибка.

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/


/* 

*/



