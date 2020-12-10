'use strict';
/* 
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды')); */


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
    let formatDate = new Date(Date.parse(dateCreate));
    let calcutDate = ((currentDate - formatDate) / 1000 / 60 / 60 / 24);
    alert(`${calcutDate.toFixed(0)} дней вы на гитхабе!`);

    img.className = "promise-avatar-example";
    document.body.append(img);
    document.body.append(dateCreate);
    document.body.append(calcutDate.toFixed(0));


    /* setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000); */
  }))
  .catch(error => alert(error.message));



/* 
// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  )); */
 

 //очередь микрозадач

 //async await c ls

 /* async function showAvatar() {

  // запрашиваем JSON с данными пользователя
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar(); */