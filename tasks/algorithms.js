/*
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
/* function getMatrixElementsSum(matrix) {
  let lengh = matrix.length;
  let sum = 0;
  let temp = 0;
  let sum2 = 0;
  let arr = [];
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++){
      sum = sum + matrix[i][j];
      if (arr.includes(j)){
        console.log(`не считаем этот индекс ${j}`)
          sum = sum - matrix[i][j]
      }

        if (matrix[i][j] == 0) {
          arr.push(j);
      }
    }
  }


  return sum + sum2;
}

matrix = [
    [0, 1, 1, 2],
     [0, 5, 0, 0],
    [2, 0, 3, 3]
   ]

console.log(getMatrixElementsSum(matrix)) */


/*
function getCommonCharacterCount(s1, s2) {
  let arr = [];
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);
  for (let i = 0; i <= Math.min(s1.length, s2.length); i++) {
    if (arr2.includes(s1[i])) {
      arr.push(s1[i])
    arr2.splice(arr2.indexOf(s1[i]), 1)
    }
    console.log(arr2)
  }
  return arr.length;
}
s1 = "aabcc";
s2 = "adcaa",
console.log(getCommonCharacterCount(s1, s2)) */


/* arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 /*
function sortByHeight(arr) {
  let number = arr.filter(el => el != -1).sort((a, b) => a > b);
  let res = [];
  for (let i = 0; i <= arr.length - 1; i++){
    if (arr[i] == -1) {
      res.push(arr[i])
    } else {
      res.push(Math.min(...number));
      number.shift();
    }
    console.log(res)
  }
  return res;
}

console.log(sortByHeight(arr)); */



/* matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
  ] */

/*   * The result should be following:
  * [
  *  [1, 2, 1],
  *  [2, 1, 1],
  *  [1, 1, 1]
  * ] */

/*   function minesweeper(matrix) {
    const arr = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
      for (let j = 0; j <= matrix[i].length - 1; j++) {
        if (matrix[i][j] === true) {
          arr.push(+matrix[i][j]);
          arr.push(matrix[i][j] + 1);
        } else {
          arr.push(+matrix[i][j]);

        }
      }
    }
    return arr;
}

console.log( minesweeper(matrix)); */


/* function deleteDigit(n) {
  let arr = Array.from(n.toString());
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i])
    delete arr[i];
    console.log(arr.join(''))
    if (arr.join('') > max) {
      max = arr.join('');
      arr = Array.from(n.toString());
    } else arr = Array.from(n.toString())

  }
  return +max;
}

console.log(deleteDigit(10));


function isMAC48Address(n) {
  const arr = n.split('-');
  return n.split('-').length === 6 && !(arr.join('').match(/\W/g)) && !arr.join('').match(/[G-Zg-z]/g);
}

console.log(isMAC48Address('d1-1B-63-84-45-E6'));


function renameFiles(names) {
  let arr = [];
  let count = 0;
  for (let i = 0; i <= names.length - 1; i++) {
    if (!arr.includes(names[i])) {
      arr.push(names[i])
    } else {
      if (!arr.includes(`${names[i]}(${count + 1})`)) {
        arr.push(`${names[i]}(${count + 1})`)
      } else {
        arr.push(`${names[i]}(${count+2})`)
      }
    }

  }
  return arr;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
//["file", "file(1)", "image", "file(1)(1)", "file(2)"] */


function getSumOfDigits(n) {
  let sum = 0;
  const arr = Array.from(n.toString());
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i] + sum;
  }
  if (sum.toString().length > 1) {
    return getSumOfDigits(sum);
  } else return sum;
  }

  console.log(getSumOfDigits(123) )