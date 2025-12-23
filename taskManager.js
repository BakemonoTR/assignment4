class Task{

    constructor(id,title,completed) {
        Object.defineProperty(this.id,{
            value: id,
            writeable: false,
        })
        title = this.title;
        completed = false;
    }


    toggle() {

        return new Task(this.id,this.title,!this.completed);
    }
}

class TaskManager{

    constructor(tasks) {
        tasks = this.tasks;

    }


    setTasks(tasks) {
            this.tasks = [...tasks];
    }


    addTask(task) {
        this.tasks= [...this.tasks,task];
               

    }

    removeTask(taskID) {
        const newList = this.tasks.filter(task => task.id != taskID);
        
        this.tasks = newList;
    }

    toggleTask(taskID) {
        const newList = this.tasks.map(task => {
            if (task.id == taskID) {
                return task.toggle();
            }
            else {
                return task;

            }

        });
        this.tasks = newList;

    }
}