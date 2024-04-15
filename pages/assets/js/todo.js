
/* VARIABLES FOR SEARCH FIELD FORM */
let searchForm = document.querySelector('.searchfield');
let userSearch = document.querySelector('.userSearch');
let progress = document.querySelector('.progress');
let completed = document.querySelector('.completed');


/* VARIABLE FOR MAIN BODY */
let listcontainer = document.querySelector('.listcontainer');
let ul = document.querySelector('ul');


/* VARIABLES FOR ADD TASKS */
let newTaskForm = document.querySelector('.newTaskForm');
let addTaskField = document.querySelector('.addTask');
let addTaskBtn = document.querySelector('.addTaskBtn');



/* TASKS COUNTER */

let newProgress = 0

/* FUNCTION TO CREATE AN LI */

function createLi(task){
    let li = document.createElement('li');
    li.innerHTML = `<span class="text">${task}</span>
    <div class="icons">
        <input type="checkbox" name="" class="checkBox">
        <i class="fa-solid fa-pen-to-square edit-task"></i>
        <i class="fa-solid fa-trash delete_icon"></i>
    </div>`;
    // let x = taskCounter[0].progress++;
    // progress.textContent = x;
    ul.appendChild(li);
}


/* FUNCTION TO ADD TASK TO THE UL */
newTaskForm.addEventListener('submit', function(e){
    e.preventDefault();
    let task = addTaskField.value.trim().toLowerCase();
    if(task === ""){
        prompt('enter a task');
    }else{

        createLi(task);
    } 
    
    newTaskForm.reset();
})

/* FUNCTION TO DELETE TASKS FROM THE UL*/

ul.addEventListener('click', function (e) {
    e.stopPropagation();
    if(e.target.classList.contains('delete_icon')){
        e.target.parentElement.parentElement.remove();
    }
    
    
    if(e.target.classList.contains('checkBox')){
        e.target.parentElement.parentElement.firstElementChild;
    //    e.target.parentElement.parentElement.firstElementChild.style.textDecoration='line-through';
    //    completed.innerHTML = taskCounter[0].completed++;
    }

    let editedContents='';
    if(e.target.classList.contains('edit-task')){
        editedContents = e.target.parentElement.parentElement.firstElementChild.textContent;
        addTaskField.value = editedContents;
    }
})

/*FUNCTION TO USE SEARCH */


userSearch.addEventListener("keyup", function (){
    let searchTerm = userSearch.value.trim().toLowerCase();
searchCompare(searchTerm);
});

function searchCompare (searchTerm) {
    let newArray = Array.from(ul.children)
newArray.filter(function (item){
 if (item.textContent.includes(searchTerm))
{
item.style.display = "flex"
} else {
    item.style.display = "none"
}

})
}










// let taskHolder = []

// document.getElementById("addtask").addEventListener("click", function() {
//    let inputValue = document.getElementById("inputField").value;
//    let todoUl = document.getElementById("todoul");
//    taskHolder.push(inputValue)

//    if (inputValue.trim() === "") {
//        alert("Please enter a task!");
//        return;
//    } else { 
//        let newTask = '';
//        taskHolder.forEach(function (task_hold){
//            newTask += `<div id="new-todo" class="new-todo">
//        <div>${task_hold}</div>

//        <div id="task1">
//        <input type="checkbox" id="search" placeholder="I am writing a new to-do">
//        <button class="delete-button" onclick="deleteTask()">
//            <span class="material-symbols-outlined">
//                delete
//                </span>
//          </button>
//    </div>
//    </div>`
// } )

// return todoUl.innerHTML = newTask;
// }
//    });


// function deleteTask (event)  {

// const taskDelete = event.target.closest(".new-todo");
// if (taskDelete) {
//     taskDelete.remove()
//     taskHolder.splice(taskHolder.indexOf(taskDelete.textContent), 1);
// }
//     }
  
//     let todo = document.getElementById('todoul');
//     document.querySelector(".delete-button").addEventListener("click", deleteTask)


//     let deleteButton = document.querySelector(".delete-button");

//     deleteButton.addEventListener("click", (e) => {
//         const taskDelete = e.target.closest(".new-todo");
// if (taskDelete) {
//     taskDelete.remove()
//     taskHolder.splice(taskHolder.indexOf(taskDelete.textContent), 1);
// }
//     });



// // document.getElementById("addButton").addEventListener("click", function() {
//    var inputValue = document.getElementById("inputField").value;
//    if (inputValue.trim() === "") {
//        alert("Please enter a task!");
//        return;
//    }

//    var listItem = document.createElement("li");

//    var checkbox = document.createElement("input");
//    checkbox.type = "checkbox";
//    listItem.appendChild(checkbox);

//    var textNode = document.createTextNode(inputValue);
//    listItem.appendChild(textNode);

//    var deleteButton = document.createElement("button");
//    deleteButton.textContent = "Delete";
//    deleteButton.addEventListener("click", function() {
//        listItem.remove();
//    });
//    listItem.appendChild(deleteButton);

//    document.getElementById("todoList").appendChild(listItem);

//    // Clear input field after adding task
//    document.getElementById("inputField").value = "";
// // });



// function tasks(){
//    var inputValue = document.getElementById("inputField").value;
//        let todoUl = document.getElementById("todoul");



