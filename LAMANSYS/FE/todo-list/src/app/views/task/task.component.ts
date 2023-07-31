import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskItem } from 'src/app/model/task-item.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  task!: TaskItem;

  constructor(public tasksService: TasksService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.task = this.tasksService.getTask(this.route.snapshot.paramMap.get('task-id'));
  }

  editTask(){

  }

}
