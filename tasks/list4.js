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
//С одинаковыми скобками так. Последний элемент стека не скобка — помещаем скобку в стек. Последний элемент стека скобка - вытаскиваем её из стека.
//brackets можно решить через стек можно через удаление пары скобок,
//добавили [(  в стек. следующий символ ожидаете или закрыть ) или открывающийся. у вас идет не тот на закрытие , все - ошибка
// смотри в сторону поиска совпадений и удаления их(например replace). Если в конце удалилось всё - значит тру
//если скобка есть в массиве открывающих, то нужно проверить
//что следующая за ней находится на соотв позиции в массиве закрывающих а если её там нет то проверить что следующая тоже открывающая
/* console.log(str.replace(new RegExp(`${str[str.indexOf(item)]}`, "gi"), "")); */
function check(str, bracketsConfig) {
	let bracketsConfigAll = [];
    let bracketsConfigAllList = [];
    let stack = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsConfigAll[i] = bracketsConfig[i];
		bracketsConfigAllList = bracketsConfigAll.toString().split(",");
	}

	console.log(str);
	console.log(	bracketsConfigAllList);

	for (let item of str) {
		let bracketsIndex = bracketsConfigAllList.indexOf(item);

		if (bracketsIndex % 2 == 0) {
				stack.push(bracketsIndex + 1);
			console.log(stack);
			if (bracketsConfigAllList[bracketsConfigAllList.indexOf(item)]
				== bracketsConfigAllList[bracketsConfigAllList.indexOf(item) + 1] &&
				stack[stack.length - 1] !== bracketsIndex + 1) {
				stack.push(bracketsIndex + 1);
				console.log('l')

			} else
			if (bracketsConfigAllList[bracketsConfigAllList.indexOf(item)]
				== bracketsConfigAllList[bracketsConfigAllList.indexOf(item) + 1] &&
				stack[stack.length - 1] == str[str.indexOf(item)]) {
				stack.pop();
			}
			else {
				stack.push(bracketsIndex + 1);
			}
		} else {

				if (stack.pop() !== bracketsIndex) {
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
console.log(
	check("(||)", [
		["(", ")"],
		["|", "|"],
	])
);
console.log(check("8888877878887777777888888887777777887887788788887887777777788888888887788888", [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']])); // -> false
