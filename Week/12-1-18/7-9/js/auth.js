
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
    await authCheck()
})

let wel = document.getElementById("auths")
async function authCheck() {
    let get = await localStorage.getItem('userAuth')
    let data = JSON.parse(get)

    if (data.user !== 'null') {
        document.getElementById("signin").style.display = 'none'
        document.getElementById("logout").style.display = 'block'
        document.getElementById("posts").style.display = 'block'
        wel.innerHTML = "Welcome <span>" + data.user.email + "</span>"
    } else {
        document.getElementById("signin").style.display = 'block'
        document.getElementById("logout").style.display = 'none'
        document.getElementById("posts").style.display = 'none'
        wel.innerHTML = "You don't have permosion to access news"
    }
}

function logOut() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem("userAuth", JSON.stringify({ user: 'null' }))
            // Sign-out successful.
            window.location = '../pages/signIn.html'
        }).catch((error) => {
            // An error happened.
            let errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "Ok",
            });
        });



}

function createPost() {
    let userId = firebase.auth().currentUser.uid;

    if (userId !== null || userId !== undefined) {
        let name = document.getElementById('usr').value
        let mes = document.getElementById('mes').value
        let postObj = {
            name,
            mes
        }
        let myPost = document.getElementById("myPost")
        firebase.database().ref("posts/" + userId)
            .push(postObj)
            .then((suc) => {
                firebase.database().ref("posts/" + userId)
                    .once("value", (data) => {
                        let userData = data.val()
                        let array = []
                        console.log(userData)
                        for (var key in userData) {
                            array.push(userData[key])
                            // myPost.innerHTML +=
                            // `
                            // <div class="card bg-primary text-white">
                            //     <div class="card-body">${userData[key].name}</div>
                            //     <div class="card-body">${userData[key].mes}</div>
                            // </div>
                            // `
                        }
                        console.log(array)
                        array.map((v, i) => {
                            myPost.innerHTML +=
                                `
                                <div class="card bg-primary text-white">
                                <div class="card-body">${v.name}</div>
                                <div class="card-body">${v.mes}</div>
                                </div>
                            `
                        })
                    })
            })
            .catch((error) => {
                let errorMessage = error.message;
                swal({
                    title: "Error",
                    text: errorMessage,
                    icon: "error",
                    button: "Ok",
                });
            })
    } else {
        swal({
            title: "Error",
            text: "please Login First",
            icon: "error",
            button: "Ok",
        });
    }
}