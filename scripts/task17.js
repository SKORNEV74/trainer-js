const sayHello = (name = 'Ivan', surname = 'Ivanov', age = 10, greeting = 'Hi') =>
    `${greeting}, ${name} ${surname}, тебе ${age} лет`;

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );