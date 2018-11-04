// var myCustomers = [
//     "Rehan",
//     "Salman",
//     "Bilal",
//     "Khan",
//     "Jhon"
// ]


// console.log(myCustomers, "myCustomers")

// document.getElementById('list').innerHTML =
//     "<li>" + myCustomers[2] + "</li>";

// for (var i = 0; i < myCustomers.length; i++) {
//     console.log("index" + i)
//     console.log("data" + myCustomers[i])
// document.getElementById('list').innerHTML +=
//     "<li>" + myCustomers[i] + "</li>";
// }



var myCity = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Multan"
]
console.log(myCity, 'myCity')
var userInput = prompt("Enter your city name...!");
// for(var i = 0; i < myCity.length; i++){
//     if(userInput === myCity[i]){
//         alert("you live in good city :)")
//     }
//     console.log("Index " + i)
// }


// for(var i = 0; i < myCity.length; i++){
//     if(userInput === myCity[i]){
//         alert("you live in good city :)")
//     }
//     else{
//         alert("you live in bad city :(")
//     }
//     console.log("Index " + i)
// }

// var flag = "no";
// for (var i = 0; i < myCity.length; i++) {
//     if (userInput === myCity[i]) {
//         alert("you live in good city :)")
//         flag = 'yes'
//     }
//     console.log("Index " + i)
// }
// if (flag === "no") {
//     alert("you live in bad city :(")
// }

// var flag = false;
// for (var i = 0; i < myCity.length; i++) {
//     if (userInput === myCity[i]) {
//         alert("you live in good city :)")
//         flag = true
//     }
//     console.log("Index " + i)
// }
// if (flag === false) {
//     alert("you live in bad city :(")
// }


var flag = false;
for (var i = 0; i < myCity.length; i++) {
    if (userInput === myCity[i]) {
        flag = true
        alert("you live in good city :)")
        break;
    }
    console.log("Index " + i)
}
if (flag === false) {
    alert("you live in bad city :(")
}