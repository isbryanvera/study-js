const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')
const referenceTask = document.querySelector('#task')
const taskInput = document.getElementById('task-input')

loadTasks();


taskForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const taskValue = taskInput.value
    createTask(taskValue,true)
    console.log(taskValue)
})

taskList.addEventListener('click',(e) => {
    const button = e.target
    const task = e.target.parentElement
    
    if(button.classList.contains('edit-btn')){
        // Es el boton de editar
        editTask(task)
    }else if(button.classList.contains('delete-btn')){
        // Es el boton de eliminar
        deleteTask(task)
    }
})

function createTask(value,isNew){
    const task = referenceTask.cloneNode(true)
    task.childNodes[0].nodeValue = value
    taskList.append(task)

    if(isNew) storeTaskInLocalStorage(value)
    
    taskInput.value=""
}

function deleteTask(task){
    if(confirm('De verdad quieres eliminar la tarea')){
        task.remove();
    }
}

function editTask(taskItem){
    const newtask = prompt('Edita la tarea',taskItem.firstChild.textContent)
    
    if(newtask !== '') {
        console.log(taskItem.firstChild)
        taskItem.firstChild.nodeValue = newtask
        updateLocalStorage()
    }
}

function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

    tasks.forEach(task => {
        createTask(task,false)
    });
}

function updateLocalStorage(){
    const tasks = Array.from(document.querySelectorAll('li')).map( (li) => li.firstChild.textContent)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}