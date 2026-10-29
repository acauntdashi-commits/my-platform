function randInt(min, max, exclude = []) {
    while (true) {
        const ширина = max - min + 1;
        const число = Math.floor(Math.random() * ширина) + min;
        if (!exclude.includes(число)) {
            return число;
        }
    }
}

function слагаемое(n) {
    if (n === 0) {
        return "";
    }
    if (n >= 0) {
        return " + " + n;
    } else {
        return " - " + Math.abs(n);
    }
}

function множитель(n) {
    if (n >= 0) {
        return "" + n;
    } else {
        return "(- " + Math.abs(n) + ")";
    }
}

function множительX(n) {
    if (n === 1) {
        return "x";
    }
    if (n === -1) {
        return "- x";
    }
    return множитель(n) + " · x";
}

function делитель(n) {
    if (n >= 0) {
        return "" + n;
    } else {
        return "(- " + Math.abs(n) + ")";
    }
}

// ---- Первый вид: ax + b = c ----
function собратьУравнение() {
    const a = randInt(-12, 12, [0]);
    const x = randInt(-15, 15);
    const b = randInt(-20, 20);

    const c = a * x + b;

    загаданныйКорень = x;

    return множительX(a) + слагаемое(b) + " = " + c;
}

// ---- Второй вид: ax + b = cx + d ----
function собратьУравнение1() {
    const a = randInt(-12, 12, [0]);
    const c = randInt(-12, 12, [0, a]);
    const x = randInt(-15, 15);
    const b = randInt(-20, 20);

    const d = b + (a - c) * x;

    загаданныйКорень1 = x;

    return множительX(a) + слагаемое(b) + " = " + множительX(c) + слагаемое(d);
}

// ---- Элементы страницы: два комплекта ----
const контейнер = document.getElementById("уравнение");
const кнопка = document.getElementById("новаяЗадача");
const поле = document.getElementById("ответ");
const проверить = document.getElementById("проверить");
const счет = document.getElementById("счет");

const контейнер1 = document.getElementById("уравнение1");
const кнопка1 = document.getElementById("новаяЗадача1");
const поле1 = document.getElementById("ответ1");
const проверить1 = document.getElementById("проверить1");
const счет1 = document.getElementById("счет1");

// ---- Хранилища: два комплекта ----
let загаданныйКорень = 0;
let уравнениеНаПлашке = "";
let правильных = 0;

let загаданныйКорень1 = 0;
let уравнениеНаПлашке1 = "";
let правильных1 = 0;

// ---- Показ уравнений ----
function показатьУравнение() {
    уравнениеНаПлашке = собратьУравнение();
    контейнер.textContent = уравнениеНаПлашке;
}

function показатьУравнение1() {
    уравнениеНаПлашке1 = собратьУравнение1();
    контейнер1.textContent = уравнениеНаПлашке1;
}

if (контейнер) {
    показатьУравнение();
}

if (контейнер1) {
    показатьУравнение1();
}

if (кнопка) {
    кнопка.addEventListener("click", показатьУравнение);
}

if (кнопка1) {
    кнопка1.addEventListener("click", показатьУравнение1);
}

// ---- Проверка: две независимые ----
if (поле && проверить) {
    проверить.addEventListener("click", function () {
        if (поле.value === "") {
            контейнер.textContent = "Сначала введи ответ. " + уравнениеНаПлашке;
            return;
        }

        const ответ = Number(поле.value);

        if (ответ === загаданныйКорень) {
            правильных = правильных + 1;
            счет.textContent = "Правильных ответов: " + правильных;
            контейнер.textContent = "Верно! " + уравнениеНаПлашке;
        } else {
            контейнер.textContent = "Попробуй ещё раз. " + уравнениеНаПлашке;
        }
    });
}

if (поле1 && проверить1) {
    проверить1.addEventListener("click", function () {
        if (поле1.value === "") {
            контейнер1.textContent = "Сначала введи ответ. " + уравнениеНаПлашке1;
            return;
        }

        const ответ = Number(поле1.value);

        if (ответ === загаданныйКорень1) {
            правильных1 = правильных1 + 1;
            счет1.textContent = "Правильных ответов: " + правильных1;
            контейнер1.textContent = "Верно! " + уравнениеНаПлашке1;
        } else {
            контейнер1.textContent = "Попробуй ещё раз. " + уравнениеНаПлашке1;
        }
    });
}

// ---- Начальная отрисовка счетчиков ----

if (счет) {
    счет.textContent = "Правильных ответов: " + правильных;
}

if (счет1) {
    счет1.textContent = "Правильных ответов: " + правильных1;
}
