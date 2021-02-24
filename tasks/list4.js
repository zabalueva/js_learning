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
//добавили [(  в стек. следующий символ ожидаете или закрыть ) или открывающийся. у вас идет не тот на закрытие , все - ошибка
// смотри в сторону поиска совпадений и удаления их(например replace). Если в конце удалилось всё - значит тру
//если скобка есть в массиве открывающих, то нужно проверить
//что следующая за ней находится на соотв позиции в массиве закрывающих а если её там нет то проверить что следующая тоже открывающая
function check(str, bracketsConfig) {
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsConfigAll[i] = bracketsConfig[i];
		bracketsConfigAllList = bracketsConfigAll.toString().split(",");
	}
	let brackets = bracketsConfigAllList;
	let stack = [];
	/* console.log(str);
	console.log(brackets); */

	for (let bracket of str) {

		let bracketsIndex = brackets.indexOf(bracket);


		/* console.log(brackets.indexOf(bracket));
 */
		if (bracketsIndex % 2 === 0) {
			if (brackets[brackets.indexOf(bracket)] == brackets[brackets.indexOf(bracket) + 1]) {
				if ((str.indexOf(bracket) - str.lastIndexOf(bracket)) % 2 == 0) {
					return false;
				}
				stack.push(bracketsIndex + 1);
				stack.pop();
			} else {
				stack.push(bracketsIndex + 1);
			}
				/* console.log(stack); */
			} else {
				if(stack.pop() !== bracketsIndex) {
					return false;
				}
			}
		}
		return stack.length === 0;
}

/* console.log(check("())(", [["(", ")"]])); // -> false */
console.log(
	check("|(|)", [
		["(", ")"],
		["|", "|"],
	])
); // -> false
/* console.log(check("111115611111111222288888822225577877778775555666677777777776622222", [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])); // -> false */
