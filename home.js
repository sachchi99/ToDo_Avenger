
const uinp=document.getElementById("inp1");
const todoinpform=document.getElementById("todoinp1");
const adbtn=document.getElementById("btn1");
const listcont=document.querySelector(".contain2");
const formOptio=document.querySelector(".form-select");

document.addEventListener("DOMContentLoaded", getTodos);

todoinpform.addEventListener("submit",addTask);
listcont.addEventListener("click", checkRemove);
// formOptio.addEventListener("click", filterTodo);


function addTask(e)
{
    e.preventDefault();

    const tasklist=document.createElement("div");
    const taskname=uinp.value;
    const taskElement=document.createElement("p");
    taskElement.innerText=taskname;

    const cmptbtn=document.createElement("button");
    cmptbtn.innerText="completed";
    cmptbtn.classList.add("cmptbutton");
    cmptbtn.classList.add("btn");
    cmptbtn.classList.add("cmbtn");

    const rmvbtn=document.createElement("button");
    rmvbtn.innerText="removed";
    rmvbtn.classList.add("rmvbutton");
    rmvbtn.classList.add("btn");
    rmvbtn.classList.add("rmbtn");
    
    if (uinp.value == "")
    {
        alert("Please Enter Some Text");
    }
    if (uinp.value!="")
    {
        tasklist.appendChild(taskElement);
        tasklist.appendChild(cmptbtn);
        tasklist.appendChild(rmvbtn);
    }

    //map method or filter method for check already exist string 

    tasklist.classList.add("containjsbtn")
    listcont.appendChild(tasklist);
}




function checkRemove(e)
{
    const todoTask=e.target;

    if (todoTask.classList[0] === "rmvbutton")
    {
        const todo=todoTask.parentElement;
        todo.classList.add("fall_btn");
        // console.log(todo);
        // todoTask.classList.add("fall_btn");
        removeLocalTodos(todo);
        console.log(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    else if (todoTask.classList[0] === "cmptbutton")
    {
        const todo=todoTask.parentElement;
        todo.classList.toggle("completed_btn");
    }
}


//Save locally:
function saveLocalTodos(todo) {
    //Check if we already have something:
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    localStorage.getItem("todos");

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function (todo) {
        const taskContainer = document.createElement("div");

        const taskElement = document.createElement("p");
        taskElement.innerText = todo;
        taskElement.classList.add("taskElement");

        const cmptbtn=document.createElement("button");
        cmptbtn.innerText="completed";
        cmptbtn.classList.add("cmptbutton");
        cmptbtn.classList.add("btn");
        cmptbtn.classList.add("cmbtn");

        const rmvbtn=document.createElement("button");
        rmvbtn.innerText="removed";
        rmvbtn.classList.add("rmvbutton");
        rmvbtn.classList.add("btn");
        rmvbtn.classList.add("rmbtn");

        tasklist.appendChild(taskElement);
        tasklist.appendChild(cmptbtn);
        tasklist.appendChild(rmvbtn);

        tasklist.classList.add("containjsbtn")
        listcont.appendChild(tasklist);
    });
}

function removeLocalTodos(todo)
{
    let todos;

    if (localStorage.getItem("todos") === null) 
    {
        todos = [];
    } 
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);

    localStorage.setItem("todos", JSON.stringify(todos));
}
