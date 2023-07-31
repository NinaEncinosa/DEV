import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SettingsComponent } from './views/settings/settings.component';
import { TaskComponent } from './views/task/task.component';
import { TaskEditComponent } from './views/task-edit/task-edit.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { canActivateViaAuthGuard } from './guards/can-activate-via-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [canActivateViaAuthGuard],
    children: [
      {
        path: '',
        component: TasksComponent,
      },
      {
        path: 'tasks/:task-id',
        component: TaskComponent,
        pathMatch: 'full'
      },
      {
        path: 'tasks/:task-id/edit',
        component: TaskEditComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
