import { Injectable, OnInit } from '@angular/core';
import { taskList } from '../model/task-list.model';
import { TaskItem } from '../model/task-item.model';

@Injectable({
  providedIn: 'root'
})

export class TasksService implements OnInit{
  taskList:taskList;
  private items: TaskItem[] = [];

  constructor() { 
    this.taskList = new taskList(this.items);
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

  deleteTask( index: number ){
    this.taskList.deleteTask(index);
  } 

  toggleCheck( index: number){
    this.taskList.toggleCheck(index);
  }

}
