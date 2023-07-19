import { TaskItem } from "./task-item.model";

export class taskList {
    tasks: TaskItem[] = [];
    count: number = 0;

    constructor(tasks: TaskItem[]){
        this.tasks = tasks;
        this.count = this.tasks.length;
    }

    getTaskList(){
        return this.tasks;
    }

    addTask(title: string, description: string,){
        this.tasks.unshift(new TaskItem(this.count, title, description));
        this.count++;
    }

    deleteTask(task: TaskItem){   
        let index = this.findIndexOfTaskByTaskId(task.id);
        this.tasks.splice(index, 1);
        this.count--;
    }

    updateTask(task: TaskItem){
        let index = this.findIndexOfTaskByTaskId(task.id);
        this.tasks[index] = task;
    }
        
    findIndexOfTaskByTaskId(id: number){
        return this.tasks.findIndex((task) => task.id === id);
    }
}