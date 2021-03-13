function check(str, bracketsConfig) {
	let bracketsConfigAll = [];
    let bracketsConfigAllList = [];
    let stack = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsConfigAll[i] = bracketsConfig[i];
		bracketsConfigAllList = bracketsConfigAll.toString().split(",");
	}

	for (let item of str) {
		let bracketsIndex = bracketsConfigAllList.indexOf(item);

		if (bracketsConfigAllList[bracketsConfigAllList.indexOf(item)]
			== bracketsConfigAllList[bracketsConfigAllList.indexOf(item) + 1]) {
			console.log('l')

		/* 	if ((str.indexOf(item) - str.lastIndexOf(item)) % 2 == 0) {
				return false;
			} */
			if (stack.includes(bracketsIndex + 1)) {
				console.log('d')
				stack.pop(bracketsIndex + 1);
			}
			stack.push(bracketsIndex + 1);
			console.log(stack)

		}

		else if (bracketsIndex % 2 == 0) {
			stack.push(bracketsIndex + 1);
		} else {
			if (stack.pop() !== bracketsIndex) {
				console.log('f')
				return false;
			}
		}
	}

return stack.length === 0;
	}


//false
/* console.log(check('877878887777777888888887777777887887788788887887777777788888888887788888', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])) */
console.log(check('88', [ ['8', '8']]))