
// var dom = document.getElementById("div");
// console.log(dom)
// console.log(dom.nodeType)
// console.log(dom.childNodes[0].nodeType)
// console.log(dom.childNodes[1].nodeType)
// console.log(dom.childNodes[2].nodeType)

// var ul = document.getElementsByTagName("ul");
// console.log(ul.childNodes)
// // console.log(dom.childNodes[1])

// for (var i = 0; i < 3; i++) {

//     document.getElementById("div").innerHTML += "<li>" + "red alert" + "</li>"
// }
var p;
var div = document.getElementById("div");
var button
function showText(){
    console.log(div)
    p = document.createElement('p');
    console.log(p)
    var pText = document.createTextNode("Here is my text using JS ")
    console.log(pText)
    button = document.createElement('a');
    var btnText = document.createTextNode("Read more")
    button.appendChild(btnText);
    button.setAttribute("href",'#')
    button.setAttribute("onClick",'readMore()')
    p.appendChild(pText)
    p.appendChild(button)
    // console.log(p)
    div.appendChild(p)
    // div.appendChild(button)

}
function readMore(){
    console.log('asdasd')
    var p1 = document.createElement('p') 
    var p1Text = document.createTextNode('asdadsadsadadass') 
    p1.appendChild(p1Text)
    div.appendChild(p1)
    
}