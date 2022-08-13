

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const task1 = new Promise(()=>{
//     console.log("Promise is created")
// })
// console.log(task1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const task2 = new Promise((res)=>{
//     res(console.log('Promise Data'))
// })
// console.log(task2)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const task3 = new Promise((res,rej)=>{
//     rej(console.log('Promise Error'))
// })
// console.log(task3)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const task4 = new  Promise((res,rej)=>{
//     setTimeout(()=>{res('Promise Data')},2000)
// })
//
// task4
//     .then((data)=>{
//         console.log(data)})


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// type testObjType = {
//     promise: null | Promise<any>
//     resolve: null | Function
//     reject: null | Function
//     onSuccess: (paramName: string) => void
//     onError: (paramName: string) => void
// }
//
// let handlePromise:testObjType = {
//     promise:null,
//     resolve:null,
//     reject:null,
//     onSuccess:(paramName:string)=>{
//         console.log(`Promise is resolved with data: ${paramName}`)},
//     onError:(paramName:string)=> {
//         console.log(`Promise is rejected with error: ${paramName}`)},
// }
//
// export const createPromise =()=>{
//     const prom: Promise<any> = new Promise((res,rej)=>{
//         handlePromise.resolve = res
//         handlePromise.reject = rej
//
//     })
//     handlePromise.promise = prom
//     handlePromise.promise
//         .then(res=>handlePromise.onSuccess(res))
//         .catch(err=>handlePromise.onError(err))
//     console.log(handlePromise)
// }
//
//
// export const resolvePromise =()=>{
//     handlePromise.resolve && handlePromise.resolve('11111')
//     console.log(handlePromise.promise)}
// export const rejectPromise =()=>{
//     handlePromise.reject && handlePromise.reject('00000')
//     console.log(handlePromise.reject)
//     console.log(handlePromise.promise)
// }


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

//
// const task6 = new Promise<string>((res,rej)=>{
//     setTimeout(res,1000,"My name is")
// })
//
// const print=(param:string):void=>{
//     console.log(param)}
//
// const onSuccess=(value:string):string=>{
//     return `${value} Wlad`
// }
//
// task6
//     .then(onSuccess)
//     .then(print)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

// const task7_1: Promise<object> = new Promise((res, rej) => {
//     setTimeout(res, 500, {name: 'Wlad'})
// })
//
// const task7_2: Promise<object> = new Promise((res, rej) => {
//     setTimeout(res, 1000, {age: 24})
// })
//
// const task7_3: Promise<object> = new Promise((res, rej) => {
//     setTimeout(res, 1500, {citi: 'Grodno'})
// })
//
//
// const allProm: Promise<Array<object>> = Promise.all([task7_1, task7_2, task7_3])
//
// allProm
//     .then(([a, b, c]: Array<object>)=>({...a,...b,...c}))
//     .then(console.log)


// just a plug
export default () => {
};