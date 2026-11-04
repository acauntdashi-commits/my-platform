function pickOperation() {
    let operation;

    if (Math.random() < 0.5) {
        operation = "+";
    } else {
        operation = "-";
    }
    return operation;
}

function calculate(a, b, operation) {
    let c;
    if (operation === "+") {
        c = a + b;
    } else {
        c = a - b;
    }
    return c;
}

function generateTask() {
    console.log("Давай решать");

    const operation = pickOperation();
    let a = Math.floor(Math.random() * 11); // случайное целое от 0 до 10
    let b = Math.floor(Math.random() * (11 - a)); // случайное целое от 0 до 10 - a, чтобы сумма не вышла за 10

    // для минуса меняем местами, если второе число больше первого 
    if (operation === "-" && b > a) {
        const temp = a;
        a = b;
        b = temp;
    }

    const c = calculate(a, b, operation);

    console.log(`${a} ${operation} ${b} = ${c}`); // пример со случайным знаком и ответом

    return c;
}

const answer = generateTask();
console.log(answer);