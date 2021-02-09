/*
function towelSort(array) {
		let result = [];
		array.forEach(function matrix(item, index, array) {
			if (index % 2 == 0) {
				item.forEach(item => result.push(item))
			} else result.push(...item.reverse())

		});

		return result;


}

console.log(towelSort([
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ],
])) //[1, 2, 3, 6, 5, 4, 7, 8, 9 ] */


/* function reverse(num) {
	return +Array.from(num.toString()).reverse().join("");
}


console.log(reverse(123)); // 321 */


function toReadable(num) {
	let numb = Array.from(num.toString());
	let result;

	let units;
	let dozen = null;
	let hundred = null;

	let one = 'one';
	let two = 'two';
	let three = 'three';
	let four = 'four';
	let five = 'five';
	let six = 'six';
	let seven = 'seven';
  let eight = 'eight'
	let nine = 'nine'

	let finded1 = numb.indexOf('1');
	let finded2 = numb.indexOf('2');
	let finded3 = numb.indexOf('3');
	let finded4 = numb.indexOf('4');
	let finded5 = numb.indexOf('5');
	let finded6 = numb.indexOf('6');
	let finded7 = numb.indexOf('7');
	let finded8 = numb.indexOf('8');
	let finded9 = numb.indexOf('9');

	if (numb.length == 3) {
		if (finded1 == numb.length - 3) {
			hundred = one;
		}

		if (finded2 == numb.length - 3) {
			hundred = two;
		}
		if (finded3 == numb.length - 3) {
			hundred = three;
		}
		if (finded4 == numb.length - 3) {
			hundred = four;
		}
		if (finded5 == numb.length - 3) {
			hundred = five;
		}
		if (finded6 == numb.length - 3) {
			hundred = six;
		}
		if (finded7 == numb.length - 3) {
			hundred = seven;
		}
		if (finded8 == numb.length - 3) {
			hundred = eight;
		}
		if (finded9 == numb.length - 3) {
			hundred = nine;
		}

		findedTw = numb.indexOf('1', 1);
		if (findedTw == numb.length - 2) {
			num = +numb.slice(1, 3).join("");
		}
	}

		if (numb[numb.length - 1] == 1) {
			units = 'one'
		}
		if (numb[numb.length - 1] == 2) {
			units = 'two'
		}
		if (numb[numb.length - 1] == 3) {
			units = 'three'
		}
		if (numb[numb.length - 1] == 4) {
			units = 'four'
		}
		if (numb[numb.length - 1] == 5) {
			units = 'five'
		}
		if (numb[numb.length - 1] == 6) {
			units = 'six'
		}
		if (numb[numb.length - 1] == 7) {
			units = 'seven'
		}
		if (numb[numb.length - 1] == 8) {
			units = 'eight'
		}
		if (numb[numb.length - 1] == 9) {
			units = 'nine'
		}
		if (numb[numb.length - 1] == 0) {
			units = null;
		}

        if (num == 10) {
            units = 'ten'
        }
        if (num == 0) {
            units = 'zero'
        }
			if (num == 11) {
				units = 'eleven'
			}
			if (num == 12) {
				units = 'twelve'
			}
			if (num == 13) {
				units = 'thirteen'
			}
			if (num == 14) {
				units = 'fourteen'
			}
			if (num == 15) {
				units = 'fifteen'
			}
			if (num == 16) {
				units = 'sixteen'
			}
			if (num == 17) {
				units = 'seventeen'
			}
			if (num == 18) {
				units = 'eighteen'
			}
			if (num == 19) {
				units = 'nineteen'
	}

			if (numb[numb.length - 2] == 2) {
				dozen = 'twenty'
			}
			if (numb[numb.length - 2] == 3) {
				dozen = 'thirty'
			}
			if (numb[numb.length - 2] == 4) {
				dozen = 'forty'
			}
			if (numb[numb.length - 2] == 5) {
				dozen = 'fifty'
			}
			if (numb[numb.length - 2] == 6) {
				dozen = 'sixty'
			}
			if (numb[numb.length - 2] == 7) {
				dozen = 'seventy'
			}
			if (numb[numb.length - 2] == 8) {
				dozen = 'eighty'
			}
			if (numb[numb.length - 2] == 9) {
				dozen = 'ninety'
	}

	if (hundred) {
		result = `${hundred} hundred`;
		if (dozen) {
			result = result + ` ${dozen}`;
			if (units) {
				result = result + ` ${units}`;
			}
		} if (!dozen) {
			if (units) {
				result = result + ` ${units}`;
			}
		}
	} else if (dozen) {
		result = `${dozen}`;
		if (units) {
			result = result + ` ${units}`;
		}
	} else result = units;

	return result;
}




console.log(toReadable(199));