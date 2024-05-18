

// // lexical invironment

// let car = 'bmw'

// function startEngine() {
//     // const car = 'audi'
//     console.log(car)
// }

// car = 'kia'
// startEngine()



// let a = 10

// function foo() {
//     let a = 40
//     bar()
// }

// function bar(){
//     console.log(a)
// }

// foo()


// ссылка на внешнее лексическое огружение создается во время инициализации, а сам объект лексического окружения
// для функции создается в момент вызова этой функции

// замыкание - способность функции запоминать то лексическое окружение, в котором она была проинициализирована

// let car = 'bmw'
// startEngine()
// function startEngine() {
//     // const car = 'audi'
//     console.log(car)
// }

// car = 'kia'
// startEngine()




// const counterCreator = () => {
//     let count = 0

//     return () => {
//         console.log(++count)
//     }
// }

// const counter1  = counterCreator()
// const counter2  = counterCreator()

// counter1()
// counter1()
// counter1()

// counter2()
// counter2()
// counter2()


// for(var i=0 ; i<6; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000)
// }

// for(let i=0 ; i<6; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000)
// }



//----------------------------------------------------------
// // это приблизительный код, демонстрирующий конструктор промиса
// function newPromise(executor) {
//     const resolve = (data) => {
//         return {
//             state: 'fulfilled',
//             result: data
//         }
//     }
//     const rejected = (err) => {
//         return {
//             state: 'rejected',
//             result: err
//         }
//     }
//     executor(resolve, rejected)
// }



// const promiseFetch = () => {
//     return new Promise((res, rej)=> { 
//         // конструктор промиса вернул нам executor из параметров которого мы можем вытащить resolve и rejected
//      setTimeout(()=> {
//         res('some data')
//         rej('some error')
//      },2000)
//     })
// }

// let promise = promiseFetch()

// console.log(promise)



// fs.readFileSync('./index.html', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// const fs = require('fs')

// console.log('start')


// const promiseFetch =(url) => {
//     return new Promise((res, rej)=> {
//         fs.readFileSync(url, (err, data)=>{
//             if(err){
//                 rej(err)
//             }else{
//                 res(data)
//             }
//         })
//     })
// }


// const pr = promiseFetch('./index.html')
// console.log(pr)
// console.log('end')



// console.log('start')

// const promiseFetch = () => {
//     return new Promise((res, rej)=> { 
//         // конструктор промиса вернул нам executor из параметров которого мы можем вытащить resolve и rejected
//      setTimeout(()=> {
//         res('some data')
//         // rej('some error')
//      },2000)
//     })
// }
// console.log('end')

// const promise = promiseFetch()

// promise.then((data)=> {
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// }).finally(()=> {
//    console.log( 'кукуляля')
// })



//можно обрабатывать промис без метода catch, then на самом деле может вернуть 2 колбэка, но так не надо
// promise.then((data)=> {
// console.log(data)
// }, (err)=> {
//     console.log(err)
// })




// console.log('start')

// const promiseFetch = () => {
//     return new Promise((res, rej)=> { 
//         // конструктор промиса вернул нам executor из параметров которого мы можем вытащить resolve и rejected
//      setTimeout(()=> {
//         res('some data')
//         // rej('some error')
//      },2000)
//     })
// }


// promiseFetch().then((data)=> {
//     console.log('then1',data)
//     return data // data прокинется в следующий промис и ее можно будет отконсолить 
// }).then((data)=> {
//     console.log('then2',data)
//     return data
// }).finally((data)=> {
//     console.log('finally',data) // в finally ничего не принимает и не возвращает и дату мы не увидим, finally просто отработает и data залетит в следующий then
// }).then((data)=> {
//     console.log('then3',data)
// }).catch((err)=> {
//     console.log('catch', err)
// })


// console.log('end')





// console.log('start')

// const promiseFetch = () => {
//     return new Promise((res, rej)=> { 
//         // конструктор промиса вернул нам executor из параметров которого мы можем вытащить resolve и rejected
//      setTimeout(()=> {
//         res('some data')
//         // rej('some error')
//      },2000)
//     })
// }


// promiseFetch()
// .then((data) => {
// console.log(data)
// return new Promise((res,rej)=> res('data'))
// })
// .then((data)=> {
//     console.log(data)
// })

// console.log('end')



// const promiseFetch = (ms) => {
//     return new Promise ((res, rej)=> {
//         setTimeout(()=> {
//             res('hello')
//         }, ms)
//     })
// }

// const promise = promiseFetch(10000)

// console.log(promise)



// const promise1 = new Promise((res, rej)=> {
//     setTimeout(()=> {
//         rej('reject1')
//     }, 1000)
// })


// promise1
// .catch((t)=> t+ 'catch1')
// .catch((t)=> t+'catch2') 
// .then((t)=> t+'then1')
// .finally((t)=> t+'finally')
// .then((t)=> console.log(t))


// каждый из методов возвращает новый промис, на который мы можем подписаться. Если в работе колбэка, который
// возвращает какой либо из методов не происходит никаких ошибок, то этот промис автоматически резолвится


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolve2');
//     }, 2000);
// });

// promise2
//     .then((text) => text + ' then2')
//     .catch((text) => text + ' catch2')
//     .then((text) => text + ' then3')
//     .finally(() => ' finally2')
//     .then((text) => console.log(text));

//     //resolve2 then2 catch2 



// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('error3');
//     }, 1500);
// });

// promise3
//     .then((text) => text + ' then4')
//     .catch((text) => text + ' catch3')
//     .then((text) => text + ' then5')
//     .catch((text) => text + ' catch4')
//     .finally(() => ' finally3')
//     .then((text) => console.log(text));

//     //error3 catch3 then5



// function checkWeather(temperature) {
//     return new Promise((resolve, reject) => {
//       if (temperature > 20) {
//         resolve("It's warm outside!");
//       } else {
//         reject("It's cold outside!");
//       }
//     });
//   }
  
//   console.log('Checking the weather...');
  
//   checkWeather(25)
//     .then((message) => {
//       console.log(message); // Успешное выполнение (resolve)
//     })
//     .catch((error) => {
//       console.log(error); // Ошибка (reject)
//     })
//     .finally(() => console.log('Weather check complete.'));


//     //It's warm outside! 'Weather check complete.'



// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//       // Имитация асинхронного запроса данных
//       setTimeout(() => {
//         if (url === 'https://api.example.com/data') {
//           resolve({ success: true, data: 'Some data from API' });
//         } else {
//           reject(new Error('Invalid URL'));
//         }
//       }, 2000);
//     });
//   }
  
//   console.log('Fetching data from the API...');
  
//   fetchData('https://api.example.com/data')
//     .then((response) => {
//       console.log('Response from API:', response.data);
//     })
//     .catch((error) => {
//       console.error('Failed to fetch data:', error.message);
//     })
//     .finally(() => console.log('Fetch attempt finished.'));


//     // 'Fetching data from the API...' 'Response from API:' 'Some data from API' 'Fetch attempt finished.'


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolve2');
//     }, 2000);
// });

// promise2
//     .then((r) => r + ' then2')
//     .then((r) => r + ' then3')
//     .catch((e) => e + ' catch1')
//     .finally(() => 'finally1')
//     .then((r) => console.log(r));


//     // 'resolve2'  then2 then3 


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('reject3');
//     }, 1500);
// });

// promise3
//     .catch((e) => e + ' catch3')
//     .then((r) => r + ' then4')
//     .catch((e) => e + ' catch4')
//     .finally(() => 'finally2')
//     .then((r) => console.log(r));

//     // 'reject3'' catch3' ' catch4'