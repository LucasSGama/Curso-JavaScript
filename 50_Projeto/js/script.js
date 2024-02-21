function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        // clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;
        
        // remover as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        })

        // adicionar evento de completar tarefa
        const donebtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // Limpar texto
        document.querySelector("#task-title").value = "";
    }    
}

// Função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

// função de completar a tarefa
function completeTask(task) {

    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
    
}

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();
    
})