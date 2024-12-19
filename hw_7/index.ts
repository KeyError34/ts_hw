// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.
import { StringUtils } from "./stringUtils";
class StringTester {
  test() {
    const example = 'hello world from typescript';
    console.log(StringUtils.capitalize(example)); 
    console.log(StringUtils.reverseStr(example)); 
  }
}

const tester = new StringTester();
tester.test();


// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи 
// по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей 
// по кредиту и налога на примерных данных.
import { Finance } from "./finance";
class FinanceTester {
  testLoanCalculator() {
    const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(100000, 5, 60);
    console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
  }

  testTaxCalculator() {
    const tax = Finance.TaxCalculator.calculateTax(50000, 20);
    console.log(`Tax Amount: ${tax}`);
  }
}

const test = new FinanceTester();
test.testLoanCalculator();
test.testTaxCalculator();
// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл`userManagement.ts`, в котором определите
// пространство имен`UserManagement`.
// Внутри него создайте вложенное пространство имен`Admin`.
//   Внутри `Admin` создайте класс`AdminUser`, который будет иметь
//   свойства для имени, email и прав доступа(например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора
// и изменения его прав.

import { UserManagement } from './userManagement';

class UserTester {
  testAdminUser() {
    const admin = new UserManagement.Admin.AdminUser("John Doe", "john@example.com");
    console.log(`Initial Access: ${admin.isSuperAdmin}`); 
    admin.changeAccess(true)
    console.log(`Updated Access: ${admin.isSuperAdmin}`);
  }
}

const tester2 = new UserTester();
tester2.testAdminUser();

// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи
// до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.
import { SequenceUtils } from './sequenceUtils';

class SequenceTester {
  testFibonacci() {
    console.log(SequenceUtils.generateFibonacci(100)); 
  }

  testPrimeNumbers() {
    console.log(SequenceUtils.generatePrimeNumbers(50)); 
  }
}

const tester3 = new SequenceTester();
tester3.testFibonacci();
tester3.testPrimeNumbers();