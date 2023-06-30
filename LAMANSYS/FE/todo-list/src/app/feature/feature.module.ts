import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddTaskComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AddTaskComponent,
    TasksComponent,
    TaskComponent
  ]
})
export class FeatureModule { 

}
