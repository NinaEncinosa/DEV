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

  addTask(newTask: HTMLInputElement){
    if(newTask.value !== ""){
      this.tasksService.addTask(newTask.value, "(will have task description after adding forms)");
      newTask.value = "";
    }
  }
}
