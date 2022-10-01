// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

import {log} from "util";

Number.prototype.plus = function (x) {
    console.log(this)
    return this + x
}
Number.prototype.minus = function (x) {
    console.log(this)
    return this - x
}

// console.log((2).plus(3).minus(1))
// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function str(...arg) {
    let a = [...arg]
    return `${arg[0]}${arg[1]}${arg[0]}${arg[2]}${arg[0]}${arg[arg.length - 1]}`
}

// console.log(str('*', '1', 'b', '1c'))
// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

let sum = 0

function treeF(obj) {
    if (obj.next === null) {
        return sum += obj.valueNode
    } else {
        sum += obj.valueNode
        for (let i = 0; i < obj.next.length; i++) {
            treeF(obj.next[i])
        }
        return sum
    }
}

// console.log(treeF(tree))

// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
//     this.name = name;
//     this.author = author;
//     return this;
// }
//
// function Foo(Book, bok, auth) {
//     return Book.call(null, bok, auth)
// }
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);
// console.log(book.author);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function fff(a, b) {
    // console.log(b)
    if (b !== undefined) {
        // console.log(1)
        return a + b
    } else {
        // console.log(2)
        return function (b) {
            return a + b
        }
    }
}

// console.log(fff(2, 3))
// console.log(fff(2,)(3))

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

function f2(arg, res = 0) {
    return (arg === undefined) ? res : arg2 => f2(arg2, res + arg)
}

// function f(arg) {
//     var value = arg;
//
//     return function (arg) {
//         if (arg !== undefined) {
//             return f(value + arg);
//         } else {
//             return value;
//         }
//     }
// }

console.log(f2(1)(2)(3)())
console.log(f2(0)(3)(1)(5)())
// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function seven(arg) {
    return 7 + (arg || 0)
}

function five(arg) {
    return 5 + (arg || 0)
}

function one(arg) {
    return 1 + (arg || 0)
}

function two(arg) {
    return 2 + (arg || 0)
}

function minus(arg) {
    return -arg
}

function plus(arg) {
    return arg
}

console.log(seven(plus(one())))
console.log(five(minus(two())))
// Task 10
// Реализовать функцию сортировки массива пузырьком
let arr1 = [12, 3, 345, 12, 4, 234, 34, 5, 23412, 34, 1224, 3, 4, 23, 43, 2, 34, 23, 43, 2, 34, 21, 34, 23, 4, 23, 42, 34]

function sortAr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { //-i благодаря этому мы повторно не  проходимся по отсартерованным ранее парам
            if (arr[j] > arr[j + 1]) {
                let ar = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = ar
            }

        }
    }
    console.log(arr)
}

sortAr(arr1)

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
function validBraces(arg) {
    let stack = []
    let brackets = {
        '}': '{',
        ')': '(',
        ']': '[',
    }

    for (let i = 0; i < arg.length; i++) {
        const current = arg[i]

        if (valid(current)) {
            if (brackets[current] !== stack.pop()) return false
        } else {
            stack.push(current)
        }

    }
    return stack.length === 0
}

function valid(ar) {
    return [')', '}', ']'].indexOf(ar) > -1
}

console.log(validBraces('()'));
console.log(validBraces('[)'));
console.log(validBraces('{}[]()'));
console.log(validBraces('([{}])'));
console.log(validBraces('())({}}{()][]['));


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
let arr2 = [12, 3, 345, 12, 4, 234, 34, 5, 23412, 34, 1224, 3, 4, 23, 43, 2, 34, 23, 43, 2, 34, 21, 34, 23, 4, 23, 42, 34]

function plusValue(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if (a.indexOf(arr[i]) === -1) {
            console.log(1)
            a.push(arr[i])
        }
    }
    return a
}

console.log(plusValue(arr2))

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
let arr3 = [1, 2, null, 7, 8, null, 3]

function validArr(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            a.push(arr[i] * 2)
        }
    }
    return a
}

console.log(validArr(arr3))


// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};

function pozitivNamber(ar) {
    let a = [ar.value]
    if (Array.isArray(ar.children)) {
        // ar.children.forEach(el=>{
        //     a= a.concat(pozitivNamber(el))
        // })
        for (let i = 0; i < ar.children.length; i++) {
            a = a.concat(pozitivNamber(ar.children[i]))
        }
    }
    return a
}

console.log(pozitivNamber(tree2))


// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

function pozitiv(ar) {
    let a = ar.value
    if (Array.isArray(ar.children)) {
        // ar.children.forEach(el=>{
        //     a= a.concat(pozitivNamber(el))
        // })
        for (let i = 0; i < ar.children.length; i++) {
            a = a + (pozitiv(ar.children[i]))
        }
    }
    return a
}

console.log(pozitiv(tree2))

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function Boom(mes, time) {
    this.message = mes

    setTimeout(() => {
        return console.log(this.message)
    }, time * 1000)
}

new Boom('aaaaa', 1)


// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

function newStr(str) {
    let a = 0
    let strNew = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[i+1]){
            strNew = strNew+`${str[i]}`
        }else{
            for (let j = i; j < str.length; j++) {
                ++a
                if(str[j] !== str[j+1]){
                    strNew = strNew+`${str[i]}${a}`
                    i+=a-1
                    a=0
                    break
                }
            }
        }
    }
    return strNew
}

console.log(newStr('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
let arr4=[1,2,3,4,5,6,7,8,9]
let arr5=[1,2,3,4,5,6,7,2,1,23,4,2,8,9]

function isSorted(arr){
    let a =[...arr]
     a.sort((a,b)=>a-b)
    console.log(a)
    let b= true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===a[i]){

        }else {
            return b=false
        }

    }
    return b
}

console.log(isSorted(arr4))
console.log(isSorted([-Infinity, -5, 0, 3, 9]))
console.log(isSorted(arr5))


// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined
function missing(arr){
    if(arr.length===0){
        return undefined
    }else{
        let a=[...arr]
        a.sort((a,b)=>a-b)
        let b=[]
        let c

        for (let i = 1; i < a[a.length-1]; i++) {
            b.push(i)
        }

        for (let i = 0; i < a.length; i++) {
            if(a[i]===b[i]){

            }else {
                return c= b[i]
            }

        }
        return c
    }

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr.indexOf(i) == -1) return i;
    // }
    // return undefined;

    /*Использовать эту функцию если в переданном массиве несколько пропущенных цифр.
    var arrMissed = [],
    maxNum = arr.sort((a,b) => b-a)[0];
    for (let i = 1; i < maxNum; i++) {
        if (arr.indexOf(i) == -1) arrMissed.push(i);
    }
    return arrMissed;*/

}

console.log(missing([]) )
console.log(missing([1, 4, 3]) )
console.log(missing([2, 3, 4])  )
console.log(missing([5, 1, 4, 2])  )
console.log(missing([1, 2, 3, 4])    )

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

class LinkedList{
    constructor(q,w,e) {
        this.arr=[q,w,e]
    }
    add(b){
        this.arr.push(b)
        return undefined
    }
    has(x){
        return this.arr.indexOf(x) > -1
    }
}
let list = new LinkedList(1, 2, 3)
console.log(list.add(4))
console.log(list.add(5))
console.log(list.has(1))
console.log(list.has(4))
console.log(list.has(6))



// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));