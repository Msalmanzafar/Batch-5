
// var randomNumbers = Math.random()

// console.log(randomNumbers)

// for (var i = 0; i < 10; i++) {
//    console.log(Math.random() + i) 
//    console.log(Math.ceil(Math.random() + i)) 
// }

var rgb = Math.ceil(Math.random() * 255) + "," +
    Math.ceil(Math.random() * 255) + "," +
    Math.ceil(Math.random() * 255)

console.log(rgb)
console.log(document)
var h1 = document.getElementById('h1');
console.log(h1)
console.log(h1.style)
h1.style.backgroundColor = "darkcyan"
console.log("rgb(" + rgb + ")")
h1.style.backgroundColor = "rgb(" + rgb + ")"

// var num = Math.random() * 100;

// // Math.floor
// console.log(num)
// console.log(Math.floor(num))

// // Math.ceil
// console.log(num)
// console.log(Math.ceil(num))


// var userName = prompt("enter your name")

// console.log(userName)
// console.log(typeof(userName))

// var first = prompt('enter first number for addition' )
// var second = prompt('enter second number for addition' )

// console.log(parseInt(first) + Number(second))
// console.log(typeof(userAge))
// console.log(parseInt(userAge))

// var num1 = prompt("Enter your First Number")
// var num2 = prompt("Enter your Second Number")
// var option = prompt("Enter your Operation value")

// num1 = parseInt(num1)
// num2 = parseInt(num2)

// option = parseInt(option)
// console.log(option)
// console.log(num1 + option + num2)

// if(option === '*'){
//     console.log(num1 * num2)
// }
