var config = {
    apiKey: "AIzaSyA7Xd0pSuBsYTrTm0FBrTegLEDtcIQJnf8",
    authDomain: "chatapp-292a.firebaseapp.com",
    databaseURL: "https://chatapp-292a.firebaseio.com",
    projectId: "chatapp-292a",
    storageBucket: "chatapp-292a.appspot.com",
    messagingSenderId: "902366354887"
};
firebase.initializeApp(config);

// console.log(firebase)

let signInBtn = document.getElementById("signIn")
signInBtn.addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("loaders").style.display = 'block'
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            console.log(success)
            document.getElementById("loaders").style.display = 'none'
            
            localStorage.setItem("userAuth",JSON.stringify(success))
            
            window.location = '../pages/home.html'
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "Ok",
            });
            // ...
        });
})
