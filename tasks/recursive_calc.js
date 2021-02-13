class DepthCalculator {
	constructor() {
		this.calculateDepth = this.calculateDepth.bind(this)
	}

	calculateDepth(arr) {
		if (arr instanceof Array) {
			let result = 0;
			if (arr == []) {
				result = 1;
			}
			return 1 + result + Math.max(...arr.map((item) => this.calculateDepth(item)), result);
		} else return 0;
	}
}

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([[[[]]]]))// => 2

/* console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]))//=> 2 */

console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]) )//=> 3

console.log(depthCalc.calculateDepth([1, [8, [2, 3, [3,[]]]], 2, 3, [8, [], [4, [4, [6,[]]]]], 4, 5, []]))


//2 failing

/* constructor() {
	this.depth = 1;
	this.maxDepth = 0;
}

calculateDepth(arr) {
	let result = 1;
	arr.map((item) => {
		if (Array.isArray(item)) {
			return result = 1 + this.calculateDepth(item)
		}
	}

	)
	return result;

} */