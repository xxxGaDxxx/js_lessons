class Student {

    constructor(name, lastName, group, performance) {
        this.name = name
        this.lastName = lastName
        this.group = group
        this.performance = performance
    }
}

let a = new Student('wlad', 'l', 54, [3, 4, 4, 3, 5])
let b = new Student('paha', 'lq', 53, [2, 3, 5, 4, 1])
let c = new Student('olga', 'lw', 52, [5, 4, 1, 3, 4])
let d = new Student('margo', 'le', 51, [4, 4, 4, 4, 4])
let e = new Student('radik', 'lr', 52, [5, 5, 5, 5, 5])
let f = new Student('aw', 'lt', 53, [5, 4, 1, 3, 4])
let k = new Student('wowa', 'ly', 56, [3, 5, 4, 5, 4])
let l = new Student('liza', 'lu', 57, [3, 3, 4, 3, 5])
let m = new Student('denis', 'lh', 58, [5, 4, 1, 3, 4])
let o = new Student('qwe', 'lg', 59, [2, 3, 5, 4, 1])



2
// сортировка по среднему балу
let men = [a, b, c, d, e, f, k, l, m, o]
console.log(men)

let menNew = [...men]

let asd = menNew.sort((a, b) => {
    return b.performance.reduce((acc, el) => acc + el, 0) - a.performance.reduce((acc, el) => acc + el, 0)
})

console.log(asd)

// сортировка по оценкам
let men4_5 = []
menNew.forEach(el => {
    let a = el.performance.sort((a, b) => {
        return a - b
    })
    if (a[0] >= 4) {
        men4_5 = [...men4_5, el]
    }
})

console.log(men4_5)

/////////////////////2


class New {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


///////////////3

class Time {
    static Value = 60
    static Hour = 24

    constructor(hour, minute, second) {
        if (hour < Time.Hour && minute < Time.Value && second < Time.Value) {
            this.hour = hour
            this.minute = minute
            this.second = second
        } else {
            throw new Error('Incorrect values')
        }

    }

    get time() {
        return `${this.hour} : ${this.minute} : ${this.second}`
    }

    set setHour(value) {
        this.hour = value
    }

    set setMinute(value) {
        this.minute = value
    }

    set setSecond(value) {
        this.second = value
    }

}


let time = new Time(22, 22, 10)
console.log(time.time)
time.setHour = 14
console.log(time.time)
time.setMinute = 30
console.log(time.time)
time.setSecond = 55
console.log(time.time)


/////////////4

class Buyer {

    constructor(name, lastName, address, bankAccount) {
        this.name = name
        this.lastName = lastName
        this.address = address
        this.bankAccount = bankAccount
    }
    get info() {
        return `name: ${this.name}, lastName: ${this.lastName}, address: ${this.address}, bankAccount: ${this.bankAccount}`
    }
    get infoName() {
        return `name: ${this.name}`
    }
    get infoLastName() {
        return `lastName: ${this.lastName}`
    }
    get infoAddress() {
        return `address: ${this.address}`
    }
    get infoBankAccount() {
        return `bankAccount: ${this.bankAccount}`
    }

    set nameNew(value) {
        this.name = value
    }
    set lastNameNew(value) {
        this.lastName = value
    }
    set addressNew(value) {
        this.address = value
    }
    set bankAccountNew(value) {
        this.bankAccount = value
    }
}

let wladd = new Buyer('wlad', 'lo', 'Grodno', '123456798')
console.log(wladd.info)
console.log(wladd.infoName)
console.log(wladd.infoLastName)
console.log(wladd.infoAddress)
console.log(wladd.infoBankAccount)
wladd.nameNew='Wlad'
wladd.lastName='Loban'
console.log(wladd.info)

let margoo = new Buyer('margo', 'lob', 'Grodno', '456123789')
let pacha = new Buyer('pacha', 'pa', 'Minsk', '987654321')
let radikk = new Buyer('radik', 'ra', 'Wroclaw', '987123546798')

let buyerArray = [margoo, wladd, pacha, radikk]


let alphabetically = (arr) => {
    let buyerArray2 = arr.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    })
    console.log(buyerArray2.map(el => el.name))

    let bankCard = arr.filter(el => {
            return el.bankAccount.length <= 9
        }
    )
    console.log(bankCard.map(el => el.name))
}
alphabetically(buyerArray)


///////////// 5


class Car {
    constructor(make, cylinders, power) {
        this.make = make
        this.cylinders = cylinders
        this.power = power
    }

    get post() {
        return `make: ${this.make}, number of cylinders: ${this.cylinders}, power: ${this.power}.`
    }
}

class Truck{
    constructor(loadCapacity) {
        this.loadCapacity=loadCapacity
    }

}














