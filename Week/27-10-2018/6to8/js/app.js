function singUp(){
    var fName =  document.getElementById("fName").value;
    var lName =  document.getElementById("lName").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;

    var userObj = {}
    var rgEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})+$/;
    var rgGtring = /^([a-zA-Z])/;
    var rgPassword = /^([0-9]{6,8})/;
    if(fName.match(rgGtring)){
        userObj.fName = fName
        document.getElementById("errorFirstName").innerText = ""
    }else{
        document.getElementById("errorFirstName").innerText = 
        "please enter your first name"
    }
    if(lName.match(rgGtring)){
        userObj.lName = lName
        document.getElementById("errorLastName").innerText = ""
    }else{
        document.getElementById("errorLastName").innerText = 
        "please enter your last name"
    }

    if(userObj.lName !== undefined && userObj.fName !== undefined){
        console.log(userObj)
    }
}