'use strict';

// Проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function () {
  do{
    money = prompt("Ваш месячный доход?");
  }
  while(!isNumber(money));
};
start();

let mission = 200000;
let period = 12;
let income = 'Фриланс';
let deposit = confirm("Есть ли у Вас депозит в банке?");
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

let expences = [];
let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expences [i] = prompt ("Введите обязательную статью расходов");
    sum += +prompt ("Во сколько это обойдётся?");
  }
  console.log(expences);
  return sum;
};

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf (money);
showTypeOf (income);
showTypeOf (deposit);

let expencesAmount = getExpensesMonth();
console.log("Ежемесячные расходы: ", + expencesAmount);

// console.log("Цель: накопить ", mission, " за ", period, "месяцев(-а)");

console.log(addExpenses.toLowerCase() .split(", "));

function getAccumulatedMonth (a, b) {
  return a-b;
}
let accumulatedMonth = getAccumulatedMonth(money, expencesAmount);

function getTargetMonth(a, b) {
  let num = Math.ceil(a/b);
  if (num > 0) {
    return (`Цель будет достигнута за: ${num} месяцев (-a)`);
  } else {
    return ("Цель не будет достигнута");
  }
}

console.log(getTargetMonth(mission, accumulatedMonth));

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