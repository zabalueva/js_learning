/* let arr = [];
for (let { x = 5, y = 2 } of [{ x: 1 }, { y: 4 }, { z: 4 }]) {
    arr.push(x, y);
}
arr.forEach(k => {
    console.log(k);
}); */

/* var arr = [];
arr[0] = arr.length;
arr[1] = arr.length +1;
arr[2] = arr.length + arr[1];
document.write(arr);

var a = 5;
var b = ++a;
console.log(a + b) */

/* let a = (1,5 - 1) * 2;

console.log(a);


var str = "Hello";
console.log(str); 


let obj = {
    "0": 1,
    0: 2
  };

console.log(obj["0"] + obj[0]);



console.log(2 && 1 && null && 0 && undefined) */


/* const f = function g() { return 23; };

console.log(typeof g()); */ //ошибка

/* if (function f() { }) {
    
    console.log(typeof f); //undef
}
   */
let result = [];
for (var i = 0; i < 5; i++){
    (function() {
        var j = i;
        result.push(function () {
            console.log(result[j])
        })
    })()
}

result[2]()

console.log(typeof function () { })