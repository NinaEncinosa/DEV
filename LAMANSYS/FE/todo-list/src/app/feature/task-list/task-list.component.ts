import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{   

  constructor(public tasksService: TasksService, private route: ActivatedRoute) {
    this.tasksService.getTaskList();
  }

  ngOnInit(): void {
    this.tasksService.getTaskList();
    
  }

}
