/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».*/

// let name = prompt('Ваше имя?');
// let age = prompt('Ваш возраст?');
// let city = prompt('Ваш город?');
// let phone = prompt('Ваш телефон?');
// let email = prompt('Ваша почта?');
// let company = prompt('В какой компании Вы работаете?');
// console. log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city}. Мой телефон  ${phone}. Моя почта ${email}. Я работаю в компании ${company}.`);


/*Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».*/

// let year = 2024 - age;
// console.log(`${name} родился в ${year} году.`);

/*Если возраст:
 - от 0 до 12 - вывести <name> is a child
 - с 12 до 18 - вывести <name> is a teenager
 иначе
 - вывести Steve is an adult*/

//  (age>=0 && age<=12)       ? console.log(`${name}  is a child`)
//  : (age>=13 && age<=18)    ? console.log(`${name} is a teenager`)
//  : console.log(`${name} is an adult`);


//  if (age >= 0 && age <= 12) {

//      console.log(`${name} is a child`);

//  } else if (age >= 13 && age <= 18) {

//      console.log(`${name} is a teenager`);

//  } else {

//      console.log(`${name} is an adult`);

//  }


//  switch (true) {
//      case (age >= 0 && age <= 12):
//          console.log(`${name} is a child`);
//      break;
//      case (age >= 13 && age <= 18):
//          console.log(`${name} is a teenager`);
//      break;
//      default:
//          console.log(`${name} is an adult`);
//  }


/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

// let num = "789654";
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);
// console.log(num[5]);


// let sum= +num[0] + num[1] + num[2]
// let sum2= +num[3] + num[4] + num[5]

// if (sum == sum2) {
//     console.log('Да')
//  } else {
//      console.log('Нет');
//  }

 /*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.*/

// {let a = 7;
// if (a > 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// }
// /*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
// квадрат. */

// let a = 10,
//     b = 2;
// let c = a + b;
// console.log(a + b, a - b, a * b, a / b);
// if (c > 1) {
//     console.log( c * c );
// }


/*Если переменная a (значение 10) больше 2 и меньше 11, или переменная b (значение 2) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.*/

// if (a > 2 && a < 11) {
//     console.log('Верно');
// }else {
//     console.log('Неверно');
// }
// if (b >= 6 && b < 14) {
//     console.log('Верно');
// }else {
//     console.log('Неверно');
// }


// if (a > 2 && a < 11 || b >= 6 && b < 14 ) {
//     console.log('Верно');
// }else {
//     console.log('Неверно');
// }


// (a >= 2 && a < 11 || b >= 6 && b < 14) ? console.log('Верно')
//                                         :console.log('Неверно');




/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую).*/

// let n = 21;
// if (n >= 0 && n <= 15) {
//     console.log('Первая четверть часа');
// }
// else if (n > 15 && n <= 30) {
//     console.log('Вторая четверть часа');
// }
// else if (n > 30 && n <= 44) {
//     console.log('Третья четверть часа');
// }
// else{
//     console.log('Четвёртая четверть часа');
// }


// switch (n){
//     case(n >= 0 && n <= 15) :
//         console.log('Первая четверть часа');
//     break;

//     case(n > 15 && n <= 30) :
//         console.log('Вторая четверть часа');
//     break;

//     case(n > 30 && n <= 45) :
//         console.log('Третья четверть часа');
//     break;
//     case(n > 45 && n <= 59) :
//         console.log('Четвёртая четверть часа');
//     break;
//     default :
//         console.log('Не знаю');
// }
/*Пользователь вводит два числа. Найти и вывести (в alert) максимальное из двух чисел. Учтите вариант равенства чисел*/

// let num3 = prompt('Введите число');
// let num4 = prompt('Введите число');

// if( +num3 > +num4 ) {
//     alert(num3);
// } else if (+num4 > +num3){
//     alert (num4);
// } else {
//     alert ('Числа равны');
// }

/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).*/

// let day = 7;

// if (day <= 10) {
//     console.log('Первая декада месяца');
// } else if (day >= 11 && day <= 20) {
//     console.log('Вторая декада месяца');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада месяца');
// } else {
//     console.log('Нет такой декады');
// }



/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.*/
// {
//     let day = prompt('Введите количество дней');
//     let year = day / 365;
//     let mounts = day / 30;
//     let week = day / 7;
//     let hour = day * 24;
//     let minute = hour *60;
//     let second = minute * 60;

//     if(year < 1 && mounts < 1 && week < 1) {
//         console.log(`Это меньше года, меньше месяца, меньше недели, ${hour} часов, ${minute} минут,${second} секунд.`);
//     }else if(year < 1 && mounts >= 1 && week >= 1) {
//         console.log(`Это меньше года, месяцев:${mounts} ,недель:${week}, ${hour} часов, ${minute} минут,${second} секунд.`);
//     }else if(year < 1 && mounts < 1 && week >= 1){
//         console.log(`Это меньше года, меньше месяца, недель: ${week}, ${hour} часов, ${minute} минут,${second} секунд.`);
//     } else {
//         console.log(`Лет: ${year}, месяцев:${mounts} ,недель:${week}, ${hour} часов, ${minute} минут,${second} секунд.`);
//     }
// }


/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch.*/

// let newday = prompt('Введите день');
// if (newday <= 31) {
//     console.log('Первый месяц');
// } else if (newday >= 32 && newday <= 60) {
//     console.log('Второй месяц');
// } else if (newday >= 61 && newday <= 91) {
//     console.log('Третий месяц');
// } else if (newday >= 91 && newday <= 121) {
//     console.log('Четвёртый месяц');
// } else if (newday>=121 && newday<=152) {
//     console.log('Пятый месяц');
// } else if (newday>=152 && newday<=182) {
//     console.log('Шестой месяц');
// } else if (newday>=182 && newday<=213) {
//     console.log('Седьмой месяц');
// } else if (newday>=213 && newday<=244) {
//     console.log('Восьмой месяц');
// } else if (newday>=244 && newday<=274) {
//     console.log('Девятый месяц');
// } else if (newday>=274 && newday<=305) {
//     console.log('Десятый месяц');
// } else if (newday>=305 && newday<=335) {
//     console.log('Одиннадцатый месяц');
// } else {
//     console.log('Двенадцатый месяц');
// }

// switch (true) {
//     case (newday >= 0 && newday <= 60 || newday >=336 && newday <= 365) :
//         console.log('Зима');
//     break;

//     case (newday >= 61 && newday <= 152) :
//         console.log('Весна');
//     break;

//     case (newday >= 153 && newday <= 244) :
//         console.log('Лето');
//     break;

//     case (newday >= 245 && newday <= 335) :
//         console.log('Осень');
//     break;

//     default :
//         console.log('Таких значаний нет')
// }
/*Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert)*/

// let one = prompt('Введите число 1');
// let two = prompt ('Введите число 2');
// let result = one * two;
// let multiply = prompt('Введите произведение двух чисел')

// if (result == multiply) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

/*Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’*/

// let str = 'abcde';
// console.log(str[0]);

// switch(true) {
//     case (str[0] == 'a') :
//         console.log("Да");
//     break;

//     default :
//         console.log("Нет")
// }

/*У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится.
Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.*/

// let w = prompt('Одна сторона треугольника');
// let m = prompt('Вторая сторона треугольника');
// let k = prompt('Третья сторона треугольника');
// let r = w + m;
// let r1 = w + k;
// let r2 = m + k;

// if(r > k || r1 > m || r2 > w) {
//     console.log('Треугольник может существовать');
// } else {
//     console.log ('Тругольник не может существовать');
// }
