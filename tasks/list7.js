/* function calculateHanoi(diskNumber, turnsSpeed) {
	return  {
		turns:  7 ,
		get seconds() { return Math.floor(this.turns * 3600 / turnsSpeed) }
	}

}

console.log(calculateHanoi(3, 4616)) */

function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("ERR");
	}

	let result = arr.map(item => item);

	for (let i = 0; i < result.length; i++) {
		if (result[i] == '--discard-next') {
			if (i == result.lenght - 1) {
				result.splice(i, 1)
			} else {
				result.splice(i + 1, 1);
			}
		}

		if (result[i] == '--discard-prev') {
			if (i == 0) {
				result.splice(i, 1)
			} else {
				result.splice(i - 1, 1);
			}
		}

		if (result[i] == '--double-next') {
			if (i + 1 !== result.length) {
				result.splice(i, 1, result[i + 1]);
			} else {
				result.splice(i, 1);
			}
		}

		if (result[i] == '--double-prev') {
			if (i == 0) {
				result.splice(i, 1)
			} else {
				result.splice(i, 1, result[i - 1]);
			}
		}
	}



	for (let i = 0; i < result.length; i++) {
		while (result[i] == '--discard-prev')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--discard-next')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--double-next')
		{
			result.splice(i, 1)
		}
		while (result[i] == '--double-prev')
		{
			result.splice(i, 1)
		}


	}

	return result;
}



console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))//
/* console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))// => [1, 2, 4, 5] */
/* console.log(transform([1, 2, 3, '--double-next', 4, 5]))//=> [1, 2, 3, 4, 4, 5] */
/* console.log(transform([1, 2, 3, '--double-prev', 4, 5]))//=> [1, 2, 3, 3, 4, 5] */

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))



/*
addLink(value) {
	if (!value){
		value = ' ';
	}
	this.value = value;
	chain = this.chain;

	chain.push(`( ${value} )~~`);

	return this;
},

removeLink(position) {
	value = this.value;
	for (let i = 0; i < this.chain.length; i++) {
		if (position == i) {
			console.log(this.chain[position-1])

			this.chain.slice(position - 1, 1)
		}
	}
	return this;
}, */
