const myTaskManager = new TaskManager();

const loadButton = document.getElementById('loadTasksBtn');
const tasksList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

function renderTasks() {
    tasksList.innerHTML = '';
    tasksList.classList.add('taskslist');

    myTaskManager.tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        if(task.completed) {

            taskDiv.classList.add('completed');

        }
        else {
            taskDiv.classList.add('uncompleted');
        }

        const TitleSpan =document.createElement('span');
        TitleSpan.textContent = task.title;
        TitleSpan.classList.add('titlespan');

        const ToggleButton = document.createElement('button');
        ToggleButton.textContent = 'Toggle';
        ToggleButton.classList.add('buttons')

        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = 'Delete';
        DeleteButton.classList.add('buttons')

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
    const totalTasks = document.createElement('span');
    
    if (myTaskManager.tasks.length > 0 ) {
        totalTasks.textContent = "Total Tasks: " + myTaskManager.tasks.length; 
        tasksList.appendChild(totalTasks);
    }
    else {
        totalTasks.textContent = "";
        tasksList.appendChild(totalTasks);
    }
    
}

loadButton.addEventListener('click', async() => {
    statusMessage.textContent = "Loading tasks...";

    try {

       const rawData = await fetchTasks();
       
       const jsonString = JSON.stringify(rawData);
       const parsedData = JSON.parse(jsonString);
       
       const taskObjects = parsedData.map(item => {
            return new Task(item.id,item.title,item.completed);
       });

       myTaskManager.setTasks(taskObjects);

       renderTasks();

       statusMessage.textContent = '';


    }
    catch(error) {
        console.error(error);
        statusMessage.textContent = "Error loading tasks!";

    }
    }



)