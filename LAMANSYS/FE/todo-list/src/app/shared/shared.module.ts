import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBtnComponent } from './task-btn/task-btn.component';



@NgModule({
  declarations: [
    TaskBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskBtnComponent
  ]
})
export class SharedModule { }
