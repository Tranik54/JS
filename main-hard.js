// Part 1

let lang = prompt("Введите язык 'en' или 'ru'");
let daysRu = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
let daysEn = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";

if (lang === 'ru') {
  console.log(daysRu);
} else if (lang === 'en') {
  console.log(daysEn);
} else {
  console.log("Вы ввели некорректное значение");
}

switch (lang) {
  case 'ru':
    console.log(daysRu);
    break;
  case 'en':
    console.log(daysEn);
    break;
  default:
    console.log("Вы ввели некорректное значение");
}

let array = {
  'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  'en':['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
};
console.log(array[lang]);

// Part 2

let namePerson = prompt("Введите имя:");

console.log((namePerson === 'Артём') ? "Директор" : (namePerson === 'Максим') ? "Преподаватель" : "Студент");