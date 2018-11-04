
// var div = document.getElementById('div');
// console.log(div)
// console.log(div.nodeType)

var divs = document.getElementById('div');
function showText(){
    var p = document.createElement('p')
    // console.log(p)
    var pText = document.createTextNode('Hello this is saylani Developer ')
    // console.log(pText)
    var a = document.createElement('a')
    a.setAttribute("href", '#')
    a.setAttribute("onClick", "readMore()")
    var aText = document.createTextNode("Read more");
    a.appendChild(aText);
    p.appendChild(pText);
    p.appendChild(a);
    divs.appendChild(p)
}

function readMore(){
    var p1 = document.createElement('p');
    var p1Text = document.createTextNode("You can reade more...")

    p1.appendChild(p1Text);

    divs.appendChild(p1)

}