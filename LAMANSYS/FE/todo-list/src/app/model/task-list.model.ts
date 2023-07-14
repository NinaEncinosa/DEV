import { TaskItem } from "./task-item.model";

export class taskList {
    tasks: TaskItem[] = [];
    count: number = taskList.length;

    constructor(tasks: TaskItem[]){
        this.tasks = tasks;
        this.count = this.tasks.length;
    }

    addTask(title: string, description: string,){
        let id = this.tasks.length;
        let task:TaskItem = new TaskItem(id, title, description);
        this.tasks.unshift(task);
    }

    deleteTask(index: number){        
        this.tasks.splice(this.tasks.findIndex((task) => task.id === index), 1);
    }

    getTaskList(){
        return this.tasks;
    }

    toggleCheck( index: number ){
        this.tasks[this.tasks.findIndex((task) => task.id === index)].toggleCheck();
    } 
        
}