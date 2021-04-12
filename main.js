'use strict';

// Проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// Генерация случайного числа
let getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function main() {
  let number = getRandomInt(100);
  function round() {
      let num = prompt("Угадай число от 1 до 100");
      if (num === null) {
          alert("До свидания!");
          return;
      }
      if (isNumber(num)) {
          if (num > number) {
              alert("Загаданное число меньше");
              round();
          } else if (num < number) {
              alert("Загаданное число больше");
              round();
          } else {
              if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                main();
              } else {
                alert("До свидания!");
                return;
              }
          }
      } else {
          alert("Введи число!");
          round();
      }
  }
  round();
}

main();