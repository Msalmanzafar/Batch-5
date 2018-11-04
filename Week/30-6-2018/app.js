
// var customerArray = [];
// customerArray.push("salman", "adnan", "Rehan", "Qadir")
// console.log(customerArray)

// var userInput = prompt("Search customer here..");

// var flag = false;
// for (var i = 0; i < customerArray.length; i++) {
//     console.log(customerArray[i], "Index " + i)
//     if (userInput.toLowerCase() === customerArray[i].toLowerCase()) {
//         flag = true;
//         console.log("Matched")
//         break;
//     }
// }
// if (flag === false) {
//     console.log("ther is no data")
// }

// var userFirstName = prompt("Enter you first name");
// var userLastName = prompt("Enter you last name");

// console.log(userFirstName + " " + userLastName)

// var firstLater = userFirstName.slice(0, 1);
// console.log(firstLater);
// firstLater = firstLater.toUpperCase();
// var firstName = firstLater + userFirstName.toLowerCase().slice(1)
// console.log(firstName);

// var lastLater = userLastName.slice(0, 1);
// console.log(lastLater);
// lastLater = lastLater.toUpperCase();
// var lastName = lastLater + userLastName.toLowerCase().slice(1)
// console.log(lastName);

// console.log(firstName + " " + lastName)


// 1. var monthsArray // all months values in a full form
// 2. user input // enter your birth month
// 3. for >> monthsArray
// 4. monthsArray 3 >> convert toUpperCase
// 5. before for loop months = [] 
// 6. convert months.push(convert three cracters)
// 7. for loop months
// 8. match userInput with converted array
// 9. success after matched
// 10. wrong

















var months = [
    "january",
    "febrary",
    "march",
    "aprail",
    "may",
    "june",
    "july",
    "augast",
    "september",
    "octuber",
    "nevember",
    "december"
]
console.log(months)
var shortArray = [];
var userInput = prompt("Enter your birth month")
var flag = false;
for (var i = 0; i < months.length; i++) {
    console.log(months[i])
    var short = months[i].slice(0, 3);
    var uper = short.toUpperCase()
    shortArray.push(uper)
    userInput = userInput.slice(0, 3);
    userInput.toLowerCase()
}
for (var j = 0; j < shortArray.length; j++) {
    if(userInput === shortArray[j].toLowerCase()){
        flag = true
        console.log( shortArray[j] + " " + "your birth month is converted");
        break;
    }
}
if(flag === false){
    console.log(userInput + " your birth month is not exists");
}