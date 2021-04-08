'use strict';

let money = +prompt("Ваш месячный доход?", 50000);
let income = 'Фриланс';
let deposit = confirm("Есть ли у Вас депозит в банке?");
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?", 12000);
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?", 4500);
let mission = 200000;
let period = 12;

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf (money);
showTypeOf (income);
showTypeOf (deposit);

// console.log("Цель: накопить ", mission, " за ", period, "месяцев(-а)");

console.log(addExpenses.toLowerCase() .split(", "));

function getExpensesMonth (a, b) {
  return a + b;
}
let expence = getExpensesMonth (amount1, amount2);
console.log("Ежемесячные расходы: ", + expence);

function getAccumulatedMonth (a, b) {
  return a-b;
}
let accumulatedMonth = getAccumulatedMonth(money, expence);

function getTargetMonth(a, b) {
  return Math.ceil(a/b);
}
let complete = getTargetMonth(mission, accumulatedMonth);
console.log("Цель будет достигнута через ", complete , "месяцев(-а)");

let budgetDay = Math.floor(accumulatedMonth/30);
console.log("Бюджет на день: ", budgetDay);

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return("У Вас высокий уровень дохода");
  } else if (budgetDay >= 600) {
    return("У Вас средний уровень дохода");
  } else if (budgetDay > 0) {
    return("У Вас низкий уровень дохода");
  } else {
    return("Упс, что-то пошло не так");
  }
};

console.log(getStatusIncome());