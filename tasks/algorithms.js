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



matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
  ]

/*   * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ] */

  function minesweeper(matrix) {
    const arr = [];
    let count = 0;
    let findI = 0;
    let findJ = 0;

    for (let i = 0; i <= matrix.length - 1; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === true) {
          findI = i;
          findJ = j;
          arr.push('true');
          /* if (i - findI === 1 || i - findI === 0 && j - findJ === 1 || j - findJ === 0) {

          } */
        } else  {
          if (i - findI === 1 || i - findI === 0 && j - findJ === 1 || j - findJ === 0 && arr[arr.length - 1] !== 'true') {
            arr[arr.length - 1] = arr[arr.length - 1] + 1;
            arr.push(+matrix[i][j] + 1);
            /*  if (matrix[i][j - 1] === true) {
              arr.push(+matrix[i][j] + 1);
            }
            if (matrix[i][j + 1] === true) {
              arr.push(+matrix[i][j] + 1);
            }else {
              arr.push(+matrix[i][j]);
            }
            console.log(arr)
          } else if (i - 1 >= 0) {
            if (matrix[i - 1][j] === true) {
              arr.push(+matrix[i][j] + 1);
            } else {
              arr.push(+matrix[i][j]);
            }
            arr.push(+matrix[i][j]); */
          } else if (i - findI === 1 || i - findI === 0 && j - findJ === 0) {
            arr[arr.length - 1] = arr[arr.length - 1] + 1;
          }
          else arr.push(+matrix[i][j]);
        }

      }
    }
    return arr;
}

console.log( minesweeper(matrix));

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

/* function getSumOfDigits(n) {
  let sum = 0;
  const arr = Array.from(n.toString());
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i] + sum;
  }
  if (sum.toString().length > 1) {
    return getSumOfDigits(sum);
  } else return sum;
  }

  console.log(getSumOfDigits(123) ) */

/* For ([1, 2, 3], 1) should return 0
 *For ([1, 2, 3], 2) should return 1 */

/* function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let find;
  let found = false;
  let center;

  while (found === false && first <= last) {
    center = Math.floor((first + last) / 2);
    if (array[center] === value) {
      found = true;
      find = center;
    } else if (array[center] > value) {
      last = center - 1;
    } else {
      first = center + 1;
    }
  }
  return find;
}

console.log(findIndex([1, 2, 3], 2)); */


/* For aabbbc should return 2a3bc */

/* function encodeLine(str) {
  const arr = Array.from(str);
  const newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count = count + 1;
    } else {
      if (count === 0) {
        newArr.push(arr[i])
      } else {
        newArr.push(`${count + 1}${arr[i]}`);
        count = 0;
      }
    }
  }
  return newArr.join('');
}

console.log(encodeLine('')); */

/* aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
    assert.strictEqual(encodeLine('xyz'), 'xyz');
    assert.strictEqual(encodeLine(''), ''); */

    /* Given an array of domains, return the object with the appearances of the DNS.
    *
    * @param {Array} domains
    * @return {Object}
    *
    * @example
    * domains = [
    *  'code.yandex.ru',
    *  'music.yandex.ru',
    *  'yandex.ru'
    * ]
    *
    * The result should be the following:
    * {
    *   '.ru': 3,
    *   '.ru.yandex': 3,
    *   '.ru.yandex.code': 1,
    *   '.ru.yandex.music': 1,
    * } */

/* function getDNSStats(domains) {

  const doms = {};
  const arr = [domains].slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {

      let find = arr[i][j].split('.').reverse();
      console.log(find);
      let count;
      count = find.filter(el => el = find[0]).length;
      let reg = new RegExp(find[0], 'g');
      let str = arr.join(".");
      doms[`.${find[0]}`] = str.match(reg).length;

      if (find.length > 2) {
        const reg2 = new RegExp(find[2] + '\.' + find[1] + '\.' + find[0] , 'g');

        doms[`.${find[0]}.${find[1]}.${find[2]}`] = str.match(reg2).length;
      } else if (find.length > 1) {
        const reg3 = new RegExp(find[find.length - 1] + '\.' + find[0], 'g');
        console.log(reg3)
        doms[`.${find[0]}.${find[find.length - 1]}`] = str.match(reg3).length;
      }


    }
  }
  return doms;
}

  domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
  ]

  console.log(getDNSStats(domains)); */

  /*  ******************
   4 14
     ******************* */



 /*  const stack = new Stack();

 *stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

/* class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    this.stack.pop();
    return 1;
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}

let gh = new Stack();
gh.push('5');
gh.push('6');
gh.push('7');
gh.peek()
gh.pop();
gh.peek()

console.log(gh.peek()) */


/*
let arr = [-1, 150, 190, 170, -1, -1, 160, 180]

function sortByHeight(arr) {
  let number = arr.filter(el => el != -1).sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i <= arr.length - 1; i++){
    if (arr[i] == -1) {
      res.push(arr[i])
    } else {
      res.push(Math.min(...number));
      number.shift();
    }
  }
  return res;
}

console.log(sortByHeight(arr));


function removeKFromList(l, k) {
  let temp = l;
  while (temp) {
    if (temp.value === k) {
      temp.value = temp.next.value;
      temp.next = temp.next.next;
    }
    temp = temp.next;
  }
  return l;
}



if (ListNode.next) {
  return this.value;
}
return 1; */



function ListNode(x) {
  this.value = x;
  this.next = null;
}
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(x) {
    this.value = x;
/*     this.next = null; */
  }

  get size() {
    /* let size;
    const node = this.value;
    while (node !== null) {
      size += 1;
    } */
    return 2;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    return newNode;
  }

  dequeue() {
    return this.value;
  }
}

const queue = new Queue(4);
queue.enqueue(5);
queue.enqueue(6);
/*
console.log(queue.enqueue(5))
console.log(queue.dequeue())
console.log(queue) */