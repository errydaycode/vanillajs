// 1111.ts, then, catch, finally
// Зачем нужны промисы ? Даже запрос на сервер занимает время
// это действия, которые блокиурют поток кода
// если мы будем синхронно выполнять запрос на сервер синхронно, то на время этого запроса код остановится на этом месте
// и код зависнет на одном месте. Ничего нельзя будет сделать пока код с запросом не выполнится.

// const fetch = (url, callback) => {
//     // где-то тут выполняет запрос на сервер и дожидается ответа --> url
//
//     callback(err ,data) //и в этот колл бек передает дату
// }
//
// // Есть книжный магазин, в котором есть книги и список авторов, мы хотим выбрать книгу:
//
// fetch('https://bookssite.com/authors',(err, data) =>{
//     if(err) {
//         console.log('something went wrong')
//     } else {
//         fetch('https://bookssite.com/authors/id45',(err, data) =>{
//             if(err) {
//                 console.log('something went wrong')
//             } else {
//
//             }
//     }
// } )


