var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);

function signUp() {
    // console.log("clicked me signUp")
    // console.log(firebase)
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("loaders").style.display = "block"
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            let userObj = {
                name,
                address,
                email,
                createTime: firebase.database.ServerValue.TIMESTAMP
            }
            let userId = firebase.auth().currentUser.uid;
            firebase.database().ref('/users/' + userId).set(userObj)
                .then((success) => {
                    document.getElementById("loaders").style.display = "none"
                    swal({
                        title: "Welcome",
                        text: "You can use this account to proceed further features",
                        icon: "success",
                        button: "Done",
                    });
                    window.location = '../pages/signin.html'
                })
                .catch((error) => {
                    document.getElementById("loaders").style.display = "none"
                    swal({
                        title: "Plug In",
                        text: error.message,
                        icon: "warning",
                        button: "OK",
                    });
                })
        })
        .catch((error) => {
            // Handle Errors here.
            document.getElementById("loaders").style.display = "none"
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Connection Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
            // ...
        });
}


function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("loaders").style.display = "block"
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            // console.log(success)
            document.getElementById("loaders").style.display = "none"
            localStorage.setItem("userAuth", JSON.stringify(success))
            window.location = '../pages/home.html'
        })
        .catch(function (error) {
            document.getElementById("loaders").style.display = "none"
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Authentication Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
            // ...
        });
}

function logOut() {
    firebase.auth().signOut().then(function () {
        localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
        // Sign-out successful.
        window.location = "../pages/signin.html"
    }).catch(function (error) {
        // An error happened.
        var errorMessage = error.message;
        swal({
            title: "Internet Error",
            text: errorMessage,
            icon: "warning",
            button: "OK",
        });
    });
}