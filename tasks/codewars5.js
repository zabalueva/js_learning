/* function zipWith(func, arr1, arr2) {
	let res = [];
	for (let i = 0; i < Math.min(arr1.length, arr2.length); i++){
		res.push(func.apply(null, [arr1[i], arr2[i]]))
	}

	return res;
}
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])) */
/* function starSign(date) {
	let month = date.getMonth() + 1;
	 let signsName =["Aquarius", 'Pisces' ,		'Aries'	,	'Taurus' ,		'Gemini' ,		'Cancer' ,		'Leo' ,		'Virgo' 	,	'Libra' ,		'Scorpio' ,		'Sagittarius' ,	'Capricorn' ]

	console.log(month)
	function getSign(obj) {
		let day = date.getDate();
		console.log(day)
		if (day >= this.from && day <= this.to) {
			console.log('if')
			return signsName[month - 1];
		} else {
			if (month >= 2) {
				console.log('else')
				return signsName[month - 2];
			} else {
				return signsName[11]
			}
		}
	}



	let signs = [ {
			from: 21,
			to: 31,
	},
		{
			from: 20,
			to: 29,
		},
		{
			from: 21,
			to: 31,
		},
		{
			from: 22,
			to: 30,
		},
		{
			from: 21,
			to: 31,
		},
		{
			from: 22,
			to: 30,
		},
		{
			from: 23,
			to: 31,
		},
		{
			from: 24,
			to: 31,
		},
		{
			from: 24,
			to: 30,
		},
		{
			from: 24,
			to: 30,
		},
		{
			from: 23,
			to: 30,
		},
		{
			from: 22,
			to: 31,
		},


	]


	if (month - 1) {
		console.log('gh')
		return getSign.apply(signs[month - 1])
	} else {
		console.log('re')
		return getSign.apply(signs[11])
	}
}

console.log(starSign(new Date(1987, 7, 23))) */

/* function fridayTheThirteenths(start, end) {
  let res = [];
  if (!end){
    end = start
  }
  for (let j = start; j <= end ; j++){
    for (let i = 0; i<= 11; i++){
      let date = new Date (j, i, 13);
      if (date.getDay() == 5){
        res.push(`${i+1}/13/${j}`)
      }

  }
  }

return res.length == 1 ? res [0] : res.join(' ')
}
console.log(fridayTheThirteenths(1999, 2000))
 */

/* function count(array) {
let res={}
	let obj = new Object(array);
	for (let key in obj) {
		res[obj[key]] = array.filter((item, index) => item === obj[key]).length;
	}
	return res;
}

console.log(count(['a', 'b'])) */


/* function killer(suspectInfo, dead) {

	for (let val in suspectInfo) {
		if (dead.filter((el) => suspectInfo[val].indexOf(el) !== -1).length == dead.length) {
			return val;
		}
	};

}
console.log(killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']))
 */

/* function validateUsr(username) {
	let re = /[\W\p{Lu}]/u
	console.log(username.match([/\p{Lt}/u]))
	return username.match(/[\W\p{Lu}]/u) ? false : username.length >= 4 && username.length <= 16;


}
console.log(validateUsr('____')) */


function validPass(password) {
	if (password.match(/\d/)){
		if (password.match(/[a-z]/)) {
			if (!password.match(/[^a-zA-Z\d]/)) {
				if (password.length >= 3 && password.length <= 20) {
					return "VALID"
				}
			}
		}
	}
	return 'INVALID';
}

console.log(validPass('12dd3%'))