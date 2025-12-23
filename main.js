const myTaskManager = new TaskManager();

const loadButton = document.getElementById('loadTasksBtn');
const tasksList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

function renderTasks() {
    tasksList.innerHTML = '';

    myTaskManager.tasks.array.forEach(task => {
        
    });
}