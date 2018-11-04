// //main div
var mainDiv = document.getElementById('todo');

// create a div for user input
var userDiv = document.createElement('div');
userDiv.setAttribute('class', 'user-box')
var h2 = document.createElement('h2')
var h2Text = document.createTextNode('Todo App')
h2.appendChild(h2Text)
var userInput = document.createElement('input')
userInput.setAttribute('type', 'text')
userInput.setAttribute('placeholder', 'Enter your work')
userInput.setAttribute('id', 'todoList')

var button = document.createElement('button')
button.setAttribute('onClick', "addWork()")
button.setAttribute('class', "btn")
var btnText = document.createTextNode('Add work')
button.appendChild(btnText)

userDiv.appendChild(h2)
userDiv.appendChild(userInput)
userDiv.appendChild(button)
mainDiv.appendChild(userDiv)

var listDiv = document.createElement('div')
listDiv.setAttribute('class', 'list-data')

function addWork() {

    var ul = document.createElement('ul')
    var li = document.createElement('li')

    var btn = document.createElement('button')
    var btnText = document.createTextNode('Delete')

    var btnEdit = document.createElement('button')
    var btnTextEdit = document.createTextNode('Edit')
    
    var listData = document.getElementById('todoList').value;

    var liText = document.createTextNode(listData)
    li.appendChild(liText)
    li.setAttribute('id', listData)
    //delete
    btn.appendChild(btnText)
    li.appendChild(btn)
    //edit
    btnEdit.appendChild(btnTextEdit)
    li.appendChild(btnEdit)

    ul.appendChild(li)

    //delete function
    btn.addEventListener("click", function () {
        btn.parentNode.remove()
    })
    //edit function
    btnEdit.addEventListener('click', function () {
        var li = this.parentNode;
        var text = prompt("enter value",this.parentNode.id)
        li.innerText = text
        li.appendChild(btn)
        li.appendChild(btnEdit)

    })
    // console.log(listData)
    listDiv.appendChild(ul)
    mainDiv.appendChild(listDiv)
    document.getElementById('todoList').value = ""
}

// var li = this.parentNode;
// var text = prompt("please enter updated value")
// li.innerHTML = text;
// li.appendChild(btn);
// li.appendChild(btnEdit);
// li.setAttribute('id',text)
// var li=this.parentNode;
// var text=prompt("please enter updated value",this.parentNode.id)




function showText() {
    var p = document.createElement('p')
    p.setAttribute("title", "demo")
    p.setAttribute("class", "p1")
    var pText = document.createTextNode("today is a saturday")

    console.log(p)
    // console.log(pText)

    p.appendChild(pText);
    mainDiv.appendChild(p)
}