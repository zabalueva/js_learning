function check(str, bracketsConfig) {
	let result = false;
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let find;
	let workLength = str.length;
	let strArr = Array.from(str);

	if (str.length % 2 == 0) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			bracketsConfigAll[i] = bracketsConfig[i];
			bracketsConfigAllList = bracketsConfigAll.toString().split(",");
		}
		if (str.length !== 2) {
			workLength = str.length - 2
		}
		console.log(str);
		console.log(bracketsConfigAllList);

		if ((bracketsConfigAllList.indexOf(str[str.length - 1]) % 2 == 0) && (bracketsConfigAllList[bracketsConfigAllList.indexOf(str[str.length - 1])]) !== bracketsConfigAllList[bracketsConfigAllList.indexOf(str[str.length - 1]) + 1]) {
			console.log('last bracket is opening')
			return result;
		}


		for (let i = 0; i < workLength; i++) {
			find = bracketsConfigAllList.indexOf(str[i]);
			console.log(find);
			console.log(bracketsConfigAllList[find + 1]);
			if (bracketsConfigAllList[find + 1]) {
				if (i % 2 == 0) {
					for (let j = i + 1; j < str.length; j += 2) {

						if (bracketsConfigAllList[find + 1] == str[j]) {
							console.log(`true on index ${i}${j}`);

							result = true;

							console.log(strArr);
							if (Object.keys(strArr).length == 0) {
								return true;
							}
							break;
						} else {
							console.log(`false == 0 on index ${i}${j} elem ${str[i]} ${str[j]} !`)
							result = false;
							break;
						}
					}
				}

				if (i % 2 !== 0) {
					for (let j =  i + 1; j < str.length; j += 2) {

						if (str[j] == bracketsConfigAllList[find + 1]) {
							/* console.log(`true on index ${i}${j}`) */
							result = true;
							delete str[i];
							delete str[j]
							if (Object.keys(str).length == 0) {
								return true;
							}
							break;
						} else {
							/* console.log(`false on index ${i}${j}`) */
							result = false;
							break;
						}
					}
				}
			}
		}
	}
	return result;

}



/* console.log(check("||", [['(', ')'], ['{', '}'], ['[', ']'], ['|', '|']])); //
console.log(check("({)}", [['(', ')'], ['{', '}']]));
console.log(check("({})", [['(', ')'], ['{', '}']])); */
console.log(check("111115611111111222288888822225577877778775555666677777777776622222", [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])); // -> true