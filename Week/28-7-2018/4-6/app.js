// var num = 12.345
// var str = num.toString();

// console.log(str)

// console.log(str.length)
// console.log(str.length - 1)

// console.log(str.charAt(str.length-1))

// console.log(str.slice(0, str.length -1))

// if (str.charAt(str.length - 1) === "5") {
    
//     str = str.slice(0, str.length - 1) + "6";
// }
// console.log(str, " after changes")

// num = Number(str);
// prettyNum = num.toFixed(2);


// v`ar sytemDate = new Date()
// console.log(sytemDate)

// var toDay = sytemDate.getDay()
// // `var toYear = sytemDate.getFullYear()

// console.log(toDay)
// console.log(toYear)

// var days = ['sun', 'mon','tue','wed', 'thu','fri','sat']
// console.log(days[toDay])

// for(var i = 0; i < days.length; i++){
//     if(i === toDay){
//         console.log(days[i])
//     }
// }
var day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var userID = ["1001", "1002"];
var userName = ["Yousuf", "Tariq"];
var userAmount = ["20010", "501400"];
var userInputId = prompt("Enter your ID");

























for (var i=0 ; i < userID.length ; i++){
    if(userInputId === userID[i]){
        alert("Welcome Mr. " + userName[i]);
        var userResp = prompt("Write your response \n 1 = Balance Enquiry \n 2 = Cash Widhdrawl");
        // var abc = Number(userAmount[i])-Number(cas)
        if (userResp === "1"){
            alert("Your current Balance is Rs " + userAmount[i]);
        }else if (userResp === "2"){
            var cashwidh = prompt("Enter Amount...");
            var date = new Date();
            var abc = Number(userAmount[i])-Number(cashwidh);
            alert("You have widhdrawl Rs " + cashwidh + "\n" + "on " + day[date.getDay()] + " " + date.getHours() + "Your new balance is Rs " + abc);
        }

    }
}