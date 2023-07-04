import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() taskList:any[]=[];

  deleteTask(id :number) {
    this.taskList.splice(id,1);
  }

  toggleCheckedTask(id: number, value:boolean) {
    this.taskList[id].isChecked = value;
  }
}
