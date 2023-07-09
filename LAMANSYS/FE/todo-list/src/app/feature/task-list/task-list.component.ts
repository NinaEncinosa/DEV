import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskList:any[]=[];

  deleteTask(id :number) {
    this.taskList.splice(id,1);
  }

  toggleCheckedTask(id: number, value:boolean) {
    this.taskList[id].isChecked = value;
  }
}
