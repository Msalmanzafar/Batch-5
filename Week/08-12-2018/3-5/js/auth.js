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
    getAllTask()
})

async function authCheck() {
    let get = await localStorage.getItem("userAuth");
    let data = JSON.parse(get)
    console.log(data)
    if (data.user !== "null") {
        document.getElementById("signin").style.display = 'none'
        document.getElementById("logout").style.display = 'block'
        document.getElementById("auth").innerHTML = "Welcome <span>" + data.user.email + "</span>"
    } else {
        document.getElementById("signin").style.display = 'block'
        document.getElementById("logout").style.display = 'none'
        document.getElementById("auth").innerHTML = "You dont have Permision to see News"
    }
}
let ul = document.getElementById('tsk')
var arrays = [];
function getAllTask() {
    arrays = []
    // let userUid = firebase.auth().currentUser.uid
    let get = localStorage.getItem("userAuth");
    let data = JSON.parse(get)
    // console.log(data.user.uid)
    firebase.database().ref("mytask/" + data.user.uid)
        .once("value", (data) => {
            let userTask = data.val()
            // console.log(userTask)
            for (let key in userTask) {
                //    console.log(key,"key----")
                //    console.log(userTask[key])
                userTask[key].keyId = key
                arrays.push(userTask[key])
                // delete userTask[key].keyId
                // ul.innerHTML +=  `<li key="${key}" class="list-group-item">${userTask[key].task} <button onClick="deleteTask(this)">Delete</button></li>`
            }
            console.log(arrays)
            ul.innerHTML = arrays.map((v) => `<li key="${v.keyId}" class="list-group-item">${v.task} <button onClick="deleteTask(this)">Delete</button></li>`)
        })
}


function deleteTask(e) {
    console.log(e.parentNode.getAttribute('key'))
    let node = e.parentNode.getAttribute('key')
    let get = localStorage.getItem("userAuth");
    let data = JSON.parse(get)
    console.log(data.user.uid)
    firebase.database().ref("mytask/" + data.user.uid).child(node).remove()
        .then(() => {
            getAllTask()
        })
}

function logOut() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem("userAuth", JSON.stringify({ user: "null" }))

            window.location = "../pages/signIn.html"
            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            console.log(message)
            // An error happened.
        });
}


// function createPost() {
//     let userUid = firebase.auth().currentUser.uid
//     if (userUid !== null || userUid !== undefined) {
//         let name = document.getElementById("name").value
//         let message = document.getElementById("message").value

//         let post = {
//             name,
//             message
//         }
//         let posts = document.getElementById("posts")
//         firebase.database().ref('post/' + userUid)
//             .push(post)
//             .then((succ) => {
//                 firebase.database().ref('post/' + userUid)
//                     .once("value", (data) => {
//                         console.log(data)
//                         let userData = data.val()
//                         console.log(userData)
//                         for(var key in userData){
//                             let names = userData[key].name
//                             let messages = userData[key].message

//                             posts.innerHTML += `
//                             <div class="card bg-primary text-white">
//                                 <strong >${names}</strong>
//                                 <div class="card-body" >${messages}</div>
//                             </div>
//                             `
//                         }
//                     })
//             })
//             .catch((error) => {
//                 console.log(error.message)
//             })
//     }
// }


function addTask() {
    let task = document.getElementById("task").value;
    let userUid = firebase.auth().currentUser.uid
    if (userUid !== null) {
        let time = firebase.database.ServerValue.TIMESTAMP
        let taskObj = {
            task,
            time
        }
        console.log(taskObj, "taskObj")
        firebase.database().ref("mytask/" + userUid)
            .push(taskObj)
            .then((succ) => {
                getAllTask()
                console.log(succ, "data saved")
            })
            .catch((err) => {
                console.log(err.message)
            })
    } else {

    }
}