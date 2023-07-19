import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TaskItem } from 'src/app/model/task-item.model';
import { TasksService } from 'src/app/services/tasks.service';
import { CopyTaskService } from 'src/app/services/copy-task.service';
import { ShareTaskService } from 'src/app/services/share-task.service';

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
  
  constructor(
    public tasksService: TasksService, 
    public copyTaskService: CopyTaskService, 
    public shareTaskService: ShareTaskService) { }

  ngOnInit(): void {
    this.tasksService.getTaskList();
  }

  toggleCheck(){
    this.task.isChecked = !this.task.isChecked;
    this.tasksService.updateTask(this.task);
  }

  deleteTask(){
    this.tasksService.deleteTask(this.task);
  }

  shareTask(){
    this.shareTaskService.shareTask(this.task);
  }

  copyTask(){
    this.copyTaskService.copyTask(this.task);
  }
}