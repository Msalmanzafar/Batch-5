var mainDiv = document.getElementById('todo');
// console.log(mainDiv)
// var button = document.createElement('button')
// button.setAttribute('class',"btn")
// button.setAttribute('id',"show")
// button.setAttribute('onClick',"clickMe()")
// var btnText = document.createTextNode("Click me")
// console.log(button)
// // console.log(btnText)
// button.appendChild(btnText)
// mainDiv.appendChild(button)

// function clickMe(){
//     document.getElementById('show').style.display = 'none';
//     console.log('you hit me')
//     var p = document.createElement('p')
//     p.setAttribute('id','p')
//     var ptext = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius laboriosam quae adipisci quaerat modi voluptatibus, amet beatae magni non reprehenderit! Animi nobis sapiente repudiandae minus facere non iste velit.')
//     var a = document.createElement('a')
//     a.setAttribute('href',"#")
//     a.setAttribute('onClick',"lesstext()")
//     var atext = document.createTextNode('Less')
//     p.appendChild(ptext)
//     a.appendChild(atext)
//     p.appendChild(a)
//     mainDiv.appendChild(p)
// }
// function lesstext(){
//     document.getElementById('p').style.display = 'none'
//     document.getElementById('show').style.display = 'block'
// }

//------------------------------------------------
var userDiv = document.createElement('div')
userDiv.setAttribute('class',"user-box");

var h2 = document.createElement('h2')
var h2Text = document.createTextNode('Todo App')

var input = document.createElement('input')
input.setAttribute('placeholder',"Enter your work")
input.setAttribute('type',"text")
input.setAttribute('id',"todoList")
input.setAttribute('class',"todo-list")

var button = document.createElement('button')
button.setAttribute('onClick',"addWork()")
button.setAttribute('class',"btn")
var btnText = document.createTextNode("Add work")

h2.appendChild(h2Text)
userDiv.appendChild(h2)
userDiv.appendChild(input)
button.appendChild(btnText)
userDiv.appendChild(button)
mainDiv.appendChild(userDiv)

var listDiv = document.createElement('div');
listDiv.setAttribute('class',"list-box")
var ul = document.createElement('ul')
function addWork(){
var addTodo = document.getElementById('todoList').value
    var li = document.createElement('li')
    var liText = document.createTextNode(addTodo)

    var buttonLi = document.createElement('button')
    buttonLi.setAttribute("class", 'btnLi')
    var liBtnText = document.createTextNode('Delete')

    li.appendChild(liText)
    buttonLi.appendChild(liBtnText)
    li.appendChild(buttonLi)
    ul.appendChild(li)

    buttonLi.addEventListener('click',function(){
        // console.log(addTodo)
        console.log(buttonLi)
        console.log(buttonLi.parentNode)
        buttonLi.parentNode.remove()
    })

    listDiv.appendChild(ul)
    mainDiv.appendChild(listDiv)

    document.getElementById('todoList').value = ''
}

