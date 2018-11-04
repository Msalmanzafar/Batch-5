


// var dummyUser = []
// function signUp(){
//     var fName = document.getElementById("fullName").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if(fName === "" && email === "" && password === "" 
//         && fName === " "&& email === " " && password === " "){
//             console.log("something missing")
//     }else{
//         var userObject={
//             fullName: fName,
//             email: email,
//             password: password
//         }
//         // dummyUser.push(userObject)
//         // console.log(dummyUser)
//         localStorage.setItem("userInfo",JSON.stringify([userObject]))
//         document.getElementById("loading").innerText = "Loading....."
//         setTimeout(function(){
//           location = './login.html'  
//         },3000)
//     }
// }
// function loginpage(){
//     location = './login.html'  
// }
// //login
// function logIn(){
//     var storage = localStorage.getItem("userInfo");
//     var data = JSON.parse(storage);

//     console.log(data)
// }

//============================
// localStorage 
// localStorage.setItem
// localStorage.getItem
// localStorage.clear()

// localStorage.setItem("user_name", "salman zafar")
// var data  = localStorage.getItem("user_name")
// console.log("data",data)
// localStorage.clear()
// var userObject={
//     fullName: "salman",
//     email: "zafar@gmail.com",
//     password: "123456"
// }
// localStorage.setItem("users_data",JSON.stringify(userObject))
// // localStorage.setItem("users_data",userObject)
// var data  = localStorage.getItem("users_data")
// console.log("data",JSON.parse(data))
// var count = 0
// setInterval(function(){
//     document.getElementById("loading").innerText = ++count
//   },1000)