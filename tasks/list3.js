
/* function isAnagram(test, original) {
  test = test.toLowerCase().split('');
	original = original.toLowerCase().split('');
	let finded;
	if (test.length == original.length) {
		for (let i = 0; i <= test.length; i++) {
			original.includes(test[i]) ?



			function finder() {
				original.includes(test[i]);
			}
			finded = original.filter(finder);
			if (finded.length == 1) return true;
		}
	}
  return false;
}; */

/* for (let i=0; i <= test.length; i++){
     original.indexOf(test[i]) == -1
		} */

/* function mygcd(x, y) {
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

console.log(NOD(10, 3))
 */
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


function capital(capitals){
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

