'use strict';
/* let styles = ["Джаз", "Блюз",];
styles.push("Рок - н - ролл");
styles[Math.floor((styles.length-1)/2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Рэгги");


let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // "a","b",function

 */
/* 
function sumInput() {

let numbers = [];

while (true) {

    let value = prompt("Введите число", 0);
      // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
    sum += number;
    }
    return sum;
}

alert(sumInput()); */



function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }
  

  let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // Вася



  let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.id < 3);
  
alert(someUsers.length); // 2
  

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6



function sumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
      result += i;
  }
  return result;  
}

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}


function sumTo(n) {
  return sum = (1 + n) / 2 * n;
}


function factorial(n) {
  let fact = 0;
  while (n >= 1) {
    fact = n * factorial(n - 1);
  };
  return fact; 
} //непроверенный


function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120


function fib(n) {
  let a = 1;
  let b = 1;
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function printList(list) {
  for (let key in obj) {
    alert(key);
  }
}