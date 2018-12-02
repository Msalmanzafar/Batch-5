var config = {
    apiKey: "AIzaSyA7Xd0pSuBsYTrTm0FBrTegLEDtcIQJnf8",
    authDomain: "chatapp-292a.firebaseapp.com",
    databaseURL: "https://chatapp-292a.firebaseio.com",
    projectId: "chatapp-292a",
    storageBucket: "chatapp-292a.appspot.com",
    messagingSenderId: "902366354887"
};
firebase.initializeApp(config);

let btnSignIn = document.getElementById("signIn")
btnSignIn.addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("loaders").style.display = 'block';

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            document.getElementById("loaders").style.display = 'none';
            // console.log(success)
            localStorage.setItem("userAuth",JSON.stringify(success))
            
            window.location = '../pages/home.html'
        })
        .catch(function (error) {
            document.getElementById("loaders").style.display = 'none';
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