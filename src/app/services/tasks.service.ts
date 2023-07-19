import { Injectable, OnInit } from '@angular/core';
import { taskList } from '../model/task-list.model';
import { TaskItem } from '../model/task-item.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class TasksService implements OnInit{
  taskList: taskList = new taskList( [] );

  constructor(private storage: StorageService) {
    let savedTasks = this.storage.getItem('tasks');
    if (savedTasks !== null){
      this.taskList.tasks = JSON.parse(savedTasks);
    } 
    else this.taskList = new taskList( [] );
  }

  ngOnInit(): void {
    this.taskList;
  }

  getTaskList(){ 
    return this.taskList.tasks;
  }

  addTask( title: string, description: string){
    this.taskList.addTask(title, description);
    this.saveInStorage();
  }

  deleteTask( task: TaskItem ){
    this.taskList.deleteTask(task);
    this.saveInStorage();
  } 

  updateTask( task : TaskItem ){
    this.taskList.updateTask(task);
    this.saveInStorage();
    console.log(this.taskList.tasks);
  }

  private saveInStorage(){
    this.storage.setItem('tasks', JSON.stringify(this.taskList.tasks));
  }

}