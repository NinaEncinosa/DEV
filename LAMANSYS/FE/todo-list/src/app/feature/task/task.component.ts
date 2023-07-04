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
  

  emitDeleteTask(){
    this.deletedTask.emit();
  }
  
  emitChangeOnCheckTask(){
    let isChecked = this.task.isChecked;
    if(isChecked == true){
      isChecked = false;
    }else{
      isChecked = true;
    }
    this.checkedTask.emit(isChecked);
  }

}
