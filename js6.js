

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

// const pow = (x, n) => {
//     if(n === 1){
//         return x
//     }else{
//         return x * pow(x, n-1)
//     }
// }

// console.log(pow(2,3))


// const a = () => {}
// const b = () => {a()}
// const c = () => {b()}

// c()



// const fact = (a) => {
//     let res = 1
//    for(let i = 1; i <= a; i++){
//     if(i ===a ){
//         return res * i
//     }else{
//         res*=i
//         fact()
//     }
//    }
//    return res
// }

// console.log(fact(4))

// const factorial = (n) => {
//     if(n===1){
//         return n
//     }else{
//         return n* factorial(n-1)
//     }
// }

// console.log(factorial(5))