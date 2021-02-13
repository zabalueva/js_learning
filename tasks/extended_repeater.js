function repeater(str, options) {
	let { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;

	if (typeof (str) !== 'string') {
		str.toString()
	}
	if (addition && typeof (addition) !== 'string') {
		addition.toString()
	}

	if (!addition) {
		return (str + separator)
		.repeat(repeatTimes)
		.slice(0, -separator.length);
	}

	return (str + (addition + additionSeparator)
		.repeat(additionRepeatTimes)
		.slice(0, -additionSeparator.length) + separator)
		.repeat(repeatTimes)
		.slice(0, -separator.length);
}

console.log(repeater('STRING', {
	repeatTimes: 3, separator: '**',
	addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
}))

console.log(repeater('TESTstr', {
		repeatTimes: undefined, separator: 'ds',
		addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000'
}))

	console.log(String(null))