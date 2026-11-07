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

    return { a: a, b: b, operation: operation, c: c };
}

let correct = 0; //счетчик правильных ответов

const history = [];

for (let i = 0; i < 5; i++) {
    const task = generateTask();
    const userAnswer = prompt(`${task.a} ${task.operation} ${task.b} = ?`);
    const isCorrect = Number(userAnswer) === task.c;

    if (isCorrect) {
        correct++;
    }

    history.push({
        a: task.a,
        b: task.b,
        operation: task.operation,
        c: task.c,
        userAnswer: userAnswer,
        isCorrect: isCorrect

    })
}

console.log("Твой счёт: " + correct + " из 5");

for (let i = 0; i < history.length; i++) {

    const round = history[i];

    let mark;

    if (round.isCorrect) {
        mark = "Верно";
    } else {
        mark = "Мимо, правильный ответ был " + round.c;
    }
    console.log("Раунд " + (i + 1) + ": " + round.a + " " + round.operation + " " + round.b +
        " = ?  Ты ответил " + round.userAnswer + " — " + mark);

}

const checkButton = document.querySelector("#checkButton");
const newTaskButton = document.querySelector("#newTask");
const answerInput = document.querySelector("#answer");

function sayHi() {
    console.log("Меня нажали");
}
newTaskButton.addEventListener("click", sayHi);

function checkAnswer() {
    if (answerInput.value === "") {
        console.log("Поле пустое");
        return;
    }
    const guess = Number(answerInput.value);
    console.log(guess);
    console.log(typeof guess);
}

checkButton.addEventListener("click", checkAnswer);




