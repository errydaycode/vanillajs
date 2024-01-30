// function a() {
//   setTimeout(() => {
//     console.log("1");
//   });
// }
// function b() {
//   console.log("2");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
// }).then(() => {
//   setTimeout(function timer() {
//     console.log("4");
//   }, 0);
// });

// b();

// -------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// }, 0);

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2();
//   setTimeout(() => {
//     console.log("8");
//   });
// }

// async function test2() {
//   console.log("9");
// }

// test1();

// console.log("10");

// ----------------------------
// console.log(1);

// setTimeout(function foo() {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });

// new Promise((res, rej) => {
//   console.log(4);
//   res(5);
// }).then((data) => {
//   console.log(data);

//   Promise.resolve()
//     .then(() => {
//       console.log(6);
//     })
//     .then(() => {
//       console.log(7);

//       setTimeout(() => {
//         console.log(8);
//       }, 0);
//     });
// });

// setTimeout(() => {
//   console.log(9);
// });

// console.log(10);
// 1 4 10 2 5 6 7 3 8 9
// 1 4 10 5 6 7 2 3 9 8
// 1 4 10 3 5 6 7 2 8 9
// 1 4 10 5 6 7 2 3 8 9

// ------------------------

async function first() {
  console.log(9);
  await Promise.resolve(2).then((r) => console.log(r));
  console.log(0);
  await Promise.resolve(3).then((r) => console.log(r));
}

async function second() {
  console.log(10);
  await Promise.resolve(4).then((r) => console.log(r));
  console.log(11);
  await Promise.resolve(5).then((r) => console.log(r));
}

first();
second();


//------(Programming Patterns, publisher/subscriber) -  то, что мы хотим сделать в какой-то момент времени,
// но мы не знаем когда это произойдет// - это всё относится к этому паттерну
//по этому паттерну мы всегда подписываемся на событие
// всегда передается подписчик ( ф-ия коллБэк)
// событие всегда в прошедшем времени, т.е. оно всегда уже произошло
// на кнпоке мы подписываемся на клик, но он уже должен произойти, чтобы подписчик вызвался

// мы всегда добавляем подписчика, и этот подписчик чего-то ждет

button.addEventListener('click', function subscriber() {} ) // произошел клик - конкретное событие
setTimeout(function handler() {}, 1000) // прошла секунда - конкретное событие
store.subscribe( function listener() {} ) // в сторе может произойти только одно событие - изменение стейта,
// поэтому передаем только подписчика

//backEnd example

app.post('/users', function subscriber() {} ) // событие - пришел запрос на некий endPoint, срабатывает подписчик
// и идет в БД за данными



//subscriber === handler === observer === watcher === listener

// когда мы на что-то подписываемся, обязательно должен быть метод отписки

const button = {
  subscribers: {
    'click': [], // [subscriber1]
    'focus': [],
    'doubleClick' : [] // [subscriber2, subscriber3]
  },
  addEventListener(event, subscriber) {
    this.subscribers[event].push(subscriber)
  },
  click() {
    this.subscribers['click'].forEach((sub) => sub())
  },
  doubleClick() {
    this.subscribers['doubleClick'].forEach((sub) => sub())
  },
  removeEventListener(event, subscriber) {
    this.subscribers[event] = this.subscribers[event].filter((sub) => sub !== subscriber)
  }
}

button.addEventListener('click', function subscriber1() {} )
button.addEventListener('doubleClick', function subscriber2() {} )
button.addEventListener('doubleClick', function subscriber3() {} )


const sub = () => {
  console.log('sub')
}

button.addEventListener('click', sub)
button.removeEventListener('click', sub)

// чтобы отписка сработала, важно выносить функцию в отдельную переменную, чтобы на неё была одна и та же ссылка
// в подписке и отписке