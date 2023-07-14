import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  check = "check";

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTaskList();
  }

  addTask(title: string, description: string){
    this.tasksService.addTask(title, description);
  }
}
