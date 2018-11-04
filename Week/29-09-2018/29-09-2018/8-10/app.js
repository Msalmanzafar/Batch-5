// localStorage
// localStorage.setItem()
// localStorage.getItem()
// localStorage.clear()

// localStorage.setItem("userInfo","salman zafar")
// var data = localStorage.getItem("userInfo")
// console.log(data)

// var userObject = {
//     name: "salman",
//     email: "salman@gmail.com",
//     password: "123456"
// }
// var covertedJson = JSON.stringify(userObject)
// localStorage.setItem("userInfo",covertedJson)
// var data = localStorage.getItem("userInfo")
// console.log(data)
// var parseData = JSON.parse(data)
// console.log(parseData)
// localStorage.clear()
// console.log(parseData.name)

// setTimeout(function(){
//     document.getElementById("loading").innerText = "Loading..."
// },3000)

// var c = 0
// setInterval(function(){
//     if(c === 59){
//         c = 0
//     }
//     document.getElementById("loading").innerText = c++
// },100)

function signUp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name === "" || email === "" || password === "" || 
        name === " " || email === " " || password === " "){
            console.log("something is missing")
    }else{
        var userObject = {
            fullName: name,
            email: email,
            password: password
        }
        var stoarge = JSON.stringify(userObject)
        localStorage.setItem("usersData",stoarge)
        document.getElementById("loading").innerText = "Loading..."
        setTimeout(function(){
            location = "./login.html"
        },3000)
    }
}


function login(){
    var stoargeData = localStorage.getItem("usersData")
    var data = JSON.parse(stoargeData)

    console.log(data)
}