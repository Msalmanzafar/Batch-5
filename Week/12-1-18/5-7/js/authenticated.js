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

window.addEventListener('load', async () => {
    await checkAuth()
})

let credential = document.getElementById('auth')
async function checkAuth() {
    let get = await localStorage.getItem('userAuth')
    let data = JSON.parse(get);

    if (data.user !== "null") {
        document.getElementById("Login").style.display = "none"
        document.getElementById("logout").style.display = "block"
        document.getElementById("posts").style.display = "block"
        credential.innerHTML = "Welcome <span>" + data.user.email + "</span>"
    } else {
        document.getElementById("Login").style.display = "block"
        document.getElementById("logout").style.display = "none"
        document.getElementById("posts").style.display = "none"
        credential.innerHTML = "You dont have permisons to see News"
    }
}

function logOut() {
    firebase.auth().signOut()
        .then(function () {
            localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
            // Sign-out successful.
            window.location = '../pages/signIn.html'
        }).catch(function (error) {
            console.log(error.message)
            // An error happened.
        });
}

function createPost() {
    let userUid = firebase.auth().currentUser.uid

    if (userUid !== null || userUid !== undefined) {
        let names = document.getElementById("names").value
        let messages = document.getElementById("messages").value

        let postObj = {
            names,
            messages
        }
        let myPosts = document.getElementById("myPosts")
        firebase.database().ref('post/' + userUid)
            .push(postObj)
            .then((succ) => {
                firebase.database().ref('post/' + userUid)
                    .once('value', (data) => {
                        let userData = data.val()

                        for (var key in userData) {
                            console.log(userData[key].messages)
                            myPosts.innerHTML += `
                            <div class="card bg-primary text-white">
                                <div class="card-body">${userData[key].names}</div>
                                <div class="card-body">${userData[key].messages}</div>
                            </div>
                            `
                        }
                        
                        
                    })
            })
            .catch((err) => {
                console.log(err.message)
            })
    } else {
        console.log("user no Auth")
    }
}