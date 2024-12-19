// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы
// с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно,
// используя`await`,и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.
interface IPromice {
  execude(): Promise<string>;
}

abstract class BasePromise {
  protected abstract delay: number;
  protected abstract message: string;
  async execude(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.message), this.delay);
    });
  }
}

class FirstPromise extends BasePromise {
  protected delay = 1000;
  protected message = '1st promise resolved';
}
class SecondPromise extends BasePromise {
  protected delay = 2000;
  protected message = '2d promise resolved';
}
class ThirdPromise extends BasePromise {
  protected delay = 1500;
  protected message = '3d promise resolved';
}

class PromiseHandler {
  private promises: IPromice[];
  constructor(promises: IPromice[]) {
    this.promises = promises;
  }
  async executeChain(): Promise<void> {
    for (const promise of this.promises) {
      const res = await promise.execude();
      console.log(res);
    }
  }
}

const promises: IPromice[] = [
  new FirstPromise(),
  new SecondPromise(),
  new ThirdPromise(),
];
const handler: PromiseHandler = new PromiseHandler(promises);
handler.executeChain().then(() => {
  console.log('end');
});
// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться(например,
// преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций
// параллельно и вывода всех результатов.

interface IString {
  process(input: string): Promise<string>;
}

abstract class BaseStringProcess implements IString {
  protected abstract delay: number;
  async process(input: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(input.toUpperCase());
      }, this.delay);
    });
  }
}

class UpperCase extends BaseStringProcess {
  protected delay = 4600;
}

class StringHandler {
  private processor: IString;
  constructor(processor: IString) {
    this.processor = processor;
  }
  async processStrings(inputs: string[]): Promise<string[]> {
    const promises = inputs.map((input) => this.processor.process(input));
    return Promise.all(promises);
  }
}
async function main() {
  const inputStrings = ['hello', 'world', 'typescript', 'async'];
  const handler = new StringHandler(new UpperCase());
  const results = await handler.processStrings(inputStrings);
  console.log(results);
}

main();

// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно
// с помощью`Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`.
// Обработайте эту ошибку с использованием `try/catch` и
// выведите соответствующее сообщение.

class ErrorPromise extends BasePromise {
  protected delay = 1500;
  protected message = 'This promise will reject';
  async execude(): Promise<string> {
    return new Promise((_, reject) => {
      setTimeout(() => reject('Error: This promise failed!'), this.delay);
    });
  }
}
async function executePromisesWithErrorHandling() {
  const promises = [
    new FirstPromise(),
    new SecondPromise(),
    new ErrorPromise(),
  ];

  try {
    const results = await Promise.all(promises.map((p) => p.execude())); 
    console.log('All promises resolved:', results);
  } catch (error) {
    console.error('Error occurred during promise execution:', error);
  }
}

executePromisesWithErrorHandling();
// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться
// через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов
// и вывода результатов в консоль.

async function executePromisesWithDynamicDelay(
  delays: number[]
): Promise<void> {
  const promises = delays.map((delay) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Promise resolved after ${delay} ms`);
      }, delay);
    });
  });

  try {
    const results = await Promise.all(promises);
    console.log('All promises resolved:', results);
  } catch (error) {
    console.error('Error occurred during promise execution:', error);
  }
}

const delays = [1000, 2000, 1500, 500];
executePromisesWithDynamicDelay(delays);
