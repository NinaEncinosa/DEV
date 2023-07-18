import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareTaskService {

  constructor() { }

  shareTask(task: any){
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    } 
    else {
      return navigator.share({
        title: "Task shared from ToDo App:" + "\n",
        text: "Task: " + task.title + "\n" + "Is it done? "+ task.isChecked + "\n" + "Description: " + task.description + "\n",
        url: window.location.href
      })
    }
  }


}
