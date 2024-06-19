
class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
        this.state = {}
    }
    startEngine() {
        console.log(`start ${this.brand}`)
    }
    stopEngine = function () {
        console.log(`stop ${this.brand}`)
    }
}

const car1 = new Car('bmw', 200)
const car2 = new Car('bmw', 200)


// console.log(car1.brand === car2.brand)
// console.log(car1.state === car2.state)
// console.log(car1.startEngine === car2.startEngine)

// __proto__ - свойство, которое есть в каждом объекте и является ссылкой на прототип
//  класса(функции конструктора) с помощью которого был создан данный объект

console.log(car1.__proto__ === Car.prototype)

const a = new String('str')
console.log(a.__proto__)
console.log(a.__proto__ === String.prototype)

const b = 'str'
console.log(b.__proto__ === String.prototype)


//если создать примитивы с помощью new, то это будут объекты не равные друг другу
const c = new String('str')
const d = new String('str')
console.log(c === d) // false


// prototype ссылается на constructor, а constructor ссылается на сам class

// __proto__ инстанса ссылается на прототип того класса с помощью которого он был создан