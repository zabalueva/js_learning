function min(...args) {
	return args.reduce((min, current) => current < min ? min = current : min);
}

function max(...args) {
	return args.reduce((max, current) => current > max ? max = current : max);
}

function avg(...args) {
	return args.reduce((sum, current) => (sum + current))/args.length.toFixed(1);
}

console.log(min(-1, 0, -8, 5));
console.log(max(-1, 0, -8, 5));
console.log(avg(1, 2, 3, 4,5,6));
