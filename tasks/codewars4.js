function inter(s1, s2) {
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


/* function inter(s1, s2){
  return new Set( [...s1].filter( e => s2.has(e) ) )
} */

console.log(C)