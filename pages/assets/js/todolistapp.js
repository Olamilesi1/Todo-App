
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

/* VARIABLES FOR INNER TASK */
let innerTask = document.querySelector('.innerTask');
let textInput = document.querySelector('.textInput');
let dateInput = document.querySelector('.dateInput');
let timeInput = document.querySelector('.timeInput');
let textArea = document.querySelector('.textArea');
let msg = document.querySelector('.msg');
let done = document.querySelector('#done');

// VARIABLES FOR PROGRESSIVE AND COMPLETED TASK
let completedTask = document.getElementById('completedTask').textContent;
let progressTask = document.getElementById('progressTask');

/* FUNCTION TO CREATE AN LI */
function createLi(task){
    let li = document.createElement('li');
    li.innerHTML = `<span class="text">${task}</span>
    <div class="icons">
        <input onClick="checkAction(this)" type="checkbox" name="" class="checkBox">
        <i onClick="editTask(this)" class="fa-solid fa-pen-to-square edit-task"></i>
        <i onClick="deleteTask(this)" class="fa-solid fa-trash delete_icon" ></i>
    </div>`;
    ul.appendChild(li);
}

/* FUNCTION TO ADD TASK TO THE UL */
newTaskForm.addEventListener('submit', function(e){
    e.preventDefault();
    let task = addTaskField.value.trim().toLowerCase();
    if(task === ""){
        alert('enter a task');
    }else{
        createLi(task);
    } 
    newTaskForm.reset();
})

/* FUNCTION TO DELETE TASKS FROM THE UL*/

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

/* FUNCTION TO CHECK TASKS FROM THE UL*/
let checkAction = (e) => {
    e.parentElement.parentElement.firstElementChild.style.textDecoration='line-through';
    if (checkAction) {
        console.log(completedTask++,'Checking');
    } else {
        console.log(completedTask,'Checking');
    }
    console.log(completedTask,'Checking');
    completedTask++;
    document.getElementById('completedTask').textContent = completedTask;
}

/* FUNCTION TO EDIT TASKS FROM THE UL*/
    let editTask = (e) => {
        addTaskField.value = e.parentElement.previousElementSibling.innerHTML;
         e.parentElement.parentElement.remove();
    }

/* FUNCTION TO VALIDATE THE INNER-TASK*/
innerTask.addEventListener("submit", (e) => {
    e.preventDefault();
  taskdetail()
});

let  taskdetail = () => {
    if (textInput.value === "") {
        // alert('enter a task');
        msg.innerHTML = "Task cannot be blank";
      } else {
        msg.innerHTML = "";
      }
}

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




