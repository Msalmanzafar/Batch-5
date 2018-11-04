function signUp() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var objUser = {}
    var rgxEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})/;
    var rgxfName = /^([a-zA-Z])/;
    var rgxPassword = /^([0-9]{6,8})/;

    if (fName.match(rgxfName)) {
        objUser.fName = fName
        document.getElementById("errorfName").innerText = ""
    } else {
        document.getElementById("errorfName").innerText = "Please enter your first name"
    }
    if (lName.match(rgxfName)) {
        objUser.lName = lName
        document.getElementById("errorlName").innerText = ""
    } else {
        document.getElementById("errorlName").innerText = "Please enter your last name"
    }
    if (email.match(rgxEmail)) {
        objUser.email = email
        document.getElementById("errorEmail").innerText = ""
    } else {
        document.getElementById("errorEmail").innerText = "Please enter your valid email"
    }
    if (password.match(rgxPassword)) {
        objUser.password = password
        document.getElementById("errorPassword").innerText = ""
    } else {
        document.getElementById("errorPassword").innerText = "Please enter your password in 6 to 8 numbers only"
    }

    if(objUser.fName !== undefined && 
        objUser.lName !== undefined &&
        objUser.email !== undefined &&
        objUser.password !== undefined){
            console.log(objUser)
    }
}