// Написать программу, которая через prompt считывает число и выводит в консоль число равное
// 10 % от введенного числа

const number = prompt("Введите число:");
const result = number * 0.1;

console.log(`${result}`);

// Написать программу, которая получает два числа и выводит наименьшее

const number1 = prompt("Введите первое число:");
const number2 = prompt("Введите второе число:");

if (number1 < number2) {
    console.log(`${number1}`);
} else {
    console.log(`${number2}`);
}

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
// ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

const number = prompt("Введите число:");

if (number < 100) {
    console.log("меньше 100");
} else if (number > 100) {
    console.log("больше 100");
} else {
    console.log("равно 100");
}

// Написать программу, которая запрашивает у пользователя его имя и возраст(в годах) и выводит в
// консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если
//     пользователь несовершеннолетний.
const name = prompt("Введите свое имя:");
const age = parseInt(prompt("Введите свой возраст:"));

if (age >= 18) {
    console.log(`Hello, ${name}!`);
} else {
    console.log(`Hi, ${name}!`);
}