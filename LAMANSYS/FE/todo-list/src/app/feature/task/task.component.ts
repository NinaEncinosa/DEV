import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() taskList:any[]=[];
  
  deleteTask(id:number){
    let index = this.taskList.findIndex(e => e.id ==id);
    this.taskList.splice(index,1);
  }

}
