
// function newFunction(a,b,o){
//     var total;
//     if(o === '*'){
//         total = a * b
//     }
//     else if(o === '+'){
//         total = a + b
//     }
//     return total;
// }

// console.log(newFunction("salman","zafar"))

// var user;
// function cal(){
//     user = parseInt(document.getElementById("input").value)
//     // user  = document.getElementById("input").value
//     console.log(typeof(user))
//     if(user !== null){
//         console.log(newFunction(user,user,"+"))
//     }
// }

// alert(a)

// var a = 123
// function newFunction(){
//     a = 12;
//     b = 23 + 2
//     return alert(a+b)
// }
// var a = 4;

// alert(a ,b )
// newFunction();

function cal() {
    user = parseInt(document.getElementsByTagName('input')[0].value)
    console.log(user)
    switch (user) {
        case 3:
            console.log("case 3 success")
            break;
        case 4:
            console.log("case 4 success")
            break
        default:
            console.log("num")
    }
}