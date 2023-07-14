import { Component, Input, OnInit, inject } from '@angular/core';
import { TaskItem } from 'src/app/model/task-item.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{   
  taskList:TaskItem[] = [] ;

  constructor(public tasksService: TasksService) {
    this.taskList = this.tasksService.getTaskList();
  }

  ngOnInit(): void {
    this.tasksService.getTaskList();
  }

}
