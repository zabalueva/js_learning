/* function inter(s1, s2) {
	let res = []
	res.push(...s1, ...s2);
	let res2 = [];
	for (let el of res) {
		if (res.indexOf(el) != res.lastIndexOf(el)) {
			res2.push(el)
		}

	}


	return new Set(res2)
}

A = new Set([1,2]);
B = new Set([2,3]);

C = inter(A,B)
console.log(C)*/


/* function inter(s1, s2){
  return new Set( [...s1].filter( e => s2.has(e) ) )
} */


/* function nthFibo(n) {
	let res = [0 , 1];
	for (let i = 1; i < n; i++) {
		res.push(res[i] + res[i - 1]);
	}
	return res[n-1];
}
console.log(nthFibo(4)) */


/* function divCon(x){
  let sum1 = 0;
  let sum2 = 0;
  x.forEach((item)=>{
    typeof(item) == 'number' ? sum1 += item :
    sum2 += +item;
	})
    return sum1 - sum2;
}
console.log(divCon([9, 3, '7', '3'])) */

/* A.sort();
  return A[0] !== A[1] || A.length == 1 ? A[0] : A [A.length - 1] */

/* function findOdd(A) {
	let stack = [];
	A.sort();

	for (let i = 0; i < A.length - 1; i++) {
		stack.push(A[i]);
		if (A[i + 1] == A[i]) {
			console.log('d')
			stack.pop();
		}
	}
console.log(stack)
} */
/* function findOdd(A) {
	return Object.assign(A.sort())
}
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ])) */



/* function findOutlier(int) {
	let res;

	for (let i = 0; i < int.length; i++) {
		if (int[0] % 2 == 0 && int[1] % 2 == 0) {
			if (int[i] % 2 != 0) {
				res = int[i];
			}
		}
		else if (int[0] % 2 !== 0 && int[1] % 2 !== 0) {
			if (int[i] % 2 == 0) {
				res = int[i];
			}
		} else  {
			if (int[2] % 2 !== 0) {
				if (int[i] % 2 == 0) {
					res = int[i];
				}
			} else if (int[2] % 2 == 0) {
				if (int[i] % 2 !== 0) {
					res = int[i];
				}
			}
		}
	}
	return res;
}

console.log(findOutlier([2,6,8,10,3])) */

function fridayTheThirteenths(start, end) {
	let date = new Date(start, 0, 1);
	let date2 = new Date(end, 11, 31);
	let res;
	console.log(date);
	console.log(date2);

	console.log(+date);
	console.log(+date2)
	/* for (let i = +date; i < +date2; i + (24 * 3600 * 1000)){
		let dateF = new Date(i);
		if (dateF.getDay() == 5 && dateF.getDate() == 13) {
			console.log('its 5');
			res = 1;
		}
	} */


	return res;
}
console.log(fridayTheThirteenths(1999, 2000))