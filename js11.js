
// // создавать объекты через обычную функцию не надо, при создании каждого объекта у него будет своя функция
// // startEngine, а это дополнительно занимает память оперативки и страдает производительность
// function carCreator(name, color) {
//     return {
//         name,
//         color,
//         startEngine() { console.log(`start ${this.name}`) }
//     }

// }

// const bmw = carCreator('bmw', 'white')
// const kia = carCreator('kia', 'red')
// console.log(bmw, kia)

// bmw.startEngine()

// создавать можно через функции конструкторы, либо через класс

// function CarCreator2(brand, color) {
//     this.brand = brand
//     this.color = color
// }

// CarCreator2.prototype.startEngine = function () {
//     console.log(`start ${this.brand}`)
// }

// const car1 = new CarCreator2('bmw', 'white')

// car1.startEngine()


// class Car {
//     constructor(brand, color) {
//         this.brand = brand
//         this.color = color
//     }
//     startEngine() { console.log(`start ${this.brand}`) }
// }

// const bmw = new Car('bmw', 'white')
// console.log(bmw) // в самих объектах методов нет, метод запишется в прототип
// bmw.startEngine()


// // стрелку как метод использовать нельзя, иначе этот метод будет создаваться в каждом инстансе
// // и знак равно в методах тоже не надо писать, типа присвоить к свойству функцию





//приватность
// условная - перед названием свойства пишется земля
// реальная - перед конструкторов инициализируется переменная с решеткой перед названием


// // доступ к свойству только через метод
// class Car {
//     #brand = ''
//     constructor(brand, color) {
//         this.#brand = brand
//         this.color = color
//     }
//     startEngine() { console.log(`start ${this.#brand}`) }
//     getBrand() { console.log(this.#brand) }
//     setBrand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error('invalid brand name')
//         }
//         this.#brand = newBrand
//     }
// }

// const bmw = new Car('bmw', 'white')
// bmw.getBrand()
// bmw.setBrand('kia')
// bmw.getBrand()




// // гетеры и сетеры - для того что бы специально не писать методы
// // get и set сделаны для того, что бы можно было изменять и выдвать свойство без вызова функции
// //  под капотом метод вызовется, но мы можем обращаться к приватному свойству через точку

// class Men {
//     #age = ''
//     constructor(name, age) {
//         this.name = name
//         this.#age = age
//     }
//     get age() {
//         return this.#age
//     }
//     set age(newAge) {
//         this.#age = newAge
//     }
// }
// const slava = new Men('slava', 27)
// console.log(slava.name) // это просто доступ к свойству объекта
// console.log(slava.age) // это работает через метод get
// slava.age = 28
// console.log(slava.age)




// // статические методы - доступны только классам и не доступны инстансам

// class Men {
//     #age = ''
//     constructor(name, age) {
//         this.name = name
//         this.#age = age
//     }
//     get age() {
//         return this.#age
//     }
//     set age(newAge) {
//         this.#age = newAge
//     }

//     static compare(men1, men2) {
//         men1.age > men2.age
//             ? console.log(`${men1.name} older then ${men2.name}`)
//             : console.log(`${men2.name} older then ${men1.name}`)
//     }
// }
// const slava = new Men('slava', 27)
// const katya = new Men('katya', 28)

// Men.compare(slava, katya)





// // наследование

// class Men {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     start() {
//         console.log(`Start ${this.name}`)
//     }

//     static compare(men1, men2) {
//         men1.age > men2.age
//             ? console.log(`${men1.name} older then ${men2.name}`)
//             : console.log(`${men2.name} older then ${men1.name}`)
//     }
// }
// const slava = new Men('slava', 27)
// slava.start()

// class SuperMen extends Men {
//     constructor(name, age, status) {
//         super(name, age)
//         this.status = status
//     }
//     fly() { console.log(`${this.name} flying`) }
// }

// const katya = new SuperMen('katya', 28, true)
// katya.start()
// katya.fly()


