/* function duplicateEncode(word){
	let arr = [];
let arrWord = Array.from(word.toLowerCase());
for (let i = 0; i < arrWord.length; i++){
	if (arrWord.lastIndexOf(arrWord[i]) !== arrWord.indexOf(arrWord[i])){
		arr.push(")");
	} else arr.push("(")
}
return arr.join('');
}

console.log(duplicateEncode("(( @")) */

/* function checkConcatenatedSum(int, num) {
	let arr = Math.abs(int).toString().split('');
  let result =[];
  for (let i = 0; i < arr.length; i++){
		result.push(+arr[i].repeat(num));
	}
  return Math.abs(int) == result.reduce((sum, c) => sum + c, 0 )

}

console.log(checkConcatenatedSum(-2997, 3)) */


var FilterString = function(value) {
	let result = [];
	for (let i = 0; i < value.length; i++) {
		
		if (/* (typeof(+value[i]) === 'number') &&  */((+value[i]).toString() !== 'NaN')) {
			result.push(value[i]);
		}
	}
	return result.join('');
}
console.log(FilterString('a1b2c3'))
