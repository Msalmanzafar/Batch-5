
function submit(){
    var fullName = document.getElementById("fullName").value;
    var fatherName = document.getElementById("fatherName").value;
    var rollNumber = document.getElementById("rollNo").value;
    var courseName = document.getElementById("courseName").value;

    console.log(fullName)
    console.log(fatherName)
    console.log(rollNumber)
    console.log(courseName)

    document.getElementById('name').innerHTML = "<p>"+ fullName+"</p>";
    document.getElementById('Fname').innerText = fatherName;
    document.getElementById('rollnumbers').innerText = rollNumber;
    document.getElementById('course').innerText = courseName;
}
var todoArray = []
function addTodo(){
    var addtodo = document.getElementById("todo").value;
    console.log(addtodo)
    todoArray.push(addtodo)
    console.log(todoArray)

}