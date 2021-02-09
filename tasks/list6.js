/* function countCats(backyard) {
	let count = 0;

	for (let i = 0; i < backyard.length; i++){

		for (let j = 0; j < backyard[i].length; j++){

			if (backyard[i][j] == '^^') {
				count++
			}
		}
	}
	return count;
}
console.log(countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]))
console.log(countCats([['##', 'dd', '00'],
        ['^^', '..', 'ss'],
        ['AA', 'dd', 'Oo']])) */


/* const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

function dateSample(sampleActivity) {
	if (typeof(sampleActivity) == 'string' && sampleActivity > 0 && sampleActivity < 15) {
		return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD))
	} else return false;
};

console.log(dateSample('9000')); */

/* function createDreamTeam(members) {
	let result = [];
  Array.isArray(members) &&
    members.forEach((item) => {
      if (typeof (item) == "string") {
        result.push(item.trim()[0].toUpperCase());
      }
    })


	return result.sort().join("")|| false;
};


console.log(createDreamTeam([' Ma   tt', 'Ann', 'Dmitry', 'Max']))// => 'ADMM'
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))//=> 'LOO' */

/* const springDate = new Date(2020, 09, 31);


function getSeason(date) {
	if (!date) {
    return 'Unable to determine the time of year!'
	}

  if (!(Object.prototype.toString.call(date) === '[object Date]')) {
		throw new Error("THROWN");
  }

	let month = date.getMonth();

	if (month == 2 || month == 3 || month == 4) {
		return "spring"
	}
	if (month == 0 || month == 1 || month == 11) {
		return "winter"
	}
	if (month == 9 || month == 8 || month == 10) {
		return "autumn"
	}
	if (month == 6 || month == 5 || month == 7) {
		return "summer"
	}
}

console.log(getSeason(springDate));
console.log(Object.prototype.toString.call(new Date(1978, 2, 4, 5, 6, 7)))
console.log(getSeason(new Date(1978, 2, 4, 5, 6, 7))) */