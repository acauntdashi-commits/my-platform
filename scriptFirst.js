// --- Ящики для элементов страницы ---

const checkButton = document.querySelector("#checkButton");
const newTaskButton = document.querySelector("#newTask");
const answerInput = document.querySelector("#answer");
const addition = document.querySelector("#addition");

// --- Ящики для текущей задачи ---

let taskA;
let taskB;
let taskC;
let taskOperation;

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

    taskOperation = pickOperation();
    taskA = Math.floor(Math.random() * 11); // случайное целое от 0 до 10
    taskB = Math.floor(Math.random() * (11 - taskA)); // случайное целое от 0 до 10 - a, чтобы сумма не вышла за 10

    // для минуса меняем местами, если второе число больше первого 
    if (taskOperation === "-" && taskB > taskA) {
        const temp = taskA;
        taskA = taskB;
        taskB = temp;
    }

    taskC = calculate(taskA, taskB, taskOperation);
}

function showTask() {
    generateTask();
    addition.textContent = taskA + " " + taskOperation + " " + taskB + " = ?";
}

newTaskButton.addEventListener("click", showTask);

function checkAnswer() {
    if (answerInput.value === "") {
        console.log("Поле пустое");
        return;
    }
    const guess = Number(answerInput.value);
    console.log("Твой ответ:", guess, "— правильный:", taskC);
}

checkButton.addEventListener("click", checkAnswer);




