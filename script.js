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
    return множитель(n) + "x";
}

function делитель(n) {
    if (n >= 0) {
        return "" + n;
    } else {
        return "(- " + Math.abs(n) + ")";
    }
}

function дробь(a, b, p) {
const верх = множительX(a) + слагаемое(b);
const низ = делитель(p);
return '<span class="дробь"><span class="числитель">' + верх + '</span><span class="знаменатель">' + низ + '</span></span>';
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

// ---- Третий вид: (ax + b) / p = e ----
function собратьУравнение2() {
    const a = randInt(-12, 12, [0]);
    const p = randInt(-12, 12, [0]);
    const x = randInt(-15, 15);
    const e = randInt(-20, 20);

    const b = p*e - a*x;

    загаданныйКорень2 = x;

    return дробь(a, b, p) + " = " + e;
}

// ---- Четвертый вид: (ax + b) / p + (cx + d) / q = e ----
function собратьУравнение3() {
    const a = randInt(-12, 12, [0]);
    const x = randInt(-15, 15);
    const c = randInt(-20, 20, [0]);
    const m = randInt(-20, 20);
    const n = randInt(-20, 20);

    let p = randInt(-9, 9, [0]);
    let q = randInt(-9, 9, [0]);

    while (a * q + c * p === 0) {
        p = randInt(-9, 9, [0]);
        q = randInt(-9, 9, [0]);
    }
    
    const b = (p * m - a * x);
    const d = (q * n - c * x);
    const e = m + n;


    загаданныйКорень3 = x;

    return дробь(a, b, p) + " + " + дробь(c, d, q) + " = " + e;
}

// ---- Элементы страницы: четыре комплекта ----
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

const контейнер2 = document.getElementById("уравнение2");
const кнопка2 = document.getElementById("новаяЗадача2");
const поле2 = document.getElementById("ответ2");
const проверить2 = document.getElementById("проверить2");
const счет2 = document.getElementById("счет2");

const контейнер3 = document.getElementById("уравнение3");
const кнопка3 = document.getElementById("новаяЗадача3");
const поле3 = document.getElementById("ответ3");
const проверить3 = document.getElementById("проверить3");
const счет3 = document.getElementById("счет3");

// ---- Хранилища: четыре комплекта ----
let загаданныйКорень = 0;
let уравнениеНаПлашке = "";
let правильных = 0;

let загаданныйКорень1 = 0;
let уравнениеНаПлашке1 = "";
let правильных1 = 0;

let загаданныйКорень2 = 0;
let уравнениеНаПлашке2 = "";
let правильных2 = 0;

let загаданныйКорень3 = 0;
let уравнениеНаПлашке3 = "";
let правильных3 = 0;

// ---- Показ уравнений ----
function показатьУравнение() {
    уравнениеНаПлашке = собратьУравнение();
    контейнер.innerHTML = уравнениеНаПлашке;
}

function показатьУравнение1() {
    уравнениеНаПлашке1 = собратьУравнение1();
    контейнер1.innerHTML = уравнениеНаПлашке1;
}

function показатьУравнение2() {
    уравнениеНаПлашке2 = собратьУравнение2();
    контейнер2.innerHTML = уравнениеНаПлашке2;
}

function показатьУравнение3() {
    уравнениеНаПлашке3 = собратьУравнение3();
    контейнер3.innerHTML = уравнениеНаПлашке3;
}

if (контейнер) {
    показатьУравнение();
}

if (контейнер1) {
    показатьУравнение1();
}

if (контейнер2) {
    показатьУравнение2();
}

if (контейнер3) {
    показатьУравнение3();
}

if (кнопка) {
    кнопка.addEventListener("click", показатьУравнение);
}

if (кнопка1) {
    кнопка1.addEventListener("click", показатьУравнение1);
}

if (кнопка2) {
    кнопка2.addEventListener("click", показатьУравнение2);
}

if (кнопка3) {
    кнопка3.addEventListener("click", показатьУравнение3);
}

// ---- Проверка: четыре независимые ----
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

if (поле2 && проверить2) {
    проверить2.addEventListener("click", function () {
        if (поле2.value === "") {
            контейнер2.textContent = "Сначала введи ответ. " + уравнениеНаПлашке2;
            return;
        }

        const ответ = Number(поле2.value);

        if (ответ === загаданныйКорень2) {
            правильных2 = правильных2 + 1;
            счет2.textContent = "Правильных ответов: " + правильных2;
            контейнер2.textContent = "Верно! " + уравнениеНаПлашке2;
        } else {
            контейнер2.textContent = "Попробуй ещё раз. " + уравнениеНаПлашке2;
        }
    });
}

if (поле3 && проверить3) {
    проверить3.addEventListener("click", function () {
        if (поле3.value === "") {
            контейнер3.textContent = "Сначала введи ответ. " + уравнениеНаПлашке3;
            return;
        }

        const ответ = Number(поле3.value);

        if (ответ === загаданныйКорень3) {
            правильных3 = правильных3 + 1;
            счет3.textContent = "Правильных ответов: " + правильных3;
            контейнер3.textContent = "Верно! " + уравнениеНаПлашке3;
        } else {
            контейнер3.textContent = "Попробуй ещё раз. " + уравнениеНаПлашке3;
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

if (счет2) {
    счет2.textContent = "Правильных ответов: " + правильных2;
}

if (счет3) {
    счет3.textContent = "Правильных ответов: " + правильных3;
}