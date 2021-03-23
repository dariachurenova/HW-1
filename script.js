const name = prompt("Как тебя зовут?");
let age = Number(prompt("Какого ты года рождения?"));
age = 2020 - age;
alert(name + " " + age);

const a = Number(prompt("Введите число a"));
const b = Number(prompt("Введите число b"));
const c = Number(prompt("Введите число c"));
console.log(a + b + c);
if (a % 2 === 0) {
    console.log("Четное =", a);
}
if (b % 2 === 0) {
    console.log("Четное =", b);
}
if (c % 2 === 0) {
    console.log("Четное =", c);
}
console.log("Среднее арифметическое =", (a + b + c) / 3);


const value = +prompt("Введите число");
console.log((parseInt(value / 10000)), (parseInt(value / 1000) % 10), (parseInt(value / 100) % 10), (parseInt(value / 10) % 10), value % 10);
