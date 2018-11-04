// entry for footbal ground
// var castArray = ["khan", "Arain", "Baloch"];
// var users = [
//     "salman",
//     "farhan",
//     "hussam",
//     "Tahir",
//     "Rehan",
//     "noman",
//     "Sabih",
//     "Raheem",
//     "Ehsan",
//     "fakhar",
//     "fahad",
//     "bilal",
// ]


// var name = prompt("Enter your name").toLowerCase();
// var cast = prompt("Enter your cast").toLowerCase();
// var temp = false;
// for (var i = 0; i < castArray.length; i++) {
//     for (var j = 0; j < users.length; j++) {
//         if (cast === castArray[i].toLowerCase() 
//             && name === users[j].toLowerCase()) {

//             alert("You are registered.");
//             temp = true;
//             break;
//         }
//     }
// }
// if (temp === false) {
//     alert("you are not registered.");
// }

// var text = "The New Yorker magazine doesnt allow the phrase World War II. They say it should be the Second World War."
// var find =  text.indexOf("World War II")
// console.log(find)
// for (var i = 0; i < text.length; i++) {
//     //console.log(text[i])
//     if (text.slice(i, i + 12) === "World War II") {
//         console.log('matched')
//         text = text.slice(0, i) + " Second War " + text.slice(i + 12);
//     }
// }
// console.log(text)

// var find =  text.indexOf("World War II");
// console.log(find)
// if(find !== -1){
//     text = text.slice(0, find) + " Second War " 
//         + text.slice(find + 12);
//     console.log(text)
// }else{
//     console.log("not matched")
// }
// var last = text.lastIndexOf("War");
// console.log(last)