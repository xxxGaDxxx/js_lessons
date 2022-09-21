function Animal(name = 'Animal') {
    this.name = name
}


Animal.prototype.walk = function () {
    return console.log(`${this.name} walking`)
}
Animal.prototype.eat = function () {
    return console.log(`${this.name} eat`)
}
Animal.prototype.sleep = function () {
    return console.log(`${this.name} sleep`)
}

let qqqqqq = new Animal()
let rrr = new Animal('qweqweqweqwe')

console.log(qqqqqq)
qqqqqq.walk()
qqqqqq.eat()
qqqqqq.sleep()
console.log(rrr)
rrr.walk()
rrr.eat()
rrr.sleep()


function Monkey(name = 'Monkey') {
    this.name = name
}

Object.setPrototypeOf(Monkey.prototype, Animal.prototype)


Monkey.prototype.roar = function () {
    return console.log(`${this.name} roar`)
}
Monkey.prototype.climb = function () {
    return console.log(`${this.name} climb`)
}

let qwe = new Monkey()
let zxc = new Monkey('QQQWQW')

console.log(qwe.sleep() ,'sleep')
console.log(zxc)
qwe.roar()
qwe.walk()
zxc.climb()
zxc.eat()


function Human(name = 'Human') {
    this.name = name
}

Object.setPrototypeOf(Human.prototype, Monkey.prototype)


Human.prototype.speak = function () {
    return console.log(`${this.name} speak`)
}
Human.prototype.think = function () {
    return console.log(`${this.name} think`)
}

let asd = new Human()
let asdfff = new Human('qqqqssasas')

console.log(asd)
console.log(asdfff)
asd.roar()
asd.walk()
asd.think()
asdfff.climb()
asdfff.eat()
asdfff.speak()


////////////////// 5


let One = {name: 'One'};
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

const person={
    name:'wlad'
}
function info(phone,email){
    console.log(`name: ${this.name}, Tel: ${phone}, Email: ${email}`)
}

function bindMy(fn, context, ...arg) {
    return function (...args) {
        return fn.apply(context, [...arg, ...args])
    }
}

// function bindMy(fn, context) {
//     const rest = Array.prototype.slice.call(arguments,2)
//     return function () {
//         const args =Array.prototype.slice.call(arguments)
//         return fn.apply(context, rest.concat(args))
//     }
//
// }

// bindMy(Two.sayHello,One)
bindMy(info,person,123444,'qwegadqwe')()
bindMy(info,person,123444)('qwegadqwe')
bindMy(info,person)(123444,'qwegadqwe')

bindMy(Two.sayHello,One)()










