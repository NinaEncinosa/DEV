import { Injectable, OnInit } from '@angular/core';
import { taskList } from '../model/task-list.model';
import { TaskItem } from '../model/task-item.model';

@Injectable({
  providedIn: 'root'
})

export class TasksService implements OnInit{
  taskList:taskList;

  constructor() { 
    this.taskList = new taskList(new Array<TaskItem>());
  }

  ngOnInit(): void {
    this.taskList.getTaskList();
  }

  getTaskList(){ 
    return this.taskList.getTaskList();
  }

  addTask( title: string, description: string){
    this.taskList.addTask(title, description);
  }

  deleteTask( task: TaskItem ){
    this.taskList.deleteTask(task);
  } 

  updateTask( task : TaskItem ){
    this.taskList.updateTask(task);
  }

}