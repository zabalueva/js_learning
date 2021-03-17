/* function zipWith(func, arr1, arr2) {
	let res = [];
	for (let i = 0; i < Math.min(arr1.length, arr2.length); i++){
		res.push(func.apply(null, [arr1[i], arr2[i]]))
	}

	return res;
}
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])) */
function starSign(date) {
	let month = date.getMonth();
	 let signsName =["Aquarius", 'Pisces' ,		'Aries'	,	'Taurus' ,		'Gemini' ,		'Cancer' ,		'Leo' ,		'Virgo' 	,	'Libra' ,		'Scorpio' ,		'Sagittarius' ,	'Capricorn' ]

	function getSign(obj) {
		let day = date.getDate();
		if (day >= this.from && day <= this.to) {
			return signsName[month - 1];
		} else {
			return signsName[month + 1];
		}
	}


	let signs = [ {
			from: 1,
			to: 21,
	},
	{
		from: 1,
		to: 21,
		},
		{
			from: 1,
			to: 21,
		},
		

	]


		/* Aquarius: {
			month: 1,
			from: 21, // 1 - 19,
			to: 31
		},
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January */

  return getSign.apply(signs[month]);
}

console.log(starSign(new Date(1970, 1, 25	)))


/* if (!(Object.prototype.toString.call(date) === '[object Date]')) {
	throw new Error("THROWN");
}

 */