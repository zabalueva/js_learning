
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


function anagram(str, trs) {
    console.log(str.split(''))
    let arr = str.split('');
    let arr2 = trs.split('');
    if (arr.length === arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            
            return arr.includes(arr2[i], 0)
                
        }
    };
}
    


anagram('ref', "fer")