// const arr = [1, 4, 2.45, 211, -11]; //207.45
// const arr0 = []; //0
// const arr1 = [122.23]; //122.23
//
//
// function sum(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// }
//
//
// console.log(sum(arr));
// console.log(sum(arr0));
// console.log(sum(arr1));
//
//
// function solution(str) {
//     return str.split("").reverse().join("");
// }
//
// console.log(solution("hello world"));
//
//
// // кварталы года
// function quarterOf(month) {
//     if (month <= 3) {
//         return 1
//     } else if (month <= 6) {
//         return 2
//     } else if (month <= 9) {
//         return 3
//     } else if (month <= 12) {
//         return 4
//     }
// }
//
// console.log(quarterOf(7));
// console.log(quarterOf(3));
// console.log(quarterOf(6));
// console.log(quarterOf(11));
//
//
// // сравнение значений массивов
//
// let a = ["a", "c", "b", "d"];
// let b = ["a", "c", "b", "d"];//16
//
// function checkExam(array1, array2) {
//     let score = 0;
//
//     for (let i = 0; i < array1.length; i++) {
//
//         if (array1[i] === array2[i]) {
//             score += 4;
//         } else if (array2[i] === "") {
//             score += 0
//         } else {
//             score -= 1
//         }
//     }
//
//     if (score < 0) {
//         score = 0
//     }
//     return score
// }
//
// // обратный отсчет
// let num = 11;
//
//
// const reverseSeq = (n) => {
//     let arr=[];
//     for (let i=n; i >= 1; i-- ){
//         arr.push(i);
//     }
//     return arr;
// };
//
// console.log(reverseSeq(num));

// с числа получается сумма всех предыдущих чисел Пример: sum(8)(1+2+3+4+5+6+7+8) = 36 ; sum(2) = 3(1+2)
// const sum = (num) => {
//     let arr = [];
//     for (let i = num; i > 0; i--) {
//         arr.push(i)
//     }
//     return arr.reduce((a, b) => a + b, 0)
// };
// console.log(sum(44));

// const arr = [1, 4, 10];
// НАйти в массиве положительные числа и получить их сумму
// const sumPos = (array) => {
//    return  array.filter(n => n >= 0).reduce((a, b) => a + b, 0)
// };
//
// console.log(sumPos(array));


//Учитывая массив целых чисел, верните новый массив с удвоением каждого значения. Например:[1, 2, 3] -> [2, 4, 6]
// function maps(x){
//
// return x.map(el=> el + el )
// }
// console.log(maps(arr));

// Hапишите мне функцию stringy, которая принимает размер и возвращает строку чередующихся «1» и «0».

    function stringy(size) {
        var str='';
        for( var i=1; i<=size; i++ )
            str+=i%2;
        return str;
    }

console.log(stringy(8));