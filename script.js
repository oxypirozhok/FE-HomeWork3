'use strict';

//1)В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.

// let word = 'Paragraf';
// let newWord = '';
// for (let i = word.length - 1; i >= 0; i--){ 
//     newWord += word[i];   
// }
// alert (newWord);

// 2) Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// Палиндром - слово, одинаково читающееся как слева направо, так и справа налево.

// function polindrom(string){
//     let reversString = '';
//     for (let i = string.length - 1; i >= 0; i--){ 
//         reversString += string[i];
//         }
//         if (string === reversString){
//             console.log ('Polindrom');
//         }else{
//             console.log ('This is not Polindrom');
//         }
// }
//     polindrom("abrarba");
//     polindrom('agmeicbvdbvbvd');

// 3)Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0;
// for (let i = 0; i <= 50; i+=5){
//      sum += i;
// }
// console.log(sum);

// 4)Написать цикл, который выводит только названия товаров
// const product = [
//          {
//              title: 'Nike',
//              prise: 300,
//              type: 'shoe',
//          },
//          {
//              title: 'Puma',
//              prise: 450,
//              type: 'shoe',
//          },
//          {
//              title: 'Chanel',
//              prise: 1200,
//              type: 'bag',
//          },
//          {
//              title: 'BMW',
//              prise: 250000,
//              type: 'car',
//          },
//      ];

//      for(let key in product){
//           console.log (product[key].title);
//      }


// 5)Написать цикл, который выводит для каждого товара стоку по маске “<название> (<цена>)”
// const product = [
//          {
//              title: 'Nike',
//              prise: 300,
//              type: 'shoe',
//          },
//          {
//              title: 'Puma',
//              prise: 450,
//              type: 'shoe',
//          },
//          {
//              title: 'Chanel',
//              prise: 1200,
//              type: 'bag',
//          },
//          {
//              title: 'BMW',
//              prise: 250000,
//              type: 'car',
//          },
//      ];

//      for (let key in product){
//           let item = `<${product[key].title}> (<${product[key].prise}>)`;

//           console.log (item);
//      }

// 6) Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
//   const product = [
//     {
//         title: 'Nike',
//         prise: 300,
//         type: 'shoe',
//     },
//     {
//         title: 'Puma',
//         prise: 450,
//         type: 'shoe',
//     },
//     {
//         title: 'Chanel',
//         prise: 1200,
//         type: 'bag',
//     },
//     {
//         title: 'BMW',
//         prise: 250000,
//         type: 'car',
//     },
// ];


// function checkExpensivePrise(arr){
//     let maxPrise = arr[0];
//     for(let key in arr){
        
//       if (arr[key].prise > maxPrise.prise){ 
//         maxPrise = arr[key];
//     }else{
//         continue;
//     }
     
//     }console.log(maxPrise);
// }

// checkExpensivePrise(product);