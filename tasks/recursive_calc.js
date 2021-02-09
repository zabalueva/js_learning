class DepthCalculator {
	depth = 1;
	calculateDepth(arr) {

		arr.forEach((item) => {
			if (Array.isArray(item)) {
				this.depth++;
				this.calculateDepth(item)
			}
		});
		return this.depth;
	}
}

console.log(new DepthCalculator())

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([[[]]]))// => 1

/* depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2

depthCalc.calculateDepth([[[]]]) => 3 */