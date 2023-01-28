let password;
password = prompt(`Введите пароль.`);

if (password === 'Sova20') {
    console.log('Пароль введен верно');    
} else{
    console.log('Пароль введен не правильно');
}

let c = prompt('Введите число');
c <= 0;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else{
    console.log('Не верно');
}

//Задание  3


let d = 10;
let e = 50;
if (d > 100 || e > 100){
    console.log('True');
} else{
    console.log('False');
}

//Задание 4

let a = Number(2);
let b = Number(3);
let Result = a + b;
alert(Result);

//Задание 5

let monthNumber = Number(prompt("Введите номер месяца"));
switch(monthNumber){
    case 12:
    case 1:
    case 2: 
    console.log ("Зима"); 
    break;
    case 3:
    case 4:
    case 5: 
    console.log ("Весна"); 
    break;
    case 6:
    case 7:
    case 8: 
    console.log ("Лето"); 
    break;
    case 9:
    case 10:
    case 11: 
    console.log ("Осень"); 
    break;   
}
if(monthNumber > 12){
    console.log(false);
}

//Задание 7

let NumberAny = Number(prompt("Пожалуйста введите любое число"));

if (NumberAny % 2 === 0){
    alert("Четное")
}
else{
    alert("Не четное");
}