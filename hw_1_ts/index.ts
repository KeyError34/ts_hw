// Задание 1
// Функция приветствия
// Напишите функцию`greetUser`, которая принимает имя
// пользователя(строка) и выводит приветственное сообщение в
// консоль: `"Привет, <name>!"`.Используйте строгую типизацию.

function greetUser(name: string): string {
  return `Hello ${name}`;
}

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс`Person`, который описывает человека
// с полями`name`, `age`, и`city`.
// Напишите функцию`printPersonInfo`, которая принимает
// объект типа `Person` и выводит информацию о человеке в
// формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

interface Person {
  name: string;
  age: 25;
  city: string;
}
function printPersonInfo(obj: Person): string {
  return `Name ${obj.name}, Age ${obj.age}, city ${obj.city}`;
}
// Задание 3
// Простая типизация для числового параметра
// Напишите функцию`squareNumber`, которая принимает число
// и возвращает его квадрат.Используйте строгую типизацию.
function squareNumber(num: number): number {
  return num * num;
}

// Задание 4
// Типизация функции с boolean
// Напишите функцию`isEven`, которая принимает число и
// возвращает`true`, если число четное, и`false`, если нечетное.
// Используйте строгую типизацию.

function isEven(num: number): boolean {
  return num % 2 === 0;
}


console.log(isEven(4)); 
console.log(isEven(7)); 

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс`Student`, который описывает студента
// с полями`name`(строка) и`grade`(число).
// Напишите функцию`printStudentInfo`, которая принимает
// объект типа `Student` и выводит информацию о студенте в
// формате: `"Студент: <name>, Оценка: <grade>"`.

interface Student {
  name: string;
  grade: 25;
}
function printStudentInfo(obj: Student): string {
  return `Name ${obj.name}, Grade ${obj.grade}`;
}
// Задание 6
// Функция с типом `void`
// Напишите функцию`logMessage`, которая принимает строку и
// выводит её в консоль без возвращаемого значения.Используйте тип`void`.

function logMessage(str:string):void {
  console.log('this is a str')
}
