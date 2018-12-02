// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);

// console.log(firebase)

function singup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    // console.log("Email:", email)
    // console.log("Password:", password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            let userObj = {
                email,
                name,
                address
            }
            // console.log(result, user)
            let userUid = firebase.auth().currentUser.uid
            firebase
                .database()
                .ref('users/' + userUid)
                .set(userObj)
                .then(() => {
                    window.location = '../pages/signIn.html'
                })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
        });
}

function singin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            // console.log(success)
            localStorage.setItem("userAuth",JSON.stringify(success))
            window.location = '../pages/home.html'
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
        });
}