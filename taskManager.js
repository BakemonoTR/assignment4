class Task{

    constructor(id,title,completed) {
        Object.defineProperty(this.id,{
            writeable: false,
            configurable: false
        })
        title = this.title;
        completed = false;
    }


    toggle() {

        return new Task(this.id,this.title,!this.completed);
    }
}

