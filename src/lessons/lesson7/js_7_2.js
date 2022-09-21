
class Animal{
    constructor(name='Animal') {
        this.name=name
    }
    walk(){
        return console.log(`${this.name} walking`)
    }
    eat(){
        return console.log(`${this.name} eat`)
    }
    sleep(){
        return console.log(`${this.name} sleep`)
    }
}

let a = new Animal()
let b = new Animal('wwwwww')

a.walk()
a.eat()
a.sleep()
b.walk()
b.eat()
b.sleep()


class Monkey extends Animal{
    constructor( name='Monkey') {
        super(name);
    }
    roar(){
        return console.log(`${this.name} roar`)
    }
    climb(){
        return console.log(`${this.name} climb`)
    }
}

let c = new Monkey()
let d = new Monkey('wewe')
c.roar()
c.sleep()
d.climb()
d.walk()


class Human extends Monkey{
    constructor( name='Human') {
        super(name);
    }
    speak(){
        return console.log(`${this.name} speak`)
    }
    think(){
        return console.log(`${this.name} think`)
    }
}

let w= new Human()
let q = new Human('asdasdasd')
w.roar()
w.sleep()
w.speak()
q.climb()
q.walk()
q.think()
