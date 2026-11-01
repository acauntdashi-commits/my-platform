console.log("Давай решать");

let a = Math.floor(Math.random() * 11); // случайное целое от 0 до 10
let b = Math.floor(Math.random() * (11 - a)); // случайное целое от 0 до 10 - a, чтобы сумма не вышла за 10

let operation;

if (Math.random() < 0.5) {
    operation = "+";
} else {
    operation = "-";
}
// для минуса меняем местами, если второе число больше первого 
if (operation === "-" && b > a) {
    const temp = a;
    a = b;
    b = temp;
}

let c;
if (operation === "+") {
    c = a + b;
} else {
    c = a - b;
}

console.log(`${a} ${operation} ${b} = ${c}`); // пример со случайным знаком и ответом