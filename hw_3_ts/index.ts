// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
//   Тип `Admin` должен включать поля`name`(строка) и
//   `permissions`(массив строк), а тип `User` должен включать
// поля`name`(строка) и`email`(строка).
// Создайте тип`AdminUser`, который объединяет свойства обоих типов,
//   и создайте объект этого типа.

type Admin = {
  name: string;
  permissions: string[];
};
type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: 'Edward',
  permissions: ['admin resours', 'VIP'],
  email: 'edward@gmail.com',
};

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями`make`(строка), `model`(строка),
//   и вложенным объектом`engine`, который имеет поля`type`(строка)
// и`horsepower`(число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

interface ICar {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
}

const Car: ICar = {
  make: 'BMW',
  model: 'X5',
  engine: {
    type: 'Gas',
    horsepower: 100,
  },
  year: 2024,
};

function makeCar(car: ICar): string {
  return `${car.make}, model ${car.model},\ntype: ${car.engine.type}, \nhorsepower:${car.engine.horsepower}, \nyear: ${car.year}`;
}

const car1 = makeCar(Car);
console.log(car1);

// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции`calculateDiscount`, которая принимает
// объект `Product` с полями`name`(строка) и`price`(число), а также
// параметр`discount`(число).
// Функция должна возвращать новую цену продукта с учетом скидки.
type Product = {
  name: string;
  price: number;
};
interface ICalculateDiscount {
  (product: Product, discount: number): number;
}
const calculateDiscount: ICalculateDiscount = (product, discount) => {
  if (product.name === 'BMW')
    return product.price - product.price * (discount / 100);
  return product.price;
};

const product1: Product = { name: 'Tesla', price: 150000 };
const product2: Product = { name: 'BMW', price: 500000 };
const discountedPriceTesla = calculateDiscount(product1, 10);
const discountedPriceBMW = calculateDiscount(product2, 10);
console.log(discountedPriceTesla);
console.log(discountedPriceBMW);

// Задание 4
// Массив объектов и функции
// Создайте интерфейс`Employee`, который включает поля`name`
//   (строка) и`salary`(число).
// Создайте массив объектов`Employee`, затем напишите функцию,
//   которая принимает этот массив и возвращает массив зарплат всех сотрудников.
interface IEmploee {
  position: string;
  name: string;
  salary: number;
}
interface IGetSalary {
  (emp_s: IEmploee[]): string;
}
const AllEmploee: IEmploee[] = [
  { position: 'dev back', name: 'olha', salary: 3500 },
  { position: 'qr', name: 'maha', salary: 3500 },
  { position: 'dev front', name: 'kostia', salary: 3500 },
];

const getEmploeeSalary: IGetSalary = (emp_s) => {
  return emp_s.map((emp) => `${emp.name}: ${emp.salary}$`).join(' , ');
};

console.log(getEmploeeSalary(AllEmploee));

// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс`Student`, который наследует `Person` и добавляет
// поле`grade`(число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит
// полное имя студента и его оценку.

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}
interface IGetStudent {
  (st: IStudent): string;
}
const student: IStudent = {
  firstName: 'Li',
  lastName: 'Shan',
  grade: 98,
};

const printStudent: IGetStudent = (st)=>{
   return `Student Full Name: ${st.firstName} ${st.lastName} \nGrade: ${st.grade}`
}
console.log(printStudent(student))
// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции`concatStrings`, которая принимает
// два параметра: `str1` и`str2`(оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface IConcatStrings{
  (str1:string,str2:string):string
}
const concatStrings: IConcatStrings = (str1,str2) => {
  return `${str1}-${str2}`
}


console.log(concatStrings('BlaBla', 'BalaBala'))