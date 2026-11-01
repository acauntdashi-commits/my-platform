console.log("Давай решать");

const a = Math.floor(Math.random() * 11); // случайное целое от 0 до 10
const b = Math.floor(Math.random() * (11 - a)); // случайное целое от 0 до 10
let c = a + b;

console.log(`${a} + ${b} = ${c}`); // должно вывести рандомное a + b = <=10