Задание 1

Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.

Задание 2

Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту. Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt и ответить: {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.
img
Формулы перевода шкал температур

Задание 3

Перепишите данную математическую формулу, используя JavaScript. Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение Y в качестве ответа. Обратите внимание на приоритет операций (важно правильно расставить скобки).
В качестве проверки: при X = 10 программа должна вывести Y = 12.5344.

Задание 4

Оператор typeof в JavaScript возвращает строку с типом данных переданного в него значения. Эта строка начинается с маленькой буквы. Например: typeof 123 вернёт строку 'number', а typeof undefined вернёт строку 'undefined'.

Все возможные значения typeof: 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'.

ВНИМАНИЕ! Из-за особенностей JavaScript typeof null вернёт 'object'. Запомните это и учтите при выполнении задания.
Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

Исходный код:

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'SOME'; // false, а нужно чтобы все были true
ct = typeof c === 'SOME';
dt = typeof d === 'SOME';
et = typeof e === 'SOME';
ft = typeof f === 'SOME';
gt = typeof g === 'SOME';
ht = typeof h === 'SOME';
it = typeof i === 'SOME';
jt = typeof j === 'SOME';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

Задание 5

Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение. Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let. И никогда не используйте var.
Исходный код:

NDS = 0.20
NDFL = 0.13
EXCISE = 0.1
RENT = 40000
FOOD = 15000
OTHER = 15000
MY_SALARY = 120000

ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')

Задание 6

Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!" или "Это не прямоугольный треугольник!". Используйте if/else для проверки условия.

Задание 7

Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, используйте if/else/else if. Попытайтесь не использовать &&.

Задание 8

Напишите программу, которая запрашивает у пользователя число N и отвечает "Число {N} четное!" или "Число {N} нечетное!"
Например: 3 → Число 3 нечетное!

Задание 9

Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.

Задание 10

Напишите программу, которая много раз запрашивает у пользователя число, пока он не введет 0 — тогда выводится сумма этих чисел.

Задание 11

Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д. Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное. Когда пользователь введёт больше 100, напишите "Спасибо!" и остановите программу.

Задание 12

Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

Задание 13

Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

Пояснение: например, getPercents(30, 200) должно вернуть 60.

Задание 14

Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

Задание 15

Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.
Исходный код:

// Функции должны принимать аргументы.

function createAdder() {
return function addA() {
return 5;
}
}

const add5 = createAdder(5);
alert( add5(5) ) // Должно получиться 10
alert( add5(12) ) // Должно получиться 17

Задание 16

Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

Задание 17

Напишите функцию sayHello(name, surname, age, greeting), которая принимает в качестве аргументов имя, фамилию, возраст и приветствие. Каждый аргумент должен иметь дефолтное значение, функция должна быть стрелочной и не иметь ключевого слова return.
Например, при вызове sayHello('Дима') функция должна вернуть строку: "Привет, Дима Иванов, тебе 10 лет", а при вызове sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') функция должна вернуть строку: "Здравствуйте, Евгений Петров, тебе 25 лет". А при вызове без аргументов она должна вернуть: "Привет, Иван Иванов, тебе 10 лет".

Исходный код:

const sayHello = () => 'Привет, Иван Иванов, тебе 10 лет'

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );

Задание 18

Это задание повторяет предыдущее, но для его решения необходимо использовать шаблонные строки.
Исходный код:

const sayHello = (
name = 'Иван',
surname = 'Иванов',
age = 10,
greeting = 'Привет, ',
) => (
greeting + name + ' ' + surname + ', тебе ' + age + ' лет.'
)

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );