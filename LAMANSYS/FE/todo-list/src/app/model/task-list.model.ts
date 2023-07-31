import { TaskItem } from "./task-item.model";

export class taskList {
    tasks: TaskItem[] = [];

    constructor(tasks: TaskItem[]){
        this.tasks = tasks;
    }

    getTaskList(){
        return this.tasks;
    }

    addTask(title: string, description: string,){
        this.tasks.unshift(new TaskItem(title, description));
    }

    deleteTask(task: TaskItem){   
        let index = this.findIndexOfTaskByTaskId(task.id);
        this.tasks.splice(index, 1);
    }

    updateTask(task: TaskItem){
        let index = this.findIndexOfTaskByTaskId(task.id);
        this.tasks[index] = task;
    }
        
    findIndexOfTaskByTaskId(id: number){
        return this.tasks.findIndex((task) => task.id === id);
    }
}