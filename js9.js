
// console.log('start')

// setTimeout(() => console.log('timeout'), 1000)

// console.log('end')



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// function a() {
//     setTimeout(() => {
//         console.log('a')
//     })
// }
// function b() {
//     console.log('b')
// }

// a()

// new Promise(function (res, rej) {
//     console.log('create promise')
//     res()
// }).then(() => {
//     setTimeout(function timer() {
//         console.log('timeout')
//     }, 0)
// })

// b()



// function firstFunc() {
//     console.log('Start firstFunc')
//     setTimeout(() => {
//         console.log('setTimeout in firstFunc')
//     }, 300)
//     console.log('End firstFunc')
// }

// function secondFunc() {
//     console.log('Start secondFunc')
// }

// firstFunc()

// new Promise(function (resolve, reject) {
//     console.log('Creating promise')
//     resolve()
// }).then(() => {
//     console.log('Promise resolution')
// })

// secondFunc()

// setTimeout(() => {
//     console.log('setTimeout outside')
// }, 100)