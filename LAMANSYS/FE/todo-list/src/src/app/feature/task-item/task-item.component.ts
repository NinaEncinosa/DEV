import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TaskItem } from 'src/app/model/task-item.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:TaskItem;
  copy = 'copy';
  share = 'share';
  delete = 'delete';
  
  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTaskList();
  }

  deleteTask(index: number){
    this.tasksService.deleteTask(index);
  }

  toggleCheck(index: number){
    this.tasksService.toggleCheck(index);
  }

}
