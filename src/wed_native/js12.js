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

const promises = Promise.resolve("new Promise");
promises.then((str) => console.log(str));

//----------

// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   })
// })

// new Promise((res, rej) => {
//   console.log(4);
//   res(5)
// }).then((data) => {
//   console.log(data);

//   Promise.resolve().then(() => {
//     console.log(6);
//   }).then(() => {
//     console.log(7);

//     setTimeout(() => {
//       console.log(8);
//     }, 0)
//   })
// })

// setTimeout(() => {
//   console.log(9);
// })

// console.log(10);

//----------

// setTimeout(() => {
//   console.log('s1');
// }, 0);

// setTimeout(() => {
//   console.log('s2');
// }, 1000);

// new Promise(function (res, rej) {
//   console.log('p1');
//   res();
//   console.log('p2');
// }).then(() => {
//   console.log('p3');
// });

// console.log('w1');

// async function test1() {
//   console.log('a1');
//   await test2();
//   console.log('a2');
// }

// async function test2() {
//   console.log('a3');
// }

// test1();

// console.log('w2');

// Статический метод это тот метод, который доступен у класса, и не доступен у инстанса класса
// Статические методы у класса Promise : all | race | any | allSettled - предназначены для обработки нескольких промисов
// all - Есть 3 запроса на сервер, и нам нужно получить с них инф-ию, и только когда все 3 запроса зарезолвились - что-то делать
// Методы возвращают один прмис, с которым мы работаем как обычно - then, catch, finally
// если хотя бы 1 из промисов зареджектится в методе all, то мы попадем в catch
//--------
// race - первое и любое изменение статуса промисов, которое он в себя принял - если любой промис резолвится первым -
// попадем в then, если любой промис реджектится первым - попадаем в catch
// реагирует изменение промиса из состояния pending на любое
//--------
//any - будем ждать резолва хотя бы одного из промисов, и с этим резолвом мы попадем в then
//в catch мы попадем только по той причине,если все промисы зареджектятся
//--------
//allSettled
// в allSettled catch не отрабатывает никогда, всегда отрабатывает then, но то, что мы принимаем в then будет зависеть
// от того, зарезолвился или зареджектился конкретный промис. Мы всегда попадаем в then и туда в параметр даты приходит
// массив объектов, у этих объектов всегда будет ключ status (fulfilled, rejected) , и ключ value в случае разолва
//и ключ reason в случае реджекта