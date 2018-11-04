function signUp(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var rgEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/;
    var rgString = /^([a-zA-Z]{3,25})/;
    var gPassword = /^([0-9]{6,8})/;
    var userObj = {}

    if(fName.match(rgString)){
        userObj.fName = fName;
        document.getElementById("errorFirstName").innerText = ""
    }else{
        document.getElementById("errorFirstName").innerText = 
        "Please enter your first name"
    }
    if(lName.match(rgString)){
        userObj.lName = lName;
        document.getElementById("errorLastName").innerText = ""
    }else{
        document.getElementById("errorLastName").innerText = 
        "Please enter your last name"
    }
    if(userObj.fName !== undefined && userObj.lName !== undefined){
        console.log(userObj)
    }
}