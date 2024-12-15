// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс`Animal`, который содержит свойства
//   `name`(имя животного) и`species`(вид животного).
// Добавьте метод`sound()`, который выводит в
// консоль`"The animal makes a sound"`.
// Затем создайте класс - наследник`Dog`, который
// добавляет новое свойство`breed`(порода собаки) и переопределяет
// метод`sound()`, чтобы он выводил`"The dog barks"`.

class Animal {
  constructor(public name: string, public species: string) {
    this.name = name;
    this.species = species;
  }
  sound(): void{
    console.log(`The animal ${this.species} makes a sound`);
  };
}
class Dog extends Animal {
  constructor(name: string, species: string, public breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    super.sound()
    console.log(`The ${this.name} barks`);
  }
}
const animal = new Animal("Some Animal", "Unknown");
animal.sound(); 

const dog = new Dog("Rex", "Dog", "Golden Retriever");
dog.sound(); 
// Задание 2
// Статическое свойство для учета всех книг
// Создайте класс`Library`, который имеет статическое
// свойство`totalBooks`(общее количество книг).
// При каждом добавлении книги это свойство должно увеличиваться.
// В классе также должен быть метод`addBook()`,
// который увеличивает счетчик книг.
// Создайте несколько объектов класса и проверьте,
// как изменяется общее количество книг.

class Library {
  static totalBooks = 0;
  addBook(): void{
    Library.totalBooks++
  }
}
const library1 = new Library();
const library2 = new Library();

library1.addBook();
library1.addBook();
library2.addBook();

console.log(Library.totalBooks);

// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс`Vehicle`, который содержит
// свойства`make`(марка) и`model`(модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс - наследник`Motorcycle`, который 
// добавляет новое свойство`type`(тип мотоцикла) и переопределяет 
// конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

class Vehicle{
  constructor(public make: string, public model:string) {
    this.make = make
    this.model =model
  }
}

class Motorcycle extends Vehicle {
  constructor( make: string, model: string, public type: string) {
    super(make, model)
    this.type = type
  }
}
const vehicle = new Vehicle("Toyota", "Corolla");
console.log(vehicle.make); 
console.log(vehicle.model);

const motorcycle = new Motorcycle("Harley-Davidson", "Iron 883", "Cruiser");
console.log(motorcycle.make); 
console.log(motorcycle.model); 
console.log(motorcycle.type); 