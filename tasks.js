'use strict';

/* function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};


// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("Hello");

  // Что-то вроде этого:
  // [10:00] John: Hello! */

/* function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); */


/* let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        );
    }
};

group.showList(); */





function uniqueInOrder(array) {
    let i = 0;
    let setred = [];
    for (let item of array) {
        if (array[i] !== array[i + 1]) {
            setred.push(array[i]);
        };
        i++;
    }
    return setred;
}
/* console.log (uniqueInOrder('AAAABBBCCDAABBB')) == ['A', 'B', 'C', 'D', 'A', 'B']; */

console.log(uniqueInOrder([1, 2, 2, 3, 3]));


/* let array = '';
function uniqueInOrder(array) {
    let set = array.split('');
    let i = 0;
    let t;
    
    let setred = set.map(function (item) {
        (set[i] == set[i + 1]) ?
            set.splice((i + 1), 1) : t = 0;
    });
    return setred;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB')); */


class Clock {
    constructor({ template }) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();



let user = {
    [Symbol.toStringTag]: "ПРА"
  };
  
  alert( {}.toString.call(user) ); // [object User]