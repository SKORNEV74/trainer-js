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

Задание 1

Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.

Задание 2

Напишите программу, которая много раз запрашивает у пользователя число, пока он не введет 0 — тогда выводится сумма этих чисел.

Задание 3

Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д. Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное. Когда пользователь введёт больше 100, напишите "Спасибо!" и остановите программу.