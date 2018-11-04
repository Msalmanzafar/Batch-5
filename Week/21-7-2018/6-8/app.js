// var random = Math.random()

// console.log(random)

// for (var i = 0; i < 20; i++) {
//     console.log(Math.ceil(Math.random() + i))
// }

var rgb = Math.ceil(Math.random().toFixed(3) * 255) 
+ ',' + Math.ceil(Math.random().toFixed(3) * 255)
+ ',' + Math.ceil(Math.random().toFixed(3) * 255)

console.log(rgb)
console.log(document)
var h1 = document.getElementById('h1')
console.log(h1)
console.log(h1.style)
// h1.style.backgroundColor = 'rgb(123,123,98)'
h1.style.backgroundColor = 'rgb('+ rgb +')'


// var userName = prompt('enter you name')

// console.log(userName)
// console.log(typeof(userName))

// var age = prompt("user age");

// age = parseInt(age)

// console.log(age)
// console.log(typeof(age))

// var first = prompt("Enter your first number")
// var second = prompt("Enter your second number")
// var opt = prompt("Enter your option to operate")
// console.log(first + second)

// first = parseInt(first)
// second = parseInt(second)

// console.log(first +opt+ second)

// if(opt === '*'){
//     console.log(first * second)
// }