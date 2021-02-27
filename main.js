//1
// let arr =["a","b","c"];
// alert(arr);

//2
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

//3
// let aarr =["a","b","c","d"];
// let str = aarr[0] + aarr[1];
//  let str1 = aarr[2] + aarr[3];
// let string = aarr[0] + aarr[1] + " , " + aarr[2] + aarr[3];
// alert(string);

//4
// let array =[2,5,3,9];
// let one =array[0] * array[1] ;
// let two = array[2] * array[3];
// let result= one + two ;
// alert(result);

//5 objects
// let obj={
//     a:1,
//     b:2,
//     c:3
// };
//
// alert(obj.c);
// alert(obj["c"]);

//6
// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
//
// alert(obj.Коля + " " + obj.Петя);

//7

// let obj= {
//     1:"mondey",
//     2:"tuesday",
//     3:"wednesday",
//     4:"thursday",
//     5:"friday",
//     6:"saturday",
//     7:"sunday"
// };
// alert(obj["5"]);

//8

// let day = 5;
// alert(obj[day]);

//9
// let arr =[ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// alert(arr[1][0]);

//10
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
//
// alert(obj.js[0]);

//11
//  let arr ={
//      ru:["пн","вт","ср","чт","пт","сб","вс"],
//      en:["mon","tue","wed","thr","fri","sut","sun"]
//  };
 // alert(arr.ru[0] + " " + arr.en[2]);

//12
// let leng = arr.ru;
// let day = 4;
//
// alert(leng[day]);

// LESSON 4 IF.. ELSE && SWITCH-CASE
//1
// let a = -3;

// if (a == 0) {
//     alert("true")
// } else {
//     alert("false")
// }

//2
// if(a > 0 ){
//     alert("true")
//  } else {
//     alert("false")
// }

//3
// if (a<0) {
//     alert(true);
// }else {
//     alert(false);
// }

//4
// let a ="3";
// if (a == "test"){
//     alert("true");
// }else {
//     alert("false");
// }


// 16
// let sifr = 17;
//  if (sifr >=0 && sifr < 10) {
//      alert("первая декада");
//      }
//  if (sifr >=10 && sifr < 20) {
//      alert("вторая декада");
//      }
//  if (sifr >=20 && sifr < 31) {
//      alert("третья декада");
//      }

//FOR WHILE
//1
// for (var i = 1; i <= 100; i++) {
//     document.write(i + '<br>');
// };

//2
// for (var i = 11; i <= 33; i++) {
//     document.write(i + '<br>');
// };

//3 Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i=2; i<= 100; i++) {
//     if (i%2 == 0){
//         document.write(i+'<br>');
//     }
// };


//4 С помощью цикла найдите сумму чисел от 1 до 100.
// let result= 0;
// for (let i=0; i<=100; i++) {
//     result += i;
//
// }
// document.write(result);

//5 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let arr =[1, 2, 3, 4, 5];
// for (let i=0; i < arr.length; i++) {
//     document.write(arr[i]+ " ")
// };


//6 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let result =0 ;
// for (let i=0; i <= arr.length; i++) {
//     result += i;
//
// };
//
// document.write(result);

// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for ( let i in obj ) {
//     document.write(i + " - " + obj[i] + "; ");
// }

//8 Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.

// let obj = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400
// };
// for ( let i in obj ) {
//     document.write(i + " - зарплата " + obj[i] + "$; ");
// }


//9 Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
//
// let arr = [2,5,9,15,0,4];
// for (let i=0; i<arr.length; i++ ) {
//     if (arr[i]>3 && arr[i]< 10){
//         document.write(arr[i] + '<br>');
//     }
// }


//10 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let result = 0;
// let arr=[1,7,12,5,-2,-5,];
// for (let i=0; i<arr.length; i++){
//     if (arr[i]>=0){
//         result += arr[i];
//     }
// }
// document.write(result);

//11 Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
//РЕШЕНИЕ:
// let arr=[1, 2, 5, 9, 4, 13, 4, 10];
// for (let i=0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         alert("ЕСТЬ");
//     }
// }

//12 Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//
// let arr=[10, 20, 30, 50, 235, 3000];
// arr.forEach(em => {
//     if (String(em).search(/(1 | 2 | 5)/) === 0) console.log(em);
// });
