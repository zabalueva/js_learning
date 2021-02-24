function check(str, bracketsConfig) {
	let result = false;
	let resultArr = [];
	let find;
	let closeFind;
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let strArr = Array.from(str);

	if (str.length % 2 == 0) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			bracketsConfigAll[i] = bracketsConfig[i];
			bracketsConfigAllList = bracketsConfigAll.toString().split(",");
		}
		console.log(str);
		console.log(bracketsConfigAllList);

		for (let j = 0; j < strArr.length; j++) {

			for (let i = 0; i < strArr.length - 1; i++) {
				let index = bracketsConfigAllList.indexOf(strArr[i]);
			/* 	console.log(strArr[i]);
				console.log(bracketsConfigAllList.indexOf(strArr[i]));
				console.log(bracketsConfigAllList[index + 1]); */

				if (strArr[i + 1] === bracketsConfigAllList[index + 1] ) {

					strArr.splice(i, 2);
					console.log(strArr)

				}
				console.log(strArr)

				if (strArr.length !== 0) {
					for (let i = 0; i < strArr.length - 1; i++) {
						let index = bracketsConfigAllList.indexOf(strArr[i]);

						if (strArr[i + 1] === bracketsConfigAllList[index + 1]) {
							strArr.splice(i, 2);
						}
					}
				}


			}


		}

		}

		return strArr.length == 0;;
}


/* console.log(check("([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())", [['(', ')'], ['{', '}'], ['[', ']'], ['|', '|']])); */
/* console.log(check("({)}", [['(', ')'], ['{', '}']])); */
console.log(check("((()))()", [['(', ')'], ['{', '}']]));
/* console.log(check("111115611111111222288888822225577877778775555666677777777776622222", [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])); // -> false */