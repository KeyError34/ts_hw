// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и`Cat`, которые наследуют`Animal`
// и реализуют метод `makeSound()` по - своему(`Dog` должен возвращать
//   "Bark", а`Cat` — "Meow").
// Создайте массив типа`Animal[]`, включающий объекты `Dog` и`Cat`,
//   и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  constructor(public name: string) {}
  abstract makeSound(): string;

  getInfo(): string {
    return `${this.name} is a ${this.constructor.name} say`;
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): string {
    return `Bark`;
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): string {
    return `Meow`;
  }
}
const animals: Animal[] = [new Dog('Ruby'), new Cat('Shkoda')];
animals.forEach((animal) =>
  console.log(`${animal.getInfo()} - ${animal.makeSound()}.`)
);
// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс`ColoredShape`, который наследует
// `Shape`(из задания 4 на уроке) и добавляет абстрактное поле`color`.
// Реализуйте классы `ColoredCircle` и`ColoredRectangle`, которые
// наследуют`ColoredShape`, задают`color` и реализуют метод`calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  constructor(public color: string) {
    super();
  }
  abstract getColor(): string;
}

class ColoredCircle extends ColoredShape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getColor(): string {
    return this.color;
  }
}

class ColoredRectangle extends ColoredShape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  getColor(): string {
    return this.color;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle('Red', 5),
  new ColoredRectangle('Blue', 10, 20),
];

shapes.forEach((shape) => {
  console.log(`Color: ${shape.getColor()}, Area: ${shape.calculateArea()}`);
});

// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными
// методами `turnOn()` и`turnOff()`.
// Затем создайте классы `WashingMachine` и`Refrigerator`,
// которые наследуют `Appliance` и реализуют методы`turnOn()`
// и`turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа`Appliance[]`, добавьте в него объекты
// `WashingMachine` и`Refrigerator`, и вызовите методы`turnOn()`
// и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing Machine is now running.");
  }

  turnOff(): void {
    console.log("Washing Machine is turned off.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is cooling.");
  }

  turnOff(): void {
    console.log("Refrigerator is turned off.");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach(appliance => {
  appliance.turnOn();
  appliance.turnOff();
});

// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами
// `deposit(amount: number)` и`withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и`CheckingAccount`,
// которые наследуют`Account`.
// В классе `SavingsAccount` добавьте логику для начисления
// процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств
// с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  protected balance: number = 0;

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number = 0.03;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}

class CheckingAccount extends Account {
  private fee: number = 5;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance - amount - this.fee >= 0) {
      this.balance -= (amount + this.fee);
    } else {
      console.log("Insufficient funds for withdrawal.");
    }
  }
}

const savings = new SavingsAccount();
savings.deposit(1000);
savings.addInterest();
console.log(`Savings balance: ${savings.getBalance()}`);

const checking = new CheckingAccount();
checking.deposit(1000);
checking.withdraw(200);
console.log(`Checking balance: ${checking.getBalance()}`);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и`Video`, которые наследуют
// `Media` и реализуют метод `play()` по - своему(например, `Audio`
// выводит "Playing audio", а`Video` — "Playing video").
// Создайте массив типа`Media[]`, включающий объекты`Audio`
// и`Video`, и вызовите метод `play()` для каждого элемента массива.


abstract class Media {
  abstract play(): void;
}

class Audio_ extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaFiles: Media[] = [new Audio_(), new Video()];

mediaFiles.forEach(media => {
  media.play();
});