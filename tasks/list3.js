
/* function isAnagram(test, original) {

	let findedTesty = {};
	let findedOriginally = {};

	test.toLowerCase().split('').forEach(element => {
			findedTesty[element] = findedTesty[element] + 1 || 1;
		});
		original.toLowerCase().split('').forEach(element => {
			findedOriginally[element] = findedOriginally[element] + 1 || 1;
		});
		if (Object.keys(findedTesty).length !== Object.keys(findedOriginally).length){
			return false;

	}

		for (let char in findedTesty) {
			console.log(char)
			if (findedTesty[char] !== findedOriginally[char]) {
				return false;
			}

			}


	return true;
};


console.log(isAnagram("ound", "round")) */



/*
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


console.log(anagram('роз', 'Зор')) */


function mygcd(x, y) {
	let targ;
	let result;

	if (x % y == 0) {
		result = y;
	} else if (y % x == 0) {
		result = x;
	}

	while (x >= 1 && y >= 1) {
		if (x > y) {
			x %= y
		} else { y %= x };
	}
	


	return result;

}

console.log(mygcd(40, 5))



function NOD (x, y) {
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
		x += y;
		console.log(y)
  return x;
}

console.log(NOD(9, 3))

/*
function factorial1(n){
	let result = 1;
	while(n){
			result *= n--;
	}
	return result;
};
console.log(factorial1(2));

function factorial2(n){
	let result = 1;
	for (let i = 1; i <= n; i++) {
			result *= i;
	}
	return result;
};
console.log(factorial2(2));

function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
};
console.log(factorial(2));
 */
/*
function removeEveryOther(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (i+1 % 2 !== 0) {
			arr.splice(i, 1);
		}
	}
  return arr;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) */

/* function distinct(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr.includes(arr[i], i )) {
			if (!result.includes(arr[i], 0)) {
					result.push(arr[i]);
					}
		}
	}
  return result;
}

console.log(distinct([1,1,2,4,5,4,4,4,3])) */

/* function positiveSum(arr) {
	let result = arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
	return result;
}

console.log(positiveSum([1,1,2, -1])) */


/* function capital(capitals){
  let result = [
    `The capital of ${capitals[0].state || capitals[0].country} is ${capitals[0].capital}`
    ]
  if (capitals.length > 1) {
    for (let i = 1; i < capitals.length; i++){
      result.push(`The capital of ${capitals[i].state || capitals[i].country} is ${capitals[i].capital}`)
  }
}
  return result;
}


function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  })
}


state_capitals = [{
	"state" : 'Maine',
	capital: 'Augusta'
}]

mixed_capitals = [
	{
	"state": 'Maine',
	capital: 'Augusta'
},
	{
		country: 'Spain',
		"capital": "Madrid"
	}]
 */
/* const arr = [
	{name: 'width', value: 10},
	{name: 'height', value: 20}
 ]


function getObj(arr) {
	const obj = {};

	arr.forEach(item =>	obj[item.name] = item.value	);

	return obj;
}


console.log(getObj(arr))


console.log(typeof (function(){}()))
 */



/* console.log(new Array.prototype.constructor(1, 2))

let a = (1,5 - 1) * 2;

console.log(a); */

/* function fizzbuzz(n)
{ let result = [];
  for (let i = 1; i < n; i++){
    if (i % 3 == 0) {
     result.splice(i, 1, "Fizz")
    } else if (i % 5 == 0) {
      result.splice(i, 1, "Buzz")
    } else result.push(i);
  }
 return result;

}


console.log(fizzbuzz(5))
 */

/* function findShort(s){
  let words = s.split(" ");
	let shortest = words[0].length;
	words.forEach(element => {
		if (element.length < shortest) {
			shortest = element.length;
		}
	});

	return shortest;
}

console.log(findShort("My love i world")) */

/* function squareDigits(num) {
	let result = [];
	for (let i = 0; i < num.toString().length; i++){
		result.push(num.toString()[i] * num.toString()[i]);
	}
	return result.join("");
}

console.log(squareDigits(456))

function squareDigitals(numb) {
	return numb.toString().split("").map(item => item*item).join("");
}

console.log(squareDigitals(45666)) */