// console.log("hello World");
// alert('me');
// document.write("this is document write")
// console.warn('correct it')
// console.error('this is an error')
// console.clear()


// JavaScript Variables
// multi line comment
/*
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);
*/

// // data types in JavaScript
// // string
// var str1 = "This is a string";
// var str2 = "This is also a string";
// //number
// var number1 = 34;
// var number2 = 56;

// //objects
// var marks = {
//     ravi:34,
//     shubham:78,
//     harry:99.997
// }
// console.log(marks);

// //boolean
// var a = true
// var b = false
// console.log(a,b)

// //undefined
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// //primitive data types - undefined , null , number , string , boolean , symbol
// // reference data types - Arrays and objects

// var arr = [1,2,3,4,5]
// console.log(arr);
// console.log(arr[0])

// var ar = ['kavin',1,2,3,4,5,5]
// console.log(ar);
// console.log(ar[0])

// Operators in JS

// var a = 34;
// var b = 56;
// console.log(a+b);
// console.log(a-b)

//comparison operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x < y)
// console.log(y <= x)
// console.log(x != y);

// logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// logical not
// console.log(!false)
// console.log(!true)

// function avg(a,b){
//     return (a + b) / 2;
// }

// c = avg(4,6);
// console.log(c)

// var age = 45;
// if (age > 50){
//     console.log('you are an adult');
// }
// else if(age > 18){
//     console.log('you are not a kid');
// }
// else{
//     console.log('you are a kid');
// }


// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// for(var i = 0;i<arr.length;i++){
//     if(i == 2){
//         break;
//     }
//     console.log(arr[i])
// }

// for(var i = 0;i<arr.length;i++){
//     if(i == 2){
//         continue;
//     }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


// let j = 0;
// do {
//     console.log(arr[j]);
//     j += 1;
// } while (j < arr.length);


// let myArr = ['Fan','Camera',34,null,undefined,true];
// //Array methods

// console.log(myArr.length);
// // myArr.pop();
// // myArr.push('harry');
// // myArr.shift();
// myArr.unshift('Harry');
// console.log(myArr);

// String methods

// let m = "Harry is a good boy";

// console.log(m.length);
// console.log(m.indexOf('Harry'));
// console.log(m.lastIndexOf('Harry'));
// console.log(m.slice(1,4))

// d = m.replace('Harry','Rohan');
// console.log(m);
// console.log(d);

// let myDate = new Date();
// console.log(myDate);


//DOM Manipulation

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container')
console.log(elemClass);
elemClass[0].style.background = 'yellow';
elemClass[0].classList.add('bg-primary')





 










