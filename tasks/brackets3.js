function check(str, bracketsConfig) {
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let stack = [];

for (let i = 0; i < bracketsConfig.length; i++) {
	bracketsConfigAll[i] = bracketsConfig[i];
	bracketsConfigAllList = bracketsConfigAll.toString().split(",");
}

/* console.log(str);
console.log(brackets); */

for (let item of str) {
	let bracketsIndex = bracketsConfigAllList.indexOf(item);

	if (bracketsIndex % 2 == 0) {

		if (bracketsConfigAllList[bracketsConfigAllList.indexOf(item)]
			== bracketsConfigAllList[bracketsConfigAllList.indexOf(item) + 1]) {
			/* console.log('same');
			console.log(stack[stack.length - 1])
			console.log(bracketsIndex) */
			if (stack[stack.length - 1] == bracketsIndex  || stack[stack.length - 1] == bracketsIndex + 1) {
			/* 	console.log('l') */
				stack.pop();
			} else stack.push(bracketsIndex + 1);

		} else stack.push(bracketsIndex + 1);


	}

	else {

			if (stack.pop() !== bracketsIndex) {
				return false;
			}
	}
}
	return stack.length === 0;

	}


//false
/* console.log(check('877878887777777888888887777777887887788788887887777777788888888887788888', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])) */
console.log(check('(|)(|)', [ ['|', '|'], ['(', ')']]))