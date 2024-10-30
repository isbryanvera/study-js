const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')
const referenceTask = document.querySelector('#task')


taskForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const taskInput = document.getElementById('task-input')
    const taskValue = taskInput.value
    createTask(taskValue)
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

function createTask(value){
    const task = referenceTask.cloneNode(true)
    task.childNodes[0].nodeValue = value
    taskList.append(task)
}

function deleteTask(task){
    if(confirm('De verdad quieres eliminar la tarea')){
        task.remove();
    }
}

function editTask(taskItem){
    const newtask = prompt('Edita la tarea',taskItem.firstChild.textContent)
    
    if(newtask !== null) {
        console.log(taskItem.firstChild)
        taskItem.firstChild.nodeValue = newtask
    }
}