// localStorage
// localStorage.setItem
// localStorage.getItem
// localStorage.clear()

//simple string
// localStorage.setItem("user_info","salman zafar")
// var data = localStorage.getItem("user_info");
// console.log(data)
// var userData = {
//     name: "salman",
//     email: "salman@gmail.com",
//     password: 123456,
//     personal: {
//         ad:"asd"
//     }
// }

// // localStorage.setItem("user_info", userData);
// localStorage.setItem("user_info", JSON.stringify(userData));
// var data = localStorage.getItem("user_info")
// console.log(data)
// var users = JSON.parse(data)
// console.log(users)

function signUp() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" && email === "" && password === ""
        && name === " " && email === " " && password === " ") {
        console.log("somthing missing")
    } else {
        var userData = {
            fullName: name,
            email: email,
            password: password
        }

        localStorage.setItem("userInfo", JSON.stringify(userData));
        document.getElementById("loading").innerText = "Loading...";

        setTimeout(function () {
            location = "./login.html"
        }, 3000)
    }
    // console.log(name,email,password)
}

// var c = 0
// setInterval(function () {
//     if (c === 59) {
//         c = 0
//     }
//     document.getElementById("loading").innerText = c++;
// }, 1000)

// var c = 0
// setTimeout(function () {
//     document.getElementById("loading").innerText = c++;
// }, 3000)

function logIn(){
    var storage = localStorage.getItem("userInfo")
    var Sdata = JSON.parse(storage);

    console.log(Sdata)
}