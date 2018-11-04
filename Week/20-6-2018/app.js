
// var myCustomers = [
//     "Rehan",
//     "Bilal",
//     "Farhan",
//     "Hussam"

// ]

// console.log(myCustomers,"myCustomers")

// document.getElementById("list").innerHTML = 
// "<li>"+ myCustomers[3] + "</li>"

// for(var i = 0; i < myCustomers.length; i++ ){
//     console.log(myCustomers[i] + " " + "index" + i)

//     document.getElementById("list").innerHTML 
//     += "<li>"+ myCustomers[i] + "</li>"
// }


var allCity = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Multan"
]
var userInput = prompt("Enter your city name...!");
// console.log(userInput, 'userInput')
// for (var i = 0; i < allCity.length; i++) {
//     if (userInput === allCity[i]) {
//         alert("you live in good city :)")
//     }
//     else {
//         alert("you live in bad city :)")
//     }
// }
// var flag = "no"
// for (var i = 0; i < allCity.length; i++) {
//     if (userInput === allCity[i]) {
//         alert("you live in good city :)")
//         flag = "yes"
//     }
// }
// if (flag === "no") {
//     alert("you live in bad city :)")
// }

// var flag = false;
// for (var i = 0; i < allCity.length; i++) {
//     if (userInput === allCity[i]) {
//         alert("you live in good city :)")
//         flag = true
//     }
//     console.log(i)
// }
// if (flag == false) {
//     alert("you live in bad city :)")
// }

var flag = false;
for (var i = 0; i < allCity.length; i++) {
    if (userInput === allCity[i]) {
        flag = true
        alert("you live in good city :)")
        break;
    }
    console.log(i)
}
if (flag == false) {
    alert("you live in bad city :)")
}