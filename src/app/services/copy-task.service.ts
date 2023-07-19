import { Injectable } from '@angular/core';
import { TaskItem } from '../model/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class CopyTaskService {

  constructor() { }

  copyTask(task: TaskItem){
    return navigator.clipboard.writeText(
      "Title: " + task.title + "\n" +
      "Description: " + task.description + "\n" +
      "Done?: " + task.isChecked);;
  }
}
