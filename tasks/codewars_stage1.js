/* function accum(s) {
	let result = [];
	for (let i = 0; i < s.length; i++){
		let item = s[i].toLowerCase().repeat(i+1);
		result.push(`${item[0].toUpperCase()}${item.slice(1)}` );
	}

return result.join("-");
}
console.log(accum("ZpglnRxqenU"))
 */

/* function highAndLow(numbers) {
	console.log(numbers.split(' '))
  return `${Math.max.apply(null, numbers.split(' '))} ${Math.min.apply(null, numbers.split(' '))} `
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) */


/* function isIsogram(str) {
	let gh = str.toLowerCase().split('');
	for (let i = 0; i < gh.length; i++) {
		if (gh.indexOf(gh[i], i + 1) !== -1) {
			return false;
		}

	}
return true

}
console.log(isIsogram('Dermatogglyphics')) */

function calc(x) {

		let total1 = [];
		for (let i in x.split('')){
			total1.push(x.charCodeAt(i));
		}
	console.log(total1);
		let total2 = [];
		for (let i of total1){
			total2.push(+i.toString().replace(/7/g, '1'))
	}
	console.log(total2);
	let totalSum = total1.join('').split('');

	for (let item in totalSum) {
	item => +item
}
	console.log(totalSum);
	console.log(total1.reduce((sum, item) => sum + item, 0))
	console.log(totalSum.reduce((sum,item) => sum + item, 0))
		return total1.reduce((sum,item) => sum + item, 0) - total2.reduce((sum, item) => sum + item, 0);

	/* return result.map(item => +item).reduce((sum, current) => sum + current, 0) - resultSum.map(item => +item).reduce((sum, current) => sum + current, 0); */
}

console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))


//git clone git@github.com:rolling-scopes-school/zabalueva-JSFE2021Q1.git

//ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILdHQMIweHh9AegtZpMEWSnKiaT1L+G08rAVuxVOfRWQ age_eva@mail.ru

// h !QAZ1qaz
