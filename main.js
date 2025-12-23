const myTaskManager = new TaskManager();

const loadButton = document.getElementById('loadTasksBtn');
const tasksList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

function renderTasks() {
    tasksList.innerHTML = '';

    myTaskManager.tasks.array.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        if(task.completed) {

            taskDiv.classList.add('completed');
        }

        const TitleSpan =document.createElement('span');
        TitleSpan.textContent = task.title;

        const.ToggleButton = document.createElement('button');
        ToggleButton.textContent = 'Toggle';

        const.DeleteButton = document.createElement('button');
        DeleteButton.textContent = 'Delete';

        ToggleButton.addEventListener('click', () => {
            myTaskManager.toggleTask(task.id);
            renderTasks();
            
        })

        DeleteButton.addEventListener('click', () => {
            myTaskManager.removeTask(task.id);
            renderTasks();
            
        })

        taskDiv.appendChild(TitleSpan);
        taskDiv.appendChild(ToggleButton);
        taskDiv.appendChild(DeleteButton);

        tasksList.appendChild(taskDiv);


    });
}

loadButton.addEventListener('click', async() => {
    statusMessage.textContent = "Loading tasks...";

    try {

        
    }



})