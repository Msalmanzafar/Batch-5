// var array = [
//     "salman",
//     "bilal",
//     "Farhan",
//     "Noman"
// ]

// console.log(array)
// var user = prompt("Please enter your name")
// console.log(user)
// var flag = false;
// for (var i = 0; i < array.length; i++){
//     // console.log(array[i] + " index" + i)
// if(user.toLowerCase() === array[i].toLowerCase()){
//         console.log(array[i] + " matched")
//         flag = true;
//         break;
//     }
//     // console.log(array[i])
// }
// if(flag === false){
//     console.log("not matched")
// }


var text = 'The New Yorker magazine doesnt allow the phrase World War II. They say it should be the Second World War.'

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}
console.log(text)