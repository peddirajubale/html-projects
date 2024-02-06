let addBtn = document.getElementById('add-task')
let taskInput = document.getElementById('task')

let taskList = document.getElementById("tasks-list")

addBtn.addEventListener('click',function(){
    let task = taskInput.value
    addTask(task)
    taskInput.value=""
})

function addTask(task){
    let li = document.createElement('li')
    li.style.backgroundColor="white"
    li.style.margin='5px'
    li.style.padding='5px'
    li.style.listStyleType='none'
    li.innerHTML=task
    taskList.appendChild(li)
}