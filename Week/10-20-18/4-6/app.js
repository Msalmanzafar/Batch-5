
function send(){
    var email = document.getElementById("email").value;
    console.log(email)
    // var emailRg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailRg = /^([a-zA-Z0-9_\.\-])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})+$/;
    if(email.match(emailRg)){
        console.log("email is correct")
    }else{
        console.log("email is not valid")
    }
}