
/* const str = 'fgfggg';
console.log(str[0]); */

/* function conc(...arguments) {
    return arguments
        .toString()
        .split(",")
        .splice(0)
        .join(arguments[0])
} */

/* function conc() {
    return [].slice.call(arguments, 1).join(arguments[0])
}

console.log(conc('*', '1', 'b', '1c'));

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 100, i);
}
 */
/* let sum;
function f(a, b) {
    if (b !== undefined) {
        return a + b
    } else {
        return function b(b) {
            return a + b;
        }
    }
}
console.log(f(4)(3)); */

/* const obj = {
    x: 'bob',
    funk: function () { console.log(this.x) }
};

function value() {
    console.log( this.x);
}

value.call(obj);
value.apply(obj);
obj.funk(); */
/*
console.log(typeof function () { })

function palindrome(str) {
return str === str.split("").reverse().join("")
}

console.log(palindrome('racecar')) */


/* function output (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        } else if (i % 5 == 0) {
                console.log('buzz')
            } else if (i % 3 == 0) {
                console.log('fizz')
            } else {
                console.log(i)
            }
    }
}

output (15) */


/* function anagram(str, trs) {
    console.log(str.split(''))
    let arr = str.split('');
    let arr2 = trs.split('');
    if (arr.length === arr2.length) {
        for (let i = 0; i < arr2.length; i++) {

            return arr.includes(arr2[i], 0)

        }
    };
}

anagram('ref', "fer") */


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


const fra  = "fefefe"
console.log(fra.replace(/[^\w]/g))


console.log(buildCharObject(fra))


const findVowels = str => {
    const matches = str.match(/[aeiou]/gi);
    console.log(matches)
    return matches ? matches.length : 0
}

findVowels(fra)

//ниже недоработанный код
const num0 = 0;
const num1 = 1;
const fibbonachi = (num) => {
    let arr = [0, 1];
    /* for num */
    const nextNum = num0 + num1;
    arr.push(nextNum);
    num0 = nextNum;

    return arr[num];
}



/* throw "Ошибкаc"; */
/* throw new Error("Ошибкаy") */
/* throw { message: "Ошибкаh" } */
/* throw Error("Ошибка") */

/* function User() { }
User.prototype = { admin: false };

let user = new User();
console.log(user.admin);

console.log(parseInt("1px"));
console.log(parseInt("-1.2"));
console.log(parseInt("0 минут"));
console.log(parseInt("$1.2"));

console.log(new Array.prototype.constructor(1, 2));
console.log(new Array(1, 2));
console.log(Array(1, 2));
console.log([1, 2]);
/* console.log(1..2) */


function mygcd(x, y) {
	let targ;
	if (x >= y) {
		targ = x % y;
		targ == 0 ? y : (x % targ == 0 && y % targ == 0) ? targ : targ = y % targ;
	} else {
		targ = y % x;
		if (targ == 0) {
			return x;
		} else if (x % targ == 0 && y % targ == 0)
		return targ;
	}
	return targ;
}

console.log(mygcd(8,9))