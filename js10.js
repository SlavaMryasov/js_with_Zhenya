// this

// function foo() {
//     console.log(`Brand: ${this.brand}`)
// }

// const bmw = {
//     brand: 'bmw'
// }
// const kia = {
//     brand: 'kia'
// }

// bmw.showBrand = foo
// kia.showBrand = foo

// bmw.showBrand()
// kia.showBrand()





//-------------------------------------------------------------------------------------------------------
// 1.Global scope
// 2.function(arrow f, simple f)
// 3.call apply bind
// 4.function constructor

// ------------- 1.Global scope

// console.log(this) // window




// ------------- 2.function(arrow f, simple f)

// const foo = () => console.log(this) // контекст(this) у стрелки определяется в момент инициализации, поэтому
// foo()                               // лексическое окружение глобальное, покажет window(в браузере), global(в ноде)


// const brand = 'kia'
// const car1 = {
//     brand: 'bmw',
//     showBrand: function () { console.log(this.brand) }
// }

// const car2 = {
//     brand: 'bmw',
//     showBrand: () => { console.log(this.brand) }
// }

// car1.showBrand() // bmw
// car2.showBrand() // undefined


// function foo() {
//     const bar = () => {
//         console.log(this)
//     }
//     bar()
// }
// foo()


// function foo() {
//     console.log(this)
// }
// foo()


// const car = {
//     brand: 'bmw',
//     showBrand: () => { console.log(this.brand) },//this закрепится за window -undefined
//     startEngine: function () { console.log(`Start ${this.brand}`) }
// }

// car.showBrand() //undefined
// car.startEngine()


// const car = {
//     brand: 'bmw',
//     showBrand: () => { console.log(this.brand) },
//     startEngine: function () {
//         // {объект лексического окружения}
//         const bar = () => { // будет проинициализирована в момент вызова startEngine, поэтому this закрепится
//             console.log(`Start ${this.brand}`) // за объектом лексического окружения(в startEngine)
//         }
//         bar()
//     }
// }

// car.showBrand() //undefined
// car.startEngine()



// ------------- 3.call apply bind

// const bmw = {
//     speed: 200,
//     showMaxSpeed(a, b) { console.log(this.speed + a + b) }
// }
// const kia = {
//     speed: 220,
// }

// bmw.showMaxSpeed.call(kia, 10, 20) // метод call переопределяет this
// bmw.showMaxSpeed.apply(kia, [10, 20]) // метод apply переопределяет this
// //оба метода одинаковые, кроме отличия в передаче параметров


// const goo = bmw.showMaxSpeed.bind(kia, 10, 20)
// goo()

// //или

// bmw.showMaxSpeed.bind(kia, 10, 20)()
// // bind тоже для переопределения контекста, но он сам не вызывает функцию, а создает колбэк




// // ------------- 4.function constructor

// function CarCreator(brand, speed) {
//     this.brand = brand
//     this.speed = speed
// }

// const bmw = new CarCreator('bmw', 200)
// const kia = new CarCreator('kia', 220)

// console.log(bmw)
// console.log(kia)



// let car = {
//     brand: 'bmw',
//     showCar() { console.log(this.brand) }
// }

// let kia = car
// car = { brand: 'wdw' }

// kia.showCar()



function foo() {
    const x = 10;
    return {
        x: 20,
        bar: () => {
            console.log(this.x)
        },
        baz: function () {
            console.log(this.x)
        }
    }
}

const obj2 = foo.call({ x: 30 })
// const obj2 = foo()
obj2.bar()
obj2.baz()