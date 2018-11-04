
var mainDiv = document.getElementById('todoApp');
// console.log(mainDiv);

// var button = document.createElement('button');
// button.setAttribute('class','btn')
// button.setAttribute('onClick','createText()')
// var btnText = document.createTextNode("Click Me")
// console.log(button);
// button.appendChild(btnText)
// mainDiv.appendChild(button)
// function createText(){
//     var p = document.createElement('p')
//     var pText = document.createTextNode("lorem ipsum its a dumy name")

//     p.appendChild(pText)
//     mainDiv.appendChild(p)
// }

var inputDiv = document.createElement('div');
inputDiv.setAttribute('class','box-1')

var h2 = document.createElement('h2')
var h2Text = document.createTextNode('Todo App')

var input = document.createElement('input');
input.setAttribute("type",'text')
input.setAttribute("class",'inputs')
input.setAttribute("id",'add-todo')
input.setAttribute("placeholder",'Enter your work')

var button = document.createElement('button')
button.setAttribute("onClick","addWork()")
button.setAttribute("class","btn")
var btnText = document.createTextNode('Add work')

h2.appendChild(h2Text)
inputDiv.appendChild(h2)
inputDiv.appendChild(input)
button.appendChild(btnText)
inputDiv.appendChild(button)

mainDiv.appendChild(inputDiv)

var listDiv = document.createElement('div')
listDiv.setAttribute('class',"list-div")
var ul = document.createElement('ul')
ul.setAttribute('id','ul')
function addWork(){
    // console.log('add work hit')
    var li = document.createElement('li')
    var addTodo = document.getElementById('add-todo').value;
    // console.log(addTodo)
    var liText = document.createTextNode(addTodo)
    var deleteBtn = document.createElement('button')
    
    var deleteBtnText = document.createTextNode('Delete')

    deleteBtn.appendChild(deleteBtnText)

    li.appendChild(liText)
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    listDiv.appendChild(ul)

    deleteBtn.addEventListener('click', function(){
        console.log(addTodo)
        deleteBtn.parentNode.remove()
        
        // var ulForDelete = document.getElementById('ul')
        // console.log(ulForDelete)
        // var clicked = ulForDelete.childNodes;
        // console.log(clicked.)
    
    })

    mainDiv.appendChild(listDiv)
    document.getElementById('add-todo').value = '';
}