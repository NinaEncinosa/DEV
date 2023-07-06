import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task:any;
  @Output() deletedTask = new EventEmitter<any>();
  @Output() checkedTask = new EventEmitter<boolean>();
  copy = 'copy';
  share = 'share';
  delete = 'delete';


  emitDeleteTask(){
    this.deletedTask.emit();
  }
  
  emitChangeOnCheckTask(){
    this.task.isChecked = !this.task.isChecked;
    this.checkedTask.emit(this.task.isChecked);
  }


}
