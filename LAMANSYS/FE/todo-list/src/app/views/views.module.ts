import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SettingsComponent,
    TaskComponent,
    HomeComponent,
    TaskEditComponent,
    PageNotFoundComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule
  ]
})
export class ViewsModule { }
