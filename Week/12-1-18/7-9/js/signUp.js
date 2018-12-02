var config = {
    apiKey: "AIzaSyA7Xd0pSuBsYTrTm0FBrTegLEDtcIQJnf8",
    authDomain: "chatapp-292a.firebaseapp.com",
    databaseURL: "https://chatapp-292a.firebaseio.com",
    projectId: "chatapp-292a",
    storageBucket: "chatapp-292a.appspot.com",
    messagingSenderId: "902366354887"
};
firebase.initializeApp(config);

let btnSignUp = document.getElementById("signUp")
btnSignUp.addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    document.getElementById("loaders").style.display = 'block';

    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((success) => {
            let userObj={
                name,
                email,
                address
            }
            let userId = firebase.auth().currentUser.uid;
            firebase.database().ref("users/" + userId)
                .set(userObj)
                .then(() => {
                    document.getElementById("loaders").style.display = 'none';
                    swal({
                        title: "Welconme",
                        text: "You can use this email to procceed further features",
                        icon: "success",
                        button: "Done",
                    }).then(() => {
                        window.location = '../pages/signIn.html'
                    })
                })
        })
        .catch(function (error) {
            // Handle Errors here.
            document.getElementById("loaders").style.display = 'none';
            // var errorCode = error.code;
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