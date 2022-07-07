import {log} from 'util';
import {reverse} from 'dns';

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(arg:number){
//     return function (arg2:number){
//         return arg2+arg
//     }
// }
//
// console.log(sum(10)(10))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let sum = 0
//     return function () {
//         return ++sum
//     }
//
// }
//
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// console.log(counter()); // 4
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter2()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter2() {
//     let sum = 0
//
//     function count() {
//         return ++sum
//     }
//
//     count.increase = function () {
//         return ++sum
//     }
//     count.decrease = function () {
//         return --sum
//     }
//
//     count.reset = function () {
//         return sum = 0
//     }
//
//     count.set = function (num: number) {
//         return sum = num
//     }
//     return count
// }
// let counter_1 = makeCounter2()
//
// console.log(counter_1())//1
// console.log(counter_1())//2
//
//
// counter_1.set(5)
//
// console.log(counter_1())//6
// console.log(counter_1())//7
//
// counter_1.increase()//8
//
// console.log(counter_1())//9
// console.log(counter_1())//10
//
// counter_1.decrease()//9
//
// console.log(counter_1())//10
// console.log(counter_1())//11
//
// counter_1.reset()//0
//
// console.log(counter_1())//1
// console.log(counter_1())//2


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// /*function superSum(num: number):Function {
//     if (num <= 0) return ()=>0
//     if (num === 1) return (n: number) => n
//
//     let _arg: number[] = []
//
//     function helper(...agr: number[]) {
//
//         _arg = [..._arg, ...agr]
//         if (_arg.length >= num) {
//             _arg.length = num
//         return _arg.reduce((acc,num)=>acc+num)
//         } else {
//             return helper
//         }
//     }
//
//     return helper
// }
//
// console.log(superSum(0)) //0
// console.log(superSum(1)(1)) //0
// console.log(superSum(2)(1)(10)) //0
// console.log(superSum(3)(2)(5)(3)) //10
// console.log(superSum(3)(2)(5,3) )//10
// console.log(superSum(3)(2,5,3)) //10
// console.log(superSum(3)(2,5)(3)) //10
// console.log(superSum(3)(2,5)(3,9)) //10
// console.log(superSum(4)(2,5)(3,9)) //10*/


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

/////////////////////////////////////////////-----1-----/////////////////////////////////////////////
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// цикл

// function sumTo(num:number){
//     let sum=0
//     for (let i = num; i > 0 ; i--) {
//         sum = num +sumTo(num-1)
//     }
//     return sum
// }
//
// console.log(sumTo(100))


// рекурсия
// function sumTo(num: number): number {
//     if (num === 1) return num
//     return num + sumTo(num - 1)
// }
// console.log(sumTo(3))
// console.log(sumTo(100))


// формулой

// function sumTo(num:number){
//     return num*(num+1)/2
// }
// console.log(sumTo(3))
// console.log(sumTo(100))

/////////////////////////////////////////////-----2-----/////////////////////////////////////////////
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(num:number):number{
//     if (num === 1) return num
//      return num * factorial(num - 1)
// }
//
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// function factorial(num:number):number{
//     return num ? num * factorial(num - 1):1
// }
//
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))


/////////////////////////////////////////////-----3-----/////////////////////////////////////////////

// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
//
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//
//     Пример работы:
//
//     function fib(n) { /* ваш код */ }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


// function fib(n:number) :number{
//
//     return n <=1 ? n : fib(n-1)+fib(n-2)
// }
//
// console.log(fib(3))
// console.log(fib(7))
// console.log(fib(10))


/////////////////////////////////////////////-----4-----/////////////////////////////////////////////

// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//

// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
//     Сделайте два варианта решения: используя цикл и через рекурсию.

// type ListType = {
//     value: number
//     next: ListType
// }
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(n:ListType) {
//
//     while (n) {
//         console.log((n.value));
//         n = n.next;
//     }
//
// }
//
// console.log(printList(list));

// type ListType = {
//     value: number
//     next: ListType
// }
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(n:ListType) {
//     console.log(n.value)
//     if (n.next ) return printList(n.next)
//
// }
// console.log(printList(list));


/////////////////////////////////////////////-----5-----/////////////////////////////////////////////
// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
//     Сделайте два решения: с использованием цикла и через рекурсию.

// type ListType = {
//     value: number
//     next: ListType
// }
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(n:ListType) {
//     let arr = []
//
//     while (n) {
//         arr.push(n.value)
//         n = n.next
//     }
//     let arr2 = arr.reverse()
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr2[i])
//     }
//
// }
// console.log(printList(list));


// type ListType = {
//     value: number
//     next: ListType
// }
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: {
//                     value: 5,
//                     next:null
//                 }
//             }
//         }
//     }
// };
//
// function printList(n: ListType) {
//     if(n.next){
//         printList(n.next)
//     }
//     console.log(n.value)
// }
//
// console.log(printList(list));





/////////////////////////////////////////////-----6-----/////////////////////////////////////////////

// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
//
//     Сделайте набор «готовых к употреблению» фильтров:
//
//     inBetween(a, b) – между a и b (включительно).
// inArray([...])– находится в данном массиве.
//     Они должны использоваться таким образом:
//
//     arr.filter(inBetween(3,6))– выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3]))– выбирает только элементы, совпадающие с одним из элементов массива
// Например:
//
//     /* .. ваш код для inBetween и inArray */
//     let arr = [1, 2, 3, 4, 5, 6, 7];
//
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



/*let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetween(a:number,b:number){

    return function (x:number){
        console.log(x) // в х приходит 1 2 3 4 5 6 7 по очереди
        return x>= a && x<=b
    }
}


console.log(( arr.filter(inBetween(3, 6))))*/

// let arr = [1, 2, 3, 4, 5, 6, 7]
// function inArray(a:number[]){
//  return function (x:number){ //в х приходит по одному числу 1 2 3 4 5 6 7
//   return a.includes(x) // если совпадает с числом из массива а то возвращает true
//  }
//  }
//
// console.log(( arr.filter(inArray([1, 2, 10])) )) //если приходит true то выводит возвращает массив с найдеными числами [1,2]



/////////////////////////////////////////////-----7-----/////////////////////////////////////////////
// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:
//
//     let users = [
//         { name: "John", age: 20, surname: "Johnson" },
//         { name: "Pete", age: 18, surname: "Peterson" },
//         { name: "Ann", age: 19, surname: "Hathaway" }
//     ];
// Обычный способ был бы таким:
//
// // по имени (Ann, John, Pete)
//     users.sort((a, b) => a.name > b.name ? 1 : -1);
//
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?
//
//     users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
//
//     Напишите функцию byField, которая может быть использована для этого.

// let users = [
//         { name: "John", age: 20, surname: "Johnson" },
//         { name: "Pete", age: 18, surname: "Peterson" },
//         { name: "Ann", age: 19, surname: "Hathaway" }
//     ];
//
//
// function byField(field:string){
//     debugger
//    return (a:any,b:any)=> a[field]> b[field] ? 1 : -1
// }
//
// users.sort(byField('name'))
// users.forEach(user => console.log(user.name))
//
// users.sort(byField('age'))
// users.forEach(user => console.log(user.name))




// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

/*
let arr1 = [1, 2, [3, 4]]
let arr3 = [1,2,3,[1,2,3,4, [2,3,4]]]

function flatten(arr:number[]) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

console.log(flatten(arr1))
console.log(flatten(arr3))*/









