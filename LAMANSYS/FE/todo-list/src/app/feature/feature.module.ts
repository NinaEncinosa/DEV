import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AddTaskComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports:[
    AddTaskComponent,
    TaskListComponent,
    TaskItemComponent
  ]
})
export class FeatureModule { 

}
