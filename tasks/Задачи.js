/* 
Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]? */

/* 
Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4. */

Number.prototype.plus = function (value) {
	return this + value;
}

Number.prototype.minus = function (value) {
	return this - value;
}

/* 
 Почему плохо писать прямо в прототипы базовых типов?

 Мы рассчитываем, что стандартные методы сработают согласно документации, 
 но какой-то разработчик можем переопределить метод, 
 и он вернет совершенно неожиданный результат.
*/

/* 
Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', 
реализуйте ее так, что бы она вернула строку '1*b*1c' */


function getStr() {
	return [].slice.call(arguments, 1).join(arguments[0])
}

/* 
Дано дерево, надо найти сумму всех вершин. */

let sum = 0;

function getSum(obj) {
	sum += obj.valueNode;
	if (obj.next != null) {
		for (let i = 0; i < obj.next.length; i++) {
			getSum(obj.next[i]);
		}
	}

	return sum;
}

let tree1 = {
				valueNode: 1,
				next: [
					{
						valueNode: 3,
						next: null
					},
					{
						valueNode: 2,
						next: null
					}
				]
			} 

let tree = {
	valueNode: 3,
	next: [{
				valueNode: 1,
				next: null
			},
			{
				valueNode: 3,
				next: null
			},
			{
				valueNode: 2,
				next: null
			},
			{
				valueNode: 2,
				next: [
					{
						valueNode: 1,
						next: null
					},
					{
						valueNode: 5,
						next: null
					}
				]
			}]
};
console.log(getSum(tree1));
sum = 0;
console.log(getSum(tree));

/* 
Объяснить в какой последовательности выведутся цифры и почему так. */

console.log(1);
setTimeout(function() {
	console.log(2);
}, 0)
console.log(3);

/* 
Что будет выведено в консоль, 
как можно модифицировать пример что бы он возвращал правильный результат
(назовите как можно больше способов)? */

for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// Самый распространенный, обернуть в замыкание

for (var i = 0; i < 10; i++) {
	(function (i) {
		setTimeout(function () {
			console.log(i);
		}, 100);
	})(i)
}

// Не все обращали внимание, что в i можно передать не только контекст

for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i);
	}.bind(this, i), 100);
}
//Так же методам setInterval и setTimeout можно передать аргументы, которые будут прокинуты в качестве аргументов калбек-функции

for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i);
	}, 100, i);
}

//es6

for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

/* 
Реализовать Foo */
/* 
function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(Book, 'Учебник javascript', 'Петр Сергеев') */


/* 
Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
*/

 function f(a, b) {
 	if (b !== undefined) {
 		return a + b;
 	} else {
 	return function (b) {
 		return a + b;
 		}
 	}
 }

 /* 
Более сложный вариант f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
*/

function f(arg) {
	let value = arg;

	return function (arg) {
		if (arg !== undefined) {
			return f(value + arg);
		} else {
		return value;
		}
	}
}

/*
Самый сложный вариант, когда вызов этой конструкции не заканчивается пустыми скобками, 
а значит мы не имеем явного указателя на выход.

foo(1)(2)(3) -> 6
foo(1)(2)(3)(4) -> 10
foo(-1)(2)(3)(4)(7) -> 15
foo(1)(2)(3)...(n) вернет результатом сумму 1+2+3...+n
*/

function foo(value) {
	let acc = value;
	function addNext(next) {
		acc += next;
		return addNext;
	}
	addNext.toString = addNext.valueOf = function() {
		return acc;
	}
	return addNext;
}

/*
Напишите код, который сделает из массива объект
*/

const arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]

function getObj(arr) {
    const obj = {};
    
    arr.forEach(function(item){
        obj[item.name] = item.value;
    });
    
    return obj;
}

/*
Есть функция и объект. Напишите все известные вам способы, 
чтобы вывести в консоли значение x из объекта используя функцию
*/

/* function f() { console.log(this.x); }
const obj = {x: 'bar'};

f.call(obj, a, b);
f.apply(obj, [a, b]);

obj.funk = function f() { console.log(this.x); }
obj.funk();

function f() { console.log(this.x); }.bind(obj, a, b);
f(); */

/*
Что вернёт этот код — typeof (function(){})()
*/

/* 
Палиндром

Дана строка, нужно написать функцию, которая возвращает значение true, если строка — палиндром, и false, если это не так. При решении задачи необходимо учитывать пробелы и знаки препинания. Пример:

palindrome('racecar')  ===  true
palindrome('table')  ===  false */

const palindrome = str => {
  // Меняем регистр строки на нижний
  str = str.toLowerCase()
  // Переворачиваем строку и возвращаем результат сравнения
  return str === str.split('').reverse().join('')
}

/* 
FizzBuzz

Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:

выводит fizz вместо чисел, кратных 3;
выводит buzz вместо чисел, кратных 5;
выводит fizzbuzz вместо чисел, кратных и 3, и 5. */

const fizzBuzz = num => {


  for(let i = 1; i <= num; i++) {
    // Проверяем, кратно ли число 3 и 5
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } // Проверяем, кратно ли число 3
      else if(i % 3 === 0) {
      console.log('fizz')
    } // Проверяем, кратно ли число 5
      else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }

  
}

/* 
Анаграмма

Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Важны только символы, пробелы или знаки препинания не учитываются. Пример:

anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false */

const buildCharObject = str => {
  const charObj = {}
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    // Если объект уже содержит пару ключ-значение равную значению в цикле,
    // увеличиваем значение на 1, в противном случае добавляем букву в качестве ключа
    // и 1 в качестве значения
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}
// Главная функция
const anagram = (strA, strB) => {
  // Создаём объект для хранения strA
  const aCharObject = buildCharObject(strA)
  // Создаём объект для хранения strB
  const bCharObject = buildCharObject(strB)
  // Сравниваем количество ключей в обоих объектах 
  // (анаграммы должны иметь одинаковое количество букв)
  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false
  }
  // Если оба объекта имеют одинаковое количество ключей, мы можем быть уверены,
  // что обе строки имеют одинаковое количество символов. Теперь мы можем сравнить
  // оба объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве
  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false
    }
  }
  // Если проверка успешна, строки являются анаграммами — возвращаем true
  return true
}

/* 
Найти гласные

Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».

Примеры:

findVowels('hello') // --> 2
findVowels('why') // --> 0 */

const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}

// Краткое решение

const findVowels = str => {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

/* 
Фибоначчи

Последовательность Фибоначчи — это порядок чисел, 
где каждое последующее число является суммой двух предыдущих. 
Например, первые десять чисел последовательности выглядят так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 

Напишите функцию, которая возвращает n-ую запись в последовательности, где n — это число, которое вы передаёте в качестве аргумента функции.

Пример:

fibonacci(3)  // --> 2

*/

const fibonacci = num => {
  // Сохраняем последовательность Фибоначчи, которую собираемся сгенерировать,
  // внутри массива и инициализируем массив первыми двумя числами последовательности
  const result = [0, 1]

  for(let i = 2; i <= num; i++) {
    // Поместим сумму двух чисел, предшествующих позиции i в массиве результатов, 
    // в конец этого массива
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // Вернём последнее значение из массива результатов
  return result[num]
}

const fibonacci = num => {
  // Если num равно 0 или 1, возвращаем num
  if(num < 2) {
    return num
  }
  // Рекурсия здесь
  return fibonacci(num - 1) + fibonacci(num - 2)
}