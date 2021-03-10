function catMouse(map, moves) {
	let arr = Array.from(map);
	let range = arr.indexOf('\n');
	let arrNeed = arr.filter((el) => { return el != "\n" })
	let findIndexC;
	let strC;
	let findIndexM;
	let strM;
	let runs;
	console.log(arr)


	if (arr.indexOf('C') == -1 || arr.indexOf('m') == -1) {
		return 'boring without two animals';
	}

	for (let el in arrNeed) {
		if (el = "m") {
			if (arrNeed.indexOf(el) % range == 0){
        strM = (arrNeed.indexOf(el) / range) + 1;
      } else 
			strM = Math.ceil(arrNeed.indexOf(el) / range);
			findIndexM = arrNeed.indexOf(el) - (range * (strM - 1))
		}


		if (el = "C") {
			if (arrNeed.indexOf(el) % range == 0) {
				strC = (arrNeed.indexOf(el) / range) + 1;
			} else strC = Math.ceil(arrNeed.indexOf(el) / range);
			findIndexC = arrNeed.indexOf(el) - (range * (strC - 1));
			console.log(arrNeed.indexOf(el))
			console.log(range)
		}

	}

		if (findIndexC > findIndexM) {
			runs = findIndexC - findIndexM;
		} else if (findIndexC < findIndexM) {
			runs = findIndexM - findIndexC;
		}
		if (strC !== strM) {
			if (strC > strM) {
				runs += strC - strM;
			} else runs += strM - strC;
		}

		console.log(strM, findIndexM)
	console.log(strC, findIndexC)
	console.log(runs)
		if (runs <= moves) {
			return 'Caught!'
		} else return 'Escaped!'

}

var map=
`..............
..............
..............
....m.........
..............
..............
..............
..............
..............
..............
..............
..............
..............
C.............
..............`


console.log(catMouse(map, 14))



//users = users.filter((u) => {return u.email != user.email})