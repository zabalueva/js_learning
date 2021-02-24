/* function min(array) {
	if (array == undefined || !array.length) {
			return 0;
	} else
			return array.reduce((min, current) => current < min ? min = current : min);
}

function max(array) {
	if (array == undefined || !array.length) {
			return 0;
	} else
			return array.reduce((max, current) => current > max ? max = current : max);
}


function avg(array) {
	if (array == undefined || !array.length) {
			return 0;
	} else
			return array.reduce((sum, current) => (sum + current)) / array.length.toFixed(1);
}

console.log(min(0,0,0,1)) */
/* console.log(max(-1, 0, -8, 5));
console.log(avg([34, 6, 11, 33, 0, -10, 10, 3, 22, -18, 6, 4, -21, 32, 23, 18, -33, 23, 0, -1]));
console.log(undefined.length); */

//brackets можно решить через стек можно через удаление пары скобок,
// смотри в сторону поиска совпадений и удаления их(например replace). Если в конце удалилось всё - значит тру
//если скобка есть в массиве открывающих, то нужно проверить
//что следующая за ней находится на соотв позиции в массиве закрывающих а если её там нет то проверить что следующая тоже открывающая
function check(str, bracketsConfig) {
	let result = false;
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let find;
	let workLength = str.length;
	let regexp = /\p{Ps}/u;

	if (str.length % 2 == 0) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			bracketsConfigAll[i] = bracketsConfig[i];
			bracketsConfigAllList = bracketsConfigAll.toString().split(",");
		}
		if (str.length !== 2) {
			workLength = str.length - 2
		}

		for (let i = 0; i < workLength; i += 2) {
			if (str[str.length - 1] == bracketsConfigAllList[i]) {
				return false;
			}
		}

		console.log(str);
		console.log(bracketsConfigAllList);

		for (let i = 0; i < workLength; i++) {
			find = bracketsConfigAllList.indexOf(str[i]);

			if (bracketsConfigAllList[find + 1]) {

				if (i % 2 == 0) {
					for (let j = i + 1; j < str.length; j += 2) {

						if (bracketsConfigAllList[find + 1] == str[j]) {
							console.log(`true on index ${i}${j}`);
							result = true;
							break;
						} else {
							console.log(`false == 0 on index ${i}${j} !`)
							result = false;
							break;
						}
					}
				}

				if (i % 2 !== 0) {
					for (let j =  i + 1; j < str.length; j += 2) {

						if (str[j] == bracketsConfigAllList[find + 1]) {
							console.log(`true on index ${i}${j}`)
							result = true;
							break;
						} else {
							console.log(`false ${str.length }i ${str[i] } str[j]  ${str[j]} bracketsConfigAllList[find + 1] ${bracketsConfigAllList[find + 1]} on index ${i}${j}`)
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



/* console.log(check("())(", [["(", ")"]])); // -> false */
console.log(check("111115611111111222288888822225577877778775555666677777777776622222", [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])); // -> false
