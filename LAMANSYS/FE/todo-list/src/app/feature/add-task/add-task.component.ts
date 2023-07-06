import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() task = new EventEmitter<string>();
  check = "check";

  emitTask(newTask: string){
    this.task.emit(newTask);
  }
}
