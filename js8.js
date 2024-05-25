

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(10)
//         rej('err')
//     }, 1000)
// })

// promise
//     .then((data) => {
//         console.log(data)
//         return 20
//     })
//     .then((data) => {
//         console.log(data)
//         return 40
//     })
//     .catch(err => {
//         console.log(err)
//         return 30
//     })
//     .then((data) => {
//         console.log(data)
//         return 20
//     })
//     .finally(() => {
//         console.log('end')
//     })



// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((data) => console.log(data.url))
//     .then(() => fetch('https://jsonplaceholder.typicode.com/users/2'))
//     .then(data => console.log(data.url))


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((data) => {
//         console.log(data.url)
//         return fetch('https://jsonplaceholder.typicode.com/users/2')
//     })
//     .then((data) => {
//         console.log(data.url)
//     })



// const foo = async () => {
//     //пока не получили ответ с первого запроса код дальше не пойдет
//     console.log('start')
//     const user3 = await fetch('https://jsonplaceholder.typicode.com/users/3')
//     console.log('after first fetch')
//     const user4 = await fetch('https://jsonplaceholder.typicode.com/users/4')
//     console.log('after second fetch')
//     console.log(user3.url)
//     console.log(user4.url)
//     console.log('finish')
// }

// foo()
// console.log('я выполняюсь быстрее запросов')




// const foo = async () => {
//     try {
//         const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         console.log(user1.url)
//         const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2')
//         console.log(user2.url)
//     }
//     catch (err) {
//         console.log(err.message)
//     }
//     finally {
//         console.log('finally')
//     }
// }

// console.log(foo())



let promise1 = fetch('https://jsonplaceholder.typicode.com/users/1')
let promise2 = fetch('https://jsonplaceholder.typicode.com/users/2')
let promise3 = fetch('https://jsonplaceholder.typicode.com/users/3')

Promise.all([promise1, promise2, promise3]) // если хоть один реджект, то все реджект
    .then(data => console.log('all resolve', data))
    .catch(err => console.log('all rejected', err.message))

Promise.race([promise1, promise2, promise3])// какой промис сработает первым, тот и вернется, даже реджект
    .then(data => console.log('race resolve', data.url))
    .catch(err => console.log('race rejected', err))

Promise.any([promise1, promise2, promise3]) // вернется первый зарезолвленый промис
    .then(data => console.log('any', data.url))
    .catch(err => console.log('any', err))// сработает, если все промисы зареджектятся 

Promise.allSettled([promise1, promise2, promise3]) // сбработает энивей и вернет промисы массивом
    .then(bigData => console.log('allSettled', bigData))
    .catch(err => console.log(err, 'dwdwd'))// кетч никогда не отработает у allSettled