let money = +prompt("Ваш месячный доход?");
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");
let mission = 200000;
let period = 12;

console.log("Цель: накопить ", mission, " за ", period, "месяцев(-а)");

console.log(addExpenses.toLowerCase() .split(", "));

let budgetMonth = money-(amount1+amount2);
console.log("Бюджет на месяц: ", budgetMonth);
let budgetDay = Math.floor(budgetMonth/30);
console.log("Бюджет на день: ", budgetDay);
let complete = Math.ceil(mission/budgetMonth);
console.log("Цель будет достигнута через ", complete , "месяцев(-а)");

if (budgetDay >= 1200) {
  console.log("У Вас высокий уровень дохода");
} else if (budgetDay >= 600) {
  console.log("У Вас средний уровень дохода");
} else if (budgetDay >= 0) {
  console.log("У Вас низкий уровень дохода");
} else {
  console.log("Упс, что-то пошло не так");
}