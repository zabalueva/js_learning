'use strict';
/* 
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды')); */

console.log(true)

/* new Promise((resolve, reject) => {
  resolve("ок");
}).then((result) => {
  throw new Error("Ошибка!"); // генерируем ошибку
}).catch(alert); // Error: Ошибка! */

let name = prompt('Введите ваше имя на github', "username");


let user = fetch(`https://api.github.com/users/${name}`)
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;

    let dateCreate = document.createElement('dateCreate');
    dateCreate = githubUser.created_at;

    let currentDate = new Date;
    let calcDate = new Date(Date.parse(dateCreate));
    let calcutDate = ((currentDate - calcDate) / 1000 / 60 / 60 / 24);
    let fixedDate = calcutDate.toFixed(0);
    alert(`${fixedDate} дней вы на гитхабе!`);

    img.className = "promise-avatar-example";
    document.body.append(img);
    document.body.append(dateCreate);
    document.body.append(fixedDate);


    setTimeout(() => {
      /* img.remove(); */
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));


/* let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
 */

 //очередь микрозадач